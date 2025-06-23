import { useState, useEffect } from 'react';
import { JournalEntry } from '../types';
import { loadFromStorage, saveToStorage } from '../utils/storage';
import { v4 as uuidv4 } from 'uuid';

const JOURNAL_STORAGE_KEY = 'procrastination-journal';

const initializeJournalData = (): JournalEntry[] => {
    const storedData = loadFromStorage<JournalEntry[]>(JOURNAL_STORAGE_KEY);
    return storedData || [];
};

export const useJournal = () => {
    const [entries, setEntries] = useState<JournalEntry[]>(initializeJournalData());

    useEffect(() => {
        saveToStorage(JOURNAL_STORAGE_KEY, entries);
    }, [entries]);

    const addEntry = (entry: Omit<JournalEntry, 'id' | 'date'>) => {
        const newEntry: JournalEntry = {
            ...entry,
            id: uuidv4(),
            date: new Date().toISOString(),
        };
        setEntries([newEntry, ...entries]);
    };

    return { entries, addEntry };
}; 