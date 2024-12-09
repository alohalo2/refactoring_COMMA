import React from 'react';
import { 
    PYH_Header_Box,
    PYH_Header_P,
    PYH_Progress_Box,
    PYH_Header_StepNumber,
    PYH_Header_Label,
    PYH_Header_ProgressLine,
    PYH_BreakLine,
} from '../../css/plan your trip/PlanYourTripHeader.css';


// Props 타입 정의
type HeaderProps = {
    currentStep: number;
    stepCount: number;
};

// Header 컴포넌트 정의
const PlanYourTripHeader: React.FC<HeaderProps> = ({ currentStep, stepCount }) => {

    const steps = [
        { label: '필터링' },
        { label: '루트' },
        { label: '숙소 정하기' },
        { label: '일별 세부 일정' },
        { label: '미리보기' },
        { label: '완료' },
    ];

    return (
        <div className={PYH_Header_Box}>
            <h1>Plan Your Trip</h1>
            <p className={PYH_Header_P}>복잡한 일상 속, 여행 계획은 간편하게! <br/> 클릭 몇 번으로 여유로운 여행을 시작하세요.</p>
            <div className={PYH_Progress_Box}>
                {steps.map((step, index) => (
                    <div key={index}>
                        <div className={index < currentStep ? PYH_Header_ProgressLine.active : PYH_Header_ProgressLine.inactive } />
                        <div className={currentStep === index + 1 ? PYH_Header_StepNumber.active : PYH_Header_StepNumber.inactive}>{`STEP ${index + 1}`}</div>
                        <div className={currentStep === index + 1 ? PYH_Header_Label.active : PYH_Header_Label.inactive}>{step.label}</div>
                    </div>
                ))}
            </div>
            <div className={PYH_BreakLine}></div>
        </div>
    );
};

export default PlanYourTripHeader;