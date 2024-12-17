import React, {useState} from 'react';

import { TripFormState } from './PlanYourTripTypes';

type PlanYourTripStep3Props = {
    formData: TripFormState;
    setFormData: React.Dispatch<React.SetStateAction<TripFormState>>;
    nextStep: () => void;
    prevStep: () => void;
};

const PlanYourTripStep3: React.FC<PlanYourTripStep3Props> = ({ formData, setFormData, nextStep, prevStep }) => {

    return (
    <div>
        <h2>Step 3</h2>
        <button onClick={prevStep}>Prev</button>
        <button onClick={nextStep}>Next</button>
    </div>
    );
};

export default PlanYourTripStep3;