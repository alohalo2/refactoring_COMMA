import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import moment from 'moment';
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
    startDateStyle,
    endDateStyle,
    middleDateStyle,
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
    const [selectedDates, setSelectedDates] = useState<Date | [Date, Date] | undefined>(undefined); // 선택한 날짜 배열

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
        if (!selectedDates) {
            // 첫 번째 날짜 선택
            setSelectedDates(date);
        } else if (selectedDates instanceof Date) {
            // 두 번째 날짜 선택
            if (selectedDates.getTime() === date.getTime()) {
                // 같은 날짜 선택 시 단일 날짜 유지
                setSelectedDates(date);
            } else {
                // 다른 날짜 선택 시 범위 설정
                const sortedDates: [Date, Date] = selectedDates > date 
                    ? [date, selectedDates] 
                    : [selectedDates, date];
                setSelectedDates(sortedDates);
            }
        } else {
            // 세 번째 클릭 시 초기화
            setSelectedDates(date);
        }
    };

    // 날짜 선택 저장 핸들러
    const saveSelectedDates = () => {
        if (Array.isArray(selectedDates) && selectedDates.length === 2) {
            const [start, end] = selectedDates;

            setFormData({
                ...formData,
                step1: {
                    ...formData.step1,
                    dateRange: {
                        start: start.toISOString().split('T')[0],
                        end: end.toISOString().split('T')[0],
                    },
                },
            });
            
            alert(`선택된 날짜: ${start.toDateString()} - ${end.toDateString()}`);
        } else {
            alert("두 날짜를 선택하세요.");
        }
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

        // 중간 날짜인지 판별하는 함수
        const isMiddleDate = (date: Date): boolean => {
            if (Array.isArray(selectedDates) && selectedDates.length === 2) {
                const [start, end] = selectedDates;
                return date > start && date < end; // 시작과 끝 사이에 있는 날짜
            }
            return false;
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
                // onActiveStartDateChange={handleActiveStartDateChange}
                value={selectedDates} // 기본 선택 날짜
                calendarType="gregory" // 달력 타입 : "gregory" 월화수,  "hebrew" 일월화
                prev2Label={null} // 년 단위 버튼(<<) 삭제
                next2Label={null} // 년 단위 버튼(>>) 삭제
                formatDay={(locale, date) => moment(date).format("D")} // 일 제거 숫자만 보이게
                formatYear={(locale, date) => moment(date).format("YYYY")} // 네비게이션 눌렀을때 숫자 년도만 보이게
                formatMonthYear={(locale, date) => moment(date).format("YYYY. MM")} // 네비게이션에서 2023. 12 이렇게 보이도록 설정
                minDetail="year" // 10년단위 년도 숨기기
                showNeighboringMonth={false}
                showDoubleView={true} // 두 개의 달력 뷰 표시

                tileDisabled={({ date }) => date.getTime() < new Date(new Date().setHours(0, 0, 0, 0)).getTime()}

                tileClassName={({ date }) => {
                    if (Array.isArray(selectedDates)) {
                        const [start, end] = selectedDates;

                        if (date.toDateString() === start.toDateString()) {
                            return startDateStyle; // 시작 날짜 스타일
                        }
                        if (date.toDateString() === end.toDateString()) {
                            return endDateStyle; // 끝 날짜 스타일
                        }
                        if (isMiddleDate(date)) {
                            return middleDateStyle; // 중간 날짜 스타일
                        }
                    }
                    return null;
                }}

                className={PYTS1_Trip_Calendar}
            />
        </div>
        {/* 날짜 선택 저장 버튼 */}
        <div className={PYTS1_Button_Box}>
            <button type="button" onClick={saveSelectedDates} className={PYTS1_Button}>
                날짜 선택 완료
            </button>
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