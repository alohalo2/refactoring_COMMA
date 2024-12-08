// PlanYourTripTypes.ts
export type Transportation = {
    type: string;
    duration: string;
    startTime: string;
    endTime: string;
};

export type Activity = {
    placeName: string;
    startTime: string;
    endTime: string;
};

export type DailySummary = {
    date: string;
    activities: { time: string; location: string; activity: string }[];
};

export type Timeline = {
    time: string;
    place: string;
    description: string;
};

export type FinalPlan = {
    title: string;
    dateRange: { start: string; end: string };
    themes: string[];
    routeSummary: any[];
    accommodationSummary: any[];
    scheduleSummary: any[];
};

export type TripFormState = {
    step1: {
    title: string;
    dateRange: { start: string; end: string };
    themes: string[];
    };
    step2: {
    startPoint: string;
    endPoint: string;
    additionalPoints: string[];
    transportation: Transportation[];
    };
    step3: {
    selectedRegions: string[];
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
    finalPlan: FinalPlan;
    };
};