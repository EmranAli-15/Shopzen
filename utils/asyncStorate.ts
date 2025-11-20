import AsyncStorage from '@react-native-async-storage/async-storage';

// Storing data
export const storeData = async ({ key, value }: { key: any, value: any }) => {
    try {
        await AsyncStorage.setItem(key, JSON.stringify(value));
    } catch (e) {
        console.error("Error saving data:", e);
    }
};

// Retrieving data
export const retrieveData = async (key: any) => {
    try {
        const value = await AsyncStorage.getItem(key);
        if (value !== null) {
            return value;
        }
    } catch (e) {
        console.error("Error retrieving data:", e);
    }
    return null;
};

// Removing data
export const removeData = async (key: any) => {
    try {
        await AsyncStorage.removeItem(key);
    } catch (e) {
        console.error("Error removing data:", e);
    }
};


export const handleAddToCart = async (data: any) => {
    let myCart = await retrieveData("myCart");

    if (myCart) {
        const cart = JSON.parse(myCart);
        const flag = cart.find((item: any) => item.id === data.id);
        if (!flag) {
            const updatedCart = [...cart, data];
            storeData({ key: "myCart", value: updatedCart })
        }
    }
    else {
        storeData({ key: "myCart", value: [data] })
    }

}