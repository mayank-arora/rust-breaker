export interface DayProgress {
    date: string;
    week: 1 | 2 | 3 | 4;
    completed: boolean;
    minutesCoded: number;
    githubPushed: boolean;
    publicPosted: boolean;
    notes: string;
}

export interface ChecklistItem {
    id: string;
    text: string;
    completed: boolean;
    week: number;
    category: 'daily' | 'weekly';
}

export interface JournalEntry {
    id: string;
    date: string;
    learned: string;
    implemented: string;
    avoided: string;
    mood: 1 | 2 | 3 | 4 | 5;
}

export interface LearningTrapScore {
    total: number;
    categories: {
        tutorials: number;
        research: number;
        planning: number;
        implementation: number;
    };
    risk: 'low' | 'medium' | 'high';
} 