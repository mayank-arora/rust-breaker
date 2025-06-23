import { useState, useEffect } from 'react';
import { loadFromStorage, saveToStorage } from '../utils/storage';

const TRACKER_STORAGE_KEY = 'procrastination-tracker';

export interface TrackerDay {
    day: number;
    completed: boolean;
}

const initializeTrackerData = (): TrackerDay[] => {
    const storedData = loadFromStorage<TrackerDay[]>(TRACKER_STORAGE_KEY);
    if (storedData) {
        return storedData;
    }

    const totalDays = 30;
    return Array.from({ length: totalDays }, (_, i) => ({
        day: i + 1,
        completed: false,
    }));
};

export const useTracker = () => {
    const [days, setDays] = useState<TrackerDay[]>(initializeTrackerData());

    useEffect(() => {
        saveToStorage(TRACKER_STORAGE_KEY, days);
    }, [days]);

    const markDayAsComplete = (day: number) => {
        setDays((prevDays) =>
            prevDays.map((d) =>
                d.day === day ? { ...d, completed: !d.completed } : d
            )
        );
    };

    return { days, markDayAsComplete };
};
