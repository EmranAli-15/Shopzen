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
                style={{ backgroundColor: "#FFF2EB", width: 50, height: 50, alignItems: "center", justifyContent: "center", borderRadius: "50%" }}
            >
                <Ionicons name="arrow-back" size={24} color="#FF620A" />
            </TouchableOpacity>
        </View>
    )
}