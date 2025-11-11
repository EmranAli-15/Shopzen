import { Stack } from 'expo-router';

import { StyleSheet, View } from 'react-native';


export default function Layout() {

    return (
        <View style={styles.container}>
            <Stack screenOptions={{ headerShown: false }}>
            </Stack>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
});