const STORAGE_PREFIX = 'meal_app_';

export function setStorageItem(key, value) {
    try {
        localStorage.setItem(`${STORAGE_PREFIX}${key}`, JSON.stringify(value));
    } catch (e) {
        console.error(`Error setting ${key} in localStorage`, e);
    }
}

export function getStorageItem(key) {
    try {
        const value = localStorage.getItem(`${STORAGE_PREFIX}${key}`);
        return value ? JSON.parse(value) : null;
    } catch (e) {
        console.error(`Error getting ${key} from localStorage`, e);
        return null;
    }
}

export function removeStorageItem(key) {
    localStorage.removeItem(`${STORAGE_PREFIX}${key}`);

}

