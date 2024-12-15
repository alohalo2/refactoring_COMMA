import React, {useState} from 'react';
import Calendar from 'react-calendar';
import { TripFormState } from './PlanYourTripTypes';

type PlanYourTripStep3Props = {
    formData: TripFormState;
    setFormData: React.Dispatch<React.SetStateAction<TripFormState>>;
    nextStep: () => void;
    prevStep: () => void;
};

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];


const PlanYourTripStep3: React.FC<PlanYourTripStep3Props> = ({ formData, setFormData, nextStep, prevStep }) => {
    const [selectedDates, setSelectedDates] = useState<Value>(null);



    return (
    <div>
        <h2>Step 3</h2>
        <Calendar   onChange={setSelectedDates}
                    value={selectedDates}
                    locale="ko-KR" // 한국어 설정: 월요일 시작 
        />
        <button onClick={prevStep}>Prev</button>
        <button onClick={nextStep}>Next</button>
    </div>
    );
};

export default PlanYourTripStep3;