import BackButton from '@/components/BackButton'
import Container from '@/components/Container'
import { primaryBg } from '@/constants/globalStyles'
import MaterialIcons from '@expo/vector-icons/MaterialIcons'
import { Checkbox } from 'expo-checkbox'
import { useRouter } from 'expo-router'
import React, { useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

export default function Settings() {
    const router = useRouter();

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
                        onPress={() => router.navigate('/AccountInfo')}
                    >
                        <View style={styles.linkStyleIn}>
                            <MaterialIcons name="lock" size={24} color="black" />
                            <Text style={styles.linkHeading}>Change Password</Text>
                        </View>
                        <MaterialIcons name="arrow-forward-ios" size={16} color="black" />
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.linkStyle}
                    >
                        <View style={styles.linkStyleIn}>
                            <MaterialIcons name="language" size={24} color="black" />
                            <Text style={styles.linkHeading}>Change Language</Text>
                        </View>
                        <MaterialIcons name="arrow-forward-ios" size={16} color="black" />
                    </TouchableOpacity>
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
                                color={isChecked1 ? '#4630EB' : undefined}
                            />
                            <Text>Other updates</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.checkbox}
                        >
                            <Checkbox
                                value={isChecked2}
                                onValueChange={setChecked2}
                                color={isChecked2 ? '#4630EB' : undefined}
                            />
                            <Text>Promotional Offers & Discounts</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.checkbox}
                        >
                            <Checkbox
                                value={isChecked3}
                                onValueChange={setChecked3}
                                color={isChecked3 ? '#4630EB' : undefined}
                            />
                            <Text>Seller Messages & Chat</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.checkbox}
                        >
                            <Checkbox
                                value={isChecked4}
                                onValueChange={setChecked4}
                                color={isChecked4 ? '#4630EB' : undefined}
                            />
                            <Text>Payment & Refund Alerts</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.checkbox}
                        >
                            <Checkbox
                                value={isChecked5}
                                onValueChange={setChecked5}
                                color={isChecked5 ? '#4630EB' : undefined}
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
    }
})