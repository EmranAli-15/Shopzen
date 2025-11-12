import BackButton from '@/components/BackButton';
import Container from '@/components/Container';
import { primaryBg, primaryColor } from '@/constants/globalStyles';
import AntDesign from '@expo/vector-icons/AntDesign';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { useRouter } from 'expo-router';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function AccountInfo() {
    const router = useRouter()
    return (
        <Container>
            <BackButton></BackButton>
            <Text style={{ position: "absolute", flex: 1, alignSelf: "center", paddingVertical: 10, fontFamily: "Poppins", fontWeight: 700, fontSize: 24, color: "#1A1F71" }}>Account Information</Text>



            <View>
                {/* User profile view */}
                <View style={{ flexDirection: "column", alignItems: "center" }}>
                    <View style={{ borderRadius: "50%", backgroundColor: primaryBg, padding: 10, height: 100, width: 100, alignItems: "center", justifyContent: "center" }}>
                        <FontAwesome name="user" size={80} color={primaryColor} />
                        <TouchableOpacity
                            onPress={() => router.navigate("/SignIn")}
                            style={{ position: "absolute", bottom: 0, right: 10 }}>
                            <AntDesign name="camera" size={16} color={primaryColor} />
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
        marginVertical: 10
    },
    linkStyleIn: {
        flexDirection: "row",
        columnGap: 10
    },
    devideLine: {
        height: 1,
        borderRadius: 2,
        backgroundColor: "#666666"
    },
    navbar: {
        padding: 5,
        flexDirection: "row",
        justifyContent: "space-around"
    }
})