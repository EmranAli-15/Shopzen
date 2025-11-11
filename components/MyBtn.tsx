import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function MyBtn({ text, filled }: { text: string, filled: boolean }) {
    return (
        <View>
            <TouchableOpacity
                style={[styles.button, filled && { backgroundColor: "#FF620A" }]}
            >
                <Text style={[styles.text, filled && { color: "white" }]}>{text}</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    button: {
        borderWidth: 1,
        borderColor: "#FF620A",
        paddingHorizontal: 10,
        paddingVertical: 16,
        borderRadius: 28
    },
    text: {
        fontSize: 16,
        textAlign: "center"
    }
});