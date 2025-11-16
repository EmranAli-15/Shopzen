import { screenBg } from '@/constants/globalStyles';
import { Stack } from 'expo-router';
import React from 'react';
import { StyleSheet, View } from 'react-native';

export default function Layout() {



    return (
        <View style={styles.container}>
            <Stack screenOptions={{
                headerShown: false,
                contentStyle: { backgroundColor: screenBg }
            }}>
            </Stack>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});