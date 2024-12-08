import React from 'react';
import { TripFormState } from './PlanYourTripTypes';

type PlanYourTripStep5Props = {
    formData: TripFormState;
    setFormData: React.Dispatch<React.SetStateAction<TripFormState>>;
    nextStep: () => void;
    prevStep: () => void;
};

const PlanYourTripStep5: React.FC<PlanYourTripStep5Props> = ({ formData, setFormData, nextStep, prevStep }) => {
    return (
    <div>
        <h2>Step 5</h2>
        <button onClick={prevStep}>Prev</button>
        <button onClick={nextStep}>Next</button>
    </div>
    );
};

export default PlanYourTripStep5;