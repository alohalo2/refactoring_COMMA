import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import PlanYourTripStep1 from '../components/plan your trip/PlanYourTripStep1';
import PlanYourTripStep2 from '../components/plan your trip/PlanYourTripStep2';
import PlanYourTripStep3 from '../components/plan your trip/PlanYourTripStep3';
import PlanYourTripStep4 from '../components/plan your trip/PlanYourTripStep4';
import PlanYourTripStep5 from '../components/plan your trip/PlanYourTripStep5';
import PlanYourTripStep6 from '../components/plan your trip/PlanYourTripStep6';

// Define types for formData
type Transportation = {
    type: string; // "버스", "비행기", 등
    duration: string;
    startTime: string;
    endTime: string;
};

type Activity = {
    placeName: string;
    startTime: string;
    endTime: string;
};

type DailySummary = {
    date: string;
    activities: { time: string; location: string; activity: string }[];
};

type Timeline = {
    time: string;
    place: string;
    description: string;
};

type FormData = {
step1: {
    title: string;
    dateRange: { start: string; end: string };
    themes: string[]; // ["휴양", "관광", "비즈니스", "쇼핑"]
};
step2: {
    startPoint: string;
    endPoint: string;
    additionalPoints: string[]; // ["지역1", "지역2"]
    transportation: Transportation[];
};
step3: {
    selectedRegions: string[]; // ["성산", "제주시"]
    searchQuery: string;
    searchResults: { name: string; address: string; rating: number; priceRange: string }[];
    selectedAccommodations: { name: string; id: string; address: string }[];
};
step4: {
    selectedRegions: string[];
    searchQuery: string;
    searchResults: { name: string; address: string; rating: number }[];
    selectedPlaces: { name: string; id: string }[];
    activitySchedule: Activity[];
};
step5: {
    dailySummary: DailySummary[];
    timeline: Timeline[];
};
step6: {
    finalPlan: {
    title: string;
    dateRange: { start: string; end: string };
    themes: string[];
    routeSummary: any[]; // Define specific structure if needed
    accommodationSummary: any[];
    scheduleSummary: any[];
    };
};
};

const PlanYourTrip: React.FC = () => {
const navi = useNavigate();
const location = useLocation();

const [formData, setFormData] = useState<FormData>({
    step1: {
        title: "",
        dateRange: { start: "", end: "" },
        themes: [],
    },
    step2: {
        startPoint: "",
        endPoint: "",
        additionalPoints: [],
        transportation: [
            {
            type: "",
            duration: "",
            startTime: "",
            endTime: "",
            },
        ],
    },
    step3: {
        selectedRegions: [],
        searchQuery: "",
        searchResults: [],
        selectedAccommodations: [],
    },
    step4: {
        selectedRegions: [],
        searchQuery: "",
        searchResults: [],
        selectedPlaces: [],
        activitySchedule: [
            {
            placeName: "",
            startTime: "",
            endTime: "",
            },
        ],
    },
    step5: {
        dailySummary: [
            {
            date: "",
            activities: [
                { time: "", location: "", activity: "" },
            ],
            },
        ],
        timeline: [
            { time: "", place: "", description: "" },
        ],
    },
    step6: {
        finalPlan: {
            title: "",
            dateRange: { start: "", end: "" },
            themes: [],
            routeSummary: [],
            accommodationSummary: [],
            scheduleSummary: [],
        },
    },
});

const stepMap: Record<string, number> = {
    '/planYourTrip/step1': 1,
    '/planYourTrip/step2': 2,
    '/planYourTrip/step3': 3,
    '/planYourTrip/step4': 4,
    '/planYourTrip/step5': 5,
    '/planYourTrip/step6': 6,
};

const [currentStep, setCurrentStep] = useState<number>(stepMap[location.pathname] || 1);

const nextStep = () => {
    const nextStepNum = currentStep + 1;
    navi(`/planYourTrip/step${nextStepNum}`);
};

const prevStep = () => {
    const prevStepNum = currentStep - 1;
    if (prevStepNum >= 1) {
    navi(`/planYourTrip/step${prevStepNum}`);
    }
};

const renderStep = () => {
    switch (currentStep) {
    case 1:
        return <PlanYourTripStep1 formData={formData} setFormData={setFormData} nextStep={nextStep} />;
    case 2:
        return <PlanYourTripStep2 formData={formData} setFormData={setFormData} nextStep={nextStep} prevStep={prevStep} />;
    case 3:
        return <PlanYourTripStep3 formData={formData} setFormData={setFormData} nextStep={nextStep} prevStep={prevStep} />;
    case 4:
        return <PlanYourTripStep4 formData={formData} setFormData={setFormData} nextStep={nextStep} prevStep={prevStep} />;
    case 5:
        return <PlanYourTripStep5 formData={formData} setFormData={setFormData} nextStep={nextStep} prevStep={prevStep} />;
    case 6:
        return <PlanYourTripStep6 />;
    default:
        return null;
    }
};

useEffect(() => {
    setCurrentStep(stepMap[location.pathname] || 1);
    window.scrollTo(0, 0);
}, [location.pathname]);

return (
    <div>
    {renderStep()}
    </div>
);
};

export default PlanYourTrip;