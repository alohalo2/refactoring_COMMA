import React from 'react';
import { TripFormState } from './PlanYourTripTypes';

type PlanYourTripStep4Props = {
    formData: TripFormState;
    setFormData: React.Dispatch<React.SetStateAction<TripFormState>>;
    nextStep: () => void;
    prevStep: () => void;
};

const PlanYourTripStep4: React.FC<PlanYourTripStep4Props> = ({ formData, setFormData, nextStep, prevStep }) => {
    return (
    <div>
        <h2>Step 4</h2>
        <button onClick={prevStep}>Prev</button>
        <button onClick={nextStep}>Next</button>
    </div>
    );
};

export default PlanYourTripStep4;