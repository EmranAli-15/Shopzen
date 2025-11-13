import ProfileNav from '@/components/profileNav/ProfileNav';
import { Stack } from 'expo-router';

import { StyleSheet, View } from 'react-native';


export default function Layout() {

    return (
        <View style={styles.container}>
            <Stack screenOptions={{ headerShown: false }}>
            </Stack>
            <ProfileNav></ProfileNav>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        rowGap: 10,
        backgroundColor: '#fff',
    },
});