import React from 'react';
import { TripFormState } from './PlanYourTripTypes';

type PlanYourTripStep2Props = {
    formData: TripFormState;
    setFormData: React.Dispatch<React.SetStateAction<TripFormState>>;
    nextStep: () => void;
    prevStep: () => void;
};

const PlanYourTripStep2: React.FC<PlanYourTripStep2Props> = ({ formData, setFormData, nextStep, prevStep }) => {
    return (
    <div>
        <h2>Step 2</h2>
        <button onClick={prevStep}>Prev</button>
        <button onClick={nextStep}>Next</button>
    </div>
    );
};

export default PlanYourTripStep2;