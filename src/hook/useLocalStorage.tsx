import { useState } from "react";

export const useLocalStorage = <T,>(key: string, defaultValue: T): [T, (newValue: T) => void] => {
    const [storedValue, setStoredValue] = useState<T>(() => {
        try {
            const item = window.localStorage.getItem(key);
            return item ? JSON.parse(item) : defaultValue;
        } catch (error) {
            console.error("Error reading localStorage", error);
            return defaultValue;
        }
    });

    const setValue = (newValue: T) => {
        try {
            setStoredValue(newValue);
            window.localStorage.setItem(key, JSON.stringify(newValue));
        } catch (error) {
            console.error("Error setting localStorage", error);
        }
    };

    return [storedValue, setValue];
};
