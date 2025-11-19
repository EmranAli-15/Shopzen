import MainNav from '@/components/mainNav/MainNav';
import { screenBg } from '@/constants/globalStyles';
import { useAuth } from '@/contextProvider/ContextProvider';
import { Stack, useRouter } from 'expo-router';
import React from 'react';
import { StyleSheet, View } from 'react-native';

export default function Layout() {
    const { user } = useAuth();
    const router = useRouter();


    return (
        <View style={styles.container}>
            <Stack screenOptions={{
                headerShown: false,
                contentStyle: { backgroundColor: screenBg }
            }}>
            </Stack>
            <MainNav></MainNav>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});