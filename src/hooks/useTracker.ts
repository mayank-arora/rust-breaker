import { useState, useEffect } from 'react';
import { loadFromStorage, saveToStorage } from '../utils/storage';

const TRACKER_STORAGE_KEY = 'procrastination-tracker';

export interface TrackerDay {
    day: number;
    completed: boolean;
}

interface TrackerData {
    days: TrackerDay[];
    startDate: string;
}

const initializeTrackerData = (): TrackerData => {
    const storedData = loadFromStorage<TrackerData | TrackerDay[]>(TRACKER_STORAGE_KEY);

    if (storedData) {
        // Check if it's the old format (just an array)
        if (Array.isArray(storedData)) {
            return {
                days: storedData,
                startDate: new Date().toISOString(),
            };
        }
        // It's the new format
        return storedData as TrackerData;
    }

    const totalDays = 30;
    return {
        days: Array.from({ length: totalDays }, (_, i) => ({
            day: i + 1,
            completed: false,
        })),
        startDate: new Date().toISOString(),
    };
};

export const useTracker = () => {
    const [trackerData, setTrackerData] = useState<TrackerData>(initializeTrackerData());

    useEffect(() => {
        saveToStorage(TRACKER_STORAGE_KEY, trackerData);
    }, [trackerData]);

    const markDayAsComplete = (day: number) => {
        setTrackerData((prevData) => ({
            ...prevData,
            days: prevData.days.map((d) =>
                d.day === day ? { ...d, completed: !d.completed } : d
            ),
        }));
    };

    return { ...trackerData, markDayAsComplete };
};
