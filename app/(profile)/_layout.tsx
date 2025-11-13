import ProfileNav from '@/components/profileNav/ProfileNav';
import { screenBg } from '@/constants/globalStyles';
import { Stack } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { Keyboard, StyleSheet, View } from 'react-native';

export default function Layout() {
    const [keyboardVisible, setKeyboardVisible] = useState(false);

    useEffect(() => {
        const showSub = Keyboard.addListener('keyboardDidShow', () => setKeyboardVisible(true));
        const hideSub = Keyboard.addListener('keyboardDidHide', () => setKeyboardVisible(false));

        return () => {
            showSub.remove();
            hideSub.remove();
        };
    }, []);

    return (
        <View style={styles.container}>
            <Stack screenOptions={{
                headerShown: false,
                contentStyle: { backgroundColor: screenBg }
            }}>
            </Stack>

            {!keyboardVisible && (
                <View style={styles.navbarWrapper}>
                    <ProfileNav />
                </View>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    navbarWrapper: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        backgroundColor: '#fff',
    },
});