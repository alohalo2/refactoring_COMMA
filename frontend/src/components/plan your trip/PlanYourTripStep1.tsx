import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { TripFormState } from './PlanYourTripTypes';
import {
    PYTS1_Box,
    PYTS1_Contents_Title,
    PYTS1_Trip_Title_Box,
    PYTS1_Trip_Title_Input,
    PYTS1_Trip_Calendar_Box,
    PYTS1_Trip_Calendar,
    PYTS1_Trip_Select_Box,
    PYTS1_Trip_Select,
    PYTS1_Trip_Select_Label,
    PYTS1_Trip_Select_Checkbox,
    PYTS1_Button_Box,
    PYTS1_Button,
} from '../../css/plan your trip/PlanYourTripStep1.css';

// Value 타입 직접 정의
type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

type PlanYourTripStep1Props = {
    formData: TripFormState;
    setFormData: React.Dispatch<React.SetStateAction<TripFormState>>;
    nextStep: () => void;
};

const PlanYourTripStep1: React.FC<PlanYourTripStep1Props> = ({ formData, setFormData, nextStep }) => {
    const [selectedDates, setSelectedDates] = useState<Date[]>([]); // 선택한 날짜 배열

    // 여행 테마 리스트
    const themes = ['휴양', '관광', '비즈니스', '쇼핑'];

    // 여행 제목 변경 핸들러
    const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ 
        ...formData, 
            step1: {
                ...formData.step1,
                title: event.target.value,
            },
        });
    };

    // 날짜 변경 핸들러
    const handleDateChange = (date: Date) => {
        if (selectedDates.length === 0) {
        // 첫 번째 날짜 선택
        setSelectedDates([date]);
        } else if (selectedDates.length === 1) {
        // 두 번째 날짜 선택
        const [startDate] = selectedDates;
        const endDate = date;

        // 시작일이 종료일보다 크면 교환
        if (startDate > endDate) {
            setSelectedDates([endDate, startDate]);
        } else {
            setSelectedDates([startDate, endDate]);
        }

        // 폼 데이터에 저장
        setFormData({
            ...formData,
            step1: {
            ...formData.step1,
            dateRange: {
                start: startDate.toISOString().split('T')[0],
                end: endDate.toISOString().split('T')[0],
            },
            },
        });
        } else {
        // 초기화 후 다시 선택
        setSelectedDates([date]);
        }
    };

        // 범위 내 날짜 확인 함수
    const isInRange = (date: Date) => {
        if (selectedDates.length < 2) return false;
        const [start, end] = selectedDates;
        return date >= start && date <= end;
    };

    // 테마 선택 핸들러
    const handleThemeChange = (theme: string) => {
        const updatedThemes = formData.step1.themes.includes(theme)
        ? formData.step1.themes.filter((t) => t !== theme) // 이미 선택된 경우 제거
        : [...formData.step1.themes, theme]; // 선택되지 않은 경우 추가
        setFormData({
            ...formData,
            step1: {
                ...formData.step1,
                themes: updatedThemes,
            },
        });
    };

    return (
    <div className={PYTS1_Box}>

        {/* 여행 제목 */}
        <div className={PYTS1_Trip_Title_Box}>
            <div className={PYTS1_Contents_Title}>
                <h3>여행 제목</h3>
            </div>
            <input
            type="text"
            value={formData.step1.title || ''}
            onChange={handleTitleChange}
            placeholder="여행 제목을 입력하세요"
            className={PYTS1_Trip_Title_Input}
            />
        </div>

        {/* 날짜 선택 */}
        <div className={PYTS1_Trip_Calendar_Box}>
            <div className={PYTS1_Contents_Title}>
                <h3>날짜</h3>
            </div>
            <Calendar
            onClickDay={handleDateChange} // 날짜 클릭 핸들러
            value={selectedDates[0]} // 기본 선택 날짜
            calendarType="gregory" // 달력 타입 : "gregory" 월화수,  "hebrew" 일월화
            showDoubleView={true} // 두 개의 달력 뷰 표시
            prev2Label={null} // 년 단위 버튼(<<) 삭제
            next2Label={null} // 년 단위 버튼(>>) 삭제
            tileClassName={({ date, view }) => {
                if (view === 'month') {
                if (selectedDates.length > 0 && selectedDates.includes(date)) {
                    return 'selected-date'; // 선택된 날짜 강조
                }
                if (isInRange(date)) {
                    return 'range-date'; // 범위 내 날짜 강조
                }
                }
                return null;
            }}
            className={PYTS1_Trip_Calendar}
            />
        </div>

        {/* 여행 테마 */}
        <div className={PYTS1_Trip_Select_Box}>
            <div className={PYTS1_Contents_Title}>
                <h3>여행 테마</h3>
            </div>
            <div>
                <p>**여행 테마를 선택해주세요. (중복 선택 가능)</p>
                <div className={PYTS1_Trip_Select}>
                {themes.map((theme) => (
                    <label key={theme} style={{ marginRight: '10px' }}
                            className={PYTS1_Trip_Select_Label}
                    >
                    <input
                        type="checkbox"
                        checked={formData.step1.themes.includes(theme)}
                        onChange={() => handleThemeChange(theme)}
                        className={PYTS1_Trip_Select_Checkbox}
                    />
                    {theme}
                    </label>
                ))}
                </div>
            </div>
        </div>

        {/* 다음 단계 버튼 */}
        <div className={PYTS1_Button_Box}>
            <button type="button" onClick={nextStep}
                    className={PYTS1_Button}
            >
            다음단계
            </button>
        </div>
    </div>
    );
};

export default PlanYourTripStep1;