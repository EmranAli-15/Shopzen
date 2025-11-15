import React, { useRef, useState } from "react";
import { Animated, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function AnimatedCollapsible({ title, children }: any) {
    const [open, setOpen] = useState(false);
    const animation = useRef(new Animated.Value(0)).current;

    const toggle = () => {
        const toValue = open ? 0 : 1;

        Animated.timing(animation, {
            toValue,
            duration: 250,
            useNativeDriver: false,
        }).start();

        setOpen(!open);
    };

    // For height animation
    const height = animation.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 120], // Set maxHeight according to your content
    });

    // Arrow rotation
    const rotate = animation.interpolate({
        inputRange: [0, 1],
        outputRange: ["0deg", "90deg"],
    });

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.header} onPress={toggle}>
                <Text style={styles.title}>{title}</Text>

                <Animated.View style={{ transform: [{ rotate }], width:"5%" }}>
                    <Text style={{ fontSize: 18 }}>▶</Text>
                </Animated.View>
            </TouchableOpacity>

            <Animated.View style={{ overflow: "hidden", height }}>
                <View style={styles.content}>
                    {children}
                </View>
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
        paddingVertical: 4
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 8
    },
    title: {
        fontSize: 16,
        fontFamily:"PoppinsMedium",
        width:"95%"
    },
    content: {
        paddingVertical: 10,
    }
});
