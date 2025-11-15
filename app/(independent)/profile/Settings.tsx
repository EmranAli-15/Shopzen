import BackButton from '@/components/BackButton'
import Container from '@/components/Container'
import { primaryBg, primaryColor } from '@/constants/globalStyles'
import MaterialIcons from '@expo/vector-icons/MaterialIcons'
import { Checkbox } from 'expo-checkbox'
import { useRouter } from 'expo-router'
import React, { useRef, useState } from 'react'
import { Animated, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

export default function Settings() {
    const router = useRouter();


    const [on, setOn] = useState(false);
    // Animated value for sliding
    const offset = useRef(new Animated.Value(0)).current;
    const toggleSwitch = () => {
        setOn(!on);
        Animated.timing(offset, {
            toValue: on ? 0 : 1,   // 0 = left , 1 = right
            duration: 230,
            useNativeDriver: true,
        }).start();
    };
    // Interpolate movement (button sliding)
    const translateX = offset.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 28], // move right by 28px
    });


    const [isChecked1, setChecked1] = useState(false);
    const [isChecked2, setChecked2] = useState(false);
    const [isChecked3, setChecked3] = useState(false);
    const [isChecked4, setChecked4] = useState(false);
    const [isChecked5, setChecked5] = useState(false);

    return (
        <Container>
            <View style={{ flexDirection: "column", rowGap: 40 }}>
                <View>
                    <BackButton></BackButton>
                    <Text style={{ position: "absolute", flex: 1, alignSelf: "center", paddingVertical: 10, fontFamily: "Poppins", fontWeight: 700, fontSize: 24, color: "#1A1F71" }}>Settings</Text>
                </View>


                <View style={{ flexDirection: "column", rowGap: 8 }}>
                    <TouchableOpacity
                        style={styles.linkStyle}
                    >
                        <View style={styles.linkStyleIn}>
                            <MaterialIcons name="lock" size={24} color="black" />
                            <Text style={styles.linkHeading}>Change Password</Text>
                        </View>
                        <MaterialIcons name="arrow-forward-ios" size={16} color="black" />
                    </TouchableOpacity>
                    <View
                        style={styles.linkStyle}
                    >
                        <View style={styles.linkStyleIn}>
                            <MaterialIcons name="language" size={24} color="black" />
                            <Text style={styles.linkHeading}>Change Language</Text>
                        </View>
                        <View style={{ flexDirection: "row", alignItems: "center" }}>
                            {on && <Text style={{ marginRight: -22, fontWeight: "700" }}>EN</Text>}
                            <TouchableOpacity activeOpacity={0.9} onPress={toggleSwitch}>
                                <View style={[styles.track, { borderRadius: 20 }]}>
                                    <Animated.View
                                        style={[
                                            styles.knob,
                                            { transform: [{ translateX }] },
                                        ]}
                                    />
                                </View>
                            </TouchableOpacity>
                            {!on && <Text style={{ marginLeft: -22, fontWeight: "700" }}>BN</Text>}
                        </View>
                    </View>
                </View>


                {/* Checkboxs */}
                <View style={{ flexDirection: "column", rowGap: 16 }}>
                    <Text style={{ fontFamily: "Poppins", fontSize: 20 }}>Notifications</Text>
                    <View style={{ flexDirection: "column", rowGap: 16 }}>
                        <TouchableOpacity
                            style={styles.checkbox}
                        >
                            <Checkbox
                                value={isChecked1}
                                onValueChange={setChecked1}
                                color={isChecked1 ? primaryColor : undefined}
                            />
                            <Text>Other updates</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.checkbox}
                        >
                            <Checkbox
                                value={isChecked2}
                                onValueChange={setChecked2}
                                color={isChecked2 ? primaryColor : undefined}
                            />
                            <Text>Promotional Offers & Discounts</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.checkbox}
                        >
                            <Checkbox
                                value={isChecked3}
                                onValueChange={setChecked3}
                                color={isChecked3 ? primaryColor : undefined}
                            />
                            <Text>Seller Messages & Chat</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.checkbox}
                        >
                            <Checkbox
                                value={isChecked4}
                                onValueChange={setChecked4}
                                color={isChecked4 ? primaryColor : undefined}
                            />
                            <Text>Payment & Refund Alerts</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.checkbox}
                        >
                            <Checkbox
                                value={isChecked5}
                                onValueChange={setChecked5}
                                color={isChecked5 ? primaryColor : undefined}
                            />
                            <Text>App Updates & Announcements</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Container>
    )
};


const styles = StyleSheet.create({
    headlines: {
        fontWeight: 700,
        fontSize: 20,
        fontFamily: "Poppins",
        color: "#333333"
    },
    linkHeading: {
        fontWeight: 600,
        fontSize: 18,
        fontFamily: "Poppins",
        color: "#4D4D4D"
    },
    linkStyle: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: primaryBg,
        padding: 16,
        borderRadius: 32
    },
    linkStyleIn: {
        flexDirection: "row",
        columnGap: 10
    },
    checkbox: {
        flexDirection: "row",
        columnGap: 8,
        alignItems: "center",
        backgroundColor: primaryBg,
        padding: 16,
        borderRadius: 32
    },
    track: {
        width: 62,
        borderWidth: 1,
        borderColor: primaryColor,
        padding: 2,
    },
    knob: {
        width: 28,
        height: 28,
        borderRadius: 14,
        backgroundColor: primaryColor,
    },
})