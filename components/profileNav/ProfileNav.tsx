import { primaryBg, primaryColor } from '@/constants/globalStyles';
import AntDesign from '@expo/vector-icons/AntDesign';
import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons';
import { useRouter } from 'expo-router';
import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';

export default function ProfileNav() {
    const router = useRouter();

    return (
        <View style={[styles.navbar, { backgroundColor: primaryBg }]}>
            <TouchableOpacity
                // onPress={() => router.navigate("/HelpCenter")}
                style={styles.linkStyle}
            >
                <AntDesign name="home" size={24} color="black" />
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.linkStyle}
            >
                <AntDesign name="menu" size={24} color="black" />
            </TouchableOpacity>
            <TouchableOpacity
                // onPress={() => router.navigate("/AccountInfo")}
                style={styles.linkStyle}
            >
                <AntDesign name="shopping-cart" size={24} color="black" />
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.linkStyle}
            >
                <SimpleLineIcons name="user" size={24} color={primaryColor} />
            </TouchableOpacity>
        </View>
    )
};


const styles = StyleSheet.create({
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