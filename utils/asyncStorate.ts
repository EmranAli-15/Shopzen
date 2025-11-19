import AsyncStorage from '@react-native-async-storage/async-storage';

// Storing data
export const storeData = async ({ key, value }: { key: any, value: any }) => {
    try {
        await AsyncStorage.setItem(key, JSON.stringify(value));
    } catch (e) {
        // saving error
        console.error("Error saving data:", e);
    }
};

// Retrieving data
export const retrieveData = async (key: any) => {
    try {
        const value = await AsyncStorage.getItem(key);
        if (value !== null) {
            // value previously stored
            return value;
        }
    } catch (e) {
        // error reading value
        console.error("Error retrieving data:", e);
    }
    return null;
};

// Removing data
export const removeData = async (key: any) => {
    try {
        await AsyncStorage.removeItem(key);
    } catch (e) {
        // remove error
        console.error("Error removing data:", e);
    }
};