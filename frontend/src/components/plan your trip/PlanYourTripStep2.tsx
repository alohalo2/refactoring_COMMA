import React from 'react';
import { TripFormState,Transportation } from './PlanYourTripTypes';
import NaverMap from './NaverMap';
import {
    PYTS2_Box,
    PYTS2_Left_Box,
    PYTS2_Right_Box,

} from '../../css/plan your trip/PlanYourTripStep2.css';

type PlanYourTripStep2Props = {
    formData: TripFormState;
    setFormData: React.Dispatch<React.SetStateAction<TripFormState>>;
    nextStep: () => void;
    prevStep: () => void;
};

const PlanYourTripStep2: React.FC<PlanYourTripStep2Props> = ({ formData, setFormData, nextStep, prevStep }) => {

    // 입력값 업데이트 핸들러
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
        ...prev,
        [name]: value,
        }));
    };

    // 교통수단 추가 핸들러
    const addTransportation = () => {
        const newTransport: Transportation = {
            type: "",
            duration: "",
            startTime: "",
            endTime: "",
        };
        setFormData((prev) => ({
            ...prev,
            transportation: [...prev.step2.transportation, newTransport],
        }));
    };

    // 교통수단 수정 핸들러
    const handleTransportationChange = (
        index: number,
        field: keyof Transportation,
        value: string
    ) => {
        const updatedTransportation = [...formData.step2.transportation];
        updatedTransportation[index][field] = value;
        setFormData((prev) => ({
        ...prev,
        transportation: updatedTransportation,
        }));
    };

    // 추가 지점 추가 핸들러
    const addPoint = () => {
        setFormData((prev) => ({
        ...prev,
        additionalPoints: [...prev.step2.additionalPoints, ""],
        }));
    };

    // 추가 지점 수정 핸들러
    const handlePointChange = (index: number, value: string) => {
        const updatedPoints = [...formData.step2.additionalPoints];
        updatedPoints[index] = value;
        setFormData((prev) => ({
        ...prev,
        additionalPoints: updatedPoints,
        }));
    };



    return (
        <div>
            <div className={PYTS2_Box}>
                {/* 왼쪽 타임라인 */}
                <div className={PYTS2_Left_Box}>
                    <h2>타임라인</h2>
                    <ul>
                        <li>시작 지점: {formData.step2.startPoint}</li>
                        {formData.step2.additionalPoints.map((point, index) => (
                            <li key={index}>추가 지점 {index + 1}: {point}</li>
                        ))}
                        <li>종료 지점: {formData.step2.endPoint}</li>
                        {formData.step2.transportation.map((t, index) => (
                            <li key={index}>
                            {t.type} - {t.duration} ({t.startTime} ~ {t.endTime})
                            </li>
                        ))}
                    </ul>
                </div>

                {/* 오른쪽 입력 폼 */}
                <div className={PYTS2_Right_Box}>
                    <div>
                        <NaverMap/>
                    </div>
                    
                    <div>
                        <label>시작 지점 설정</label>
                        <input
                            type="text"
                            name="startPoint"
                            value={formData.step2.startPoint}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div>
                        <label>종료 지점 설정</label>
                        <input
                            type="text"
                            name="endPoint"
                            value={formData.step2.endPoint}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div>
                        <label>추가 지점</label>
                        {formData.step2.additionalPoints.map((point, index) => (
                            <input
                            key={index}
                            type="text"
                            value={point}
                            onChange={(e) => handlePointChange(index, e.target.value)}
                            />
                        ))}
                        <button onClick={addPoint}>추가</button>
                    </div>
                    <div>
                        <h3>이동수단 추가</h3>
                        {formData.step2.transportation.map((t, index) => (
                            <div key={index}>
                                <label>유형</label>
                                <input
                                    type="text"
                                    value={t.type}
                                    onChange={(e) =>
                                    handleTransportationChange(index, "type", e.target.value)
                                    }
                                />
                                <label>소요 시간</label>
                                <input
                                    type="text"
                                    value={t.duration}
                                    onChange={(e) =>
                                    handleTransportationChange(index, "duration", e.target.value)
                                    }
                                />
                                <label>출발 시간</label>
                                <input
                                    type="time"
                                    value={t.startTime}
                                    onChange={(e) =>
                                    handleTransportationChange(index, "startTime", e.target.value)
                                    }
                                />
                                <label>도착 시간</label>
                                <input
                                    type="time"
                                    value={t.endTime}
                                    onChange={(e) =>
                                    handleTransportationChange(index, "endTime", e.target.value)
                                    }
                                />
                            </div>
                        ))}
                        <button onClick={addTransportation}>추가</button>
                    </div>
                    <div>
                        <button onClick={prevStep}>이전단계</button>
                        <button onClick={nextStep}>다음단계</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PlanYourTripStep2;