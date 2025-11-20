import Feather from '@expo/vector-icons/Feather';
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import React from 'react';
import { Text, View } from 'react-native';
import { useSafeAreaInsets } from "react-native-safe-area-context";

type TType = "success" | "error" | "warning" | "loading";

export default function Alert({ text, type }: { text: string; type: TType }) {
    const insets = useSafeAreaInsets();

    const borderColor =
        type === "error" ? "red" :
            type === "success" ? "green" :
                type === "warning" ? "orange" :
                    "orange";

    const bg =
        type === "error" ? "#fdeded" :
            type === "success" ? "#edf7ed" :
                type === "warning" ? "#fff4e5" :
                    "#e5f6fd";

    const Icon = () => {
        if (type === "error") return <MaterialIcons name="error" size={22} color="red" />;
        if (type === "success") return <MaterialIcons name="done" size={22} color="green" />;
        if (type === "warning") return <Ionicons name="warning" size={22} color="#ed6c02" />;
        return <Feather name="loader" size={22} color="#ed6c02" />;
    };

    return (
        <View
            style={{
                position: "absolute",
                top: insets.top - 1,   // safe area padding
                left: 0,
                right: 0,
                alignItems: "center",
                zIndex: 9999,
            }}
        >
            <View
                style={{
                    borderLeftWidth: 6,
                    borderLeftColor: borderColor,
                    backgroundColor: bg,
                    height: 40,
                    paddingHorizontal: 10,
                    borderRadius: 5,
                    width: "95%",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                    columnGap: 6,

                    // Correct shadow (iOS + Android)
                    shadowColor: "#000",
                    shadowOffset: { width: 0, height: 3 },
                    shadowOpacity: 0.25,
                    shadowRadius: 4,
                    elevation: 6,
                }}
            >
                <Icon />
                <Text style={{ color: "black", fontFamily: "PoppinsRegular" }}>
                    {text}
                </Text>
            </View>
        </View>
    );
}
