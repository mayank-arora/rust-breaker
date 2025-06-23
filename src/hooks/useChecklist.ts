import { useState, useEffect } from 'react';
import { ChecklistItem } from '../types';
import { checklistItems as initialData } from '../data/checklistItems';
import { loadFromStorage, saveToStorage } from '../utils/storage';

const CHECKLIST_STORAGE_KEY = 'procrastination-checklist';

const initializeChecklistData = (): ChecklistItem[] => {
    const storedData = loadFromStorage<ChecklistItem[]>(CHECKLIST_STORAGE_KEY);
    return storedData || initialData;
};

export const useChecklist = () => {
    const [items, setItems] = useState<ChecklistItem[]>(initializeChecklistData());

    useEffect(() => {
        saveToStorage(CHECKLIST_STORAGE_KEY, items);
    }, [items]);

    const toggleItem = (id: string) => {
        setItems((prevItems) =>
            prevItems.map((item) =>
                item.id === id ? { ...item, completed: !item.completed } : item
            )
        );
    };

    return { items, toggleItem };
}; 