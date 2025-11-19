import { screenBg } from '@/constants/globalStyles';
import { useAuth } from '@/contextProvider/ContextProvider';
import { Stack, useRouter } from 'expo-router';
import React from 'react';
import { StyleSheet, View } from 'react-native';

export default function Layout() {
    const { user } = useAuth();
    const router = useRouter();

    console.log(user);

    if (!user)
        return router.navigate("/SignIn");


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
        // flex: 1
        height: "100%"
    }
});