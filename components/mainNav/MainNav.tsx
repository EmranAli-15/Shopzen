import { primaryBg, primaryColor } from '@/constants/globalStyles';
import { useAuth } from '@/contextProvider/ContextProvider';
import AntDesign from '@expo/vector-icons/AntDesign';
import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons';
import { usePathname, useRouter } from 'expo-router';
import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';

export default function MainNav() {
    const router = useRouter();
    const { user } = useAuth()
    const pathname = usePathname();

    return (
        <View style={[styles.navbar, { backgroundColor: primaryBg }]}>
            <TouchableOpacity
                onPress={() => router.navigate("/home/Index")}
                style={styles.linkStyle}
            >
                <AntDesign name="home" size={24} color={pathname == "/home/Index" ? primaryColor : "black"} />
            </TouchableOpacity>

            <TouchableOpacity
                onPress={() => router.navigate("/Testing")}
                style={styles.linkStyle}
            >
                <AntDesign name="menu" size={24} color="black" />
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => router.navigate("/cart/MyCart")}
                style={styles.linkStyle}
            >
                <AntDesign name="shopping-cart" size={24} color={pathname == "/cart/MyCart" ? primaryColor : "black"} />
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => {
                    if (!user) {
                        router.push("/SignIn");
                    } else {
                        router.push("/profile/Profile");
                    }
                }}
                style={styles.linkStyle}
            >
                <SimpleLineIcons name="user" size={24} color={pathname == "/profile/Profile" ? primaryColor : "black"} />
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