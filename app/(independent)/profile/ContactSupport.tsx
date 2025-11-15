import Container from '@/components/Container'
import Header from '@/components/header/Header'
import { globalStyles } from '@/constants/globalStyles'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons'
import { useRouter } from 'expo-router'
import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
const contactSupport = require("@/assets/images/profile/contactSupport.png")

export default function ContactSupport() {
    const router = useRouter();
    return (
        <Container>
            <Header title='Contact Support'></Header>

            <View style={{ flexDirection: "column", rowGap: 40 }}>
                <View style={{ width: "80%", alignSelf: "center", height: "25%" }}>
                    <Image
                        style={{ width: "100%", height: "100%" }}
                        source={contactSupport}
                    ></Image>
                </View>

                <View>
                    <Text style={{ fontFamily: "PoppinsMedium", fontSize: 20, color: "#333333", textAlign: "center" }}>Need Help? We're Here for You</Text>
                    <Text style={[globalStyles.p as any, { marginTop: 8 }]}>Choose how you'd like to contact our support team. We'll make sure your issue gets solved quickly.</Text>
                </View>

                <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                    <View style={styles.container}>
                        <View style={{ padding: 3, backgroundColor: "#BBE4FF", borderRadius: "50%" }}>
                            <MaterialCommunityIcons name="face-agent" size={24} color="black" />
                        </View>
                        <Text style={[globalStyles.txt as any, { color: "#1A1F71", fontFamily: "Poppins", fontWeight: "700" }]}>Call Now</Text>
                    </View>
                    <View style={styles.container}>
                        <View style={{ padding: 3, backgroundColor: "#FFDECC", borderRadius: "50%" }}>
                            <MaterialCommunityIcons name="gmail" size={24} color="#FF620A" />
                        </View>
                        <Text style={[globalStyles.txt as any, { color: "#FF620A", fontFamily: "Poppins", fontWeight: "700" }]}>Sent Email</Text>
                    </View>
                    <TouchableOpacity
                        onPress={() => router.navigate('/profile/LiveChat')}
                    >
                        <View style={styles.container}>
                            <View style={{ padding: 3, backgroundColor: "#B9FFFA", borderRadius: "50%" }}>
                                <MaterialCommunityIcons name="message-processing-outline" size={24} color="black" />
                            </View>
                            <Text style={[globalStyles.txt as any, { color: "#3A726E", fontFamily: "Poppins", fontWeight: "700" }]}>Start Chat</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>

        </Container>
    )
};

const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        width: 100,
        height: 100,
        alignItems: "center",
        justifyContent: "center",
        gap: 5,
        borderRadius: 10,
        borderColor: "#11121426"
    }
})