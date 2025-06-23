export const saveToStorage = <T>(key: string, data: T): void => {
    try {
        const serializedData = JSON.stringify(data);
        localStorage.setItem(key, serializedData);
    } catch (error) {
        console.error('Error saving to localStorage:', error);
    }
};

export const loadFromStorage = <T>(key: string): T | null => {
    try {
        const serializedData = localStorage.getItem(key);
        if (serializedData === null) {
            return null;
        }
        return JSON.parse(serializedData) as T;
    } catch (error) {
        console.error('Error loading from localStorage:', error);
        return null;
    }
}; 