import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import React, { useRef, useState } from "react";
import { Animated, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Collapsible({ title, children }: any) {
    const [open, setOpen] = useState(false);
    const animation = useRef(new Animated.Value(0)).current;
    const [contentHeight, setContentHeight] = useState(0);

    const toggle = () => {
        Animated.timing(animation, {
            toValue: open ? 0 : 1,
            duration: 250,
            useNativeDriver: false,
        }).start();

        setOpen(!open);
    };

    const height = animation.interpolate({
        inputRange: [0, 1],
        outputRange: [0, contentHeight],
    });

    const rotate = animation.interpolate({
        inputRange: [0, 1],
        outputRange: ["0deg", "90deg"],
    });

    return (
        <View style={styles.container}>
            {/* Header */}
            <TouchableOpacity style={styles.header} onPress={toggle}>
                <Text style={styles.title}>{title}</Text>
                <Animated.View style={{ transform: [{ rotate }] }}>
                    <MaterialIcons name="arrow-forward-ios" size={18} color="#666666" />
                </Animated.View>
            </TouchableOpacity>

            {/* Hidden measuring view — DOES NOT affect layout */}
            <View
                style={styles.measureWrapper}
                onLayout={(e) => setContentHeight(e.nativeEvent.layout.height)}
            >
                <View>{children}</View>
            </View>

            {/* Animated collapsible */}
            <Animated.View style={{ height, overflow: "hidden", paddingHorizontal:10 }}>
                <View>{children}</View>
            </Animated.View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fff",
        marginVertical: 8,
        borderRadius: 10,
        elevation: 2,
        paddingHorizontal: 10,
        paddingVertical: 4,
    },

    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 8,
    },

    title: {
        fontSize: 14,
        width: "95%",
        fontFamily: "PoppinsMedium",
    },

    // 🔥 Hidden measurement view that takes NO space
    measureWrapper: {
        position: "absolute",
        opacity: 0,
        zIndex: -1, // keep it behind
        width: "100%", // allow full width for proper measurement
    }
});
