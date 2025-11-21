import Ionicons from '@expo/vector-icons/Ionicons';
import { useRouter } from 'expo-router';
import React from 'react';
import { TouchableOpacity, View } from 'react-native';

export default function BackButton() {
    const router = useRouter();
    return (
        <View>
            <TouchableOpacity
                onPress={() => router.back()}
                style={{ width: 40, height: 40, alignItems: "center", justifyContent: "center", borderRadius: "50%" }}
            >
                <Ionicons name="arrow-back" size={24} color="#1A1F71" />
            </TouchableOpacity>
        </View>
    )
}