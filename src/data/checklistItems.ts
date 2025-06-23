import { ChecklistItem } from '../types';

export const checklistItems: ChecklistItem[] = [
    // Week 1
    { id: 'w1d1-1', text: 'Open IDE and write code for 30 minutes', week: 1, category: 'daily', completed: false },
    { id: 'w1d1-2', text: 'Track what you learned vs. what you built', week: 1, category: 'daily', completed: false },
    { id: 'w1-weekly-1', text: 'Review the week and plan the next one', week: 1, category: 'weekly', completed: false },

    // Week 2
    { id: 'w2d1-1', text: 'Code for 45 minutes', week: 2, category: 'daily', completed: false },
    { id: 'w2d1-2', text: 'Push your code to GitHub', week: 2, category: 'daily', completed: false },
    { id: 'w2-weekly-1', text: 'Write a short blog post about your progress', week: 2, category: 'weekly', completed: false },
]; 