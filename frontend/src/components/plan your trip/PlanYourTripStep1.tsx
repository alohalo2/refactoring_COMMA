import React from 'react';
import { TripFormState } from './PlanYourTripTypes';

type PlanYourTripStep1Props = {
    formData: TripFormState;
    setFormData: React.Dispatch<React.SetStateAction<TripFormState>>;
    nextStep: () => void;
};

const PlanYourTripStep1: React.FC<PlanYourTripStep1Props> = ({ formData, setFormData, nextStep }) => {
    return (
    <div>
        <h2>Step 1</h2>
        <button onClick={nextStep}>Next</button>
    </div>
    );
};

export default PlanYourTripStep1;