import Container from '@/components/Container'
import Header from '@/components/header/Header'
import { globalStyles, primaryBg, primaryColor } from '@/constants/globalStyles'
import { useRouter } from 'expo-router'
import React, { useState } from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
const Change2 = require('@/assets/images/forget/Change2.png')

export default function ProvideOTP() {


    const router = useRouter();



    const [email, setEmail] = useState("");



    const [emailFocus, setEmailFocus] = useState(false);


    return (
        <Container>
            <Header title='Change Password'></Header>

            <View style={{ flexDirection: "column", rowGap: 20 }}>
                <View style={{ alignSelf: "center" }}>
                    <Image
                        style={{ height: 80, width: "60%" }}
                        source={Change2}
                        width={150}
                        height={150}
                    />
                </View>

                <View>
                    <Text style={{ fontFamily: "PoppinsMedium", fontSize: 20, color: "#333333", textAlign: "center" }}>OTP Verification</Text>
                    <Text style={globalStyles.p as any}>We’ve sent a verification code to your phone. Please enter it below to continue.</Text>
                </View>

                <View style={{ flexDirection: "row", justifyContent:"space-evenly" }}>
                    <View style={styles.numBox}></View>
                    <View style={styles.numBox}></View>
                    <View style={styles.numBox}></View>
                    <View style={styles.numBox}></View>
                    <View style={styles.numBox}></View>
                    <View style={styles.numBox}></View>
                    <View style={styles.numBox}></View>
                </View>

                <TouchableOpacity
                    style={[globalStyles.btnFilled, { marginTop: 20 }]}
                    onPress={() => router.navigate('/UpdatePassword')}
                >
                    <Text style={[globalStyles.txt as any, { color: "white" }]}>Continue</Text>
                </TouchableOpacity>
            </View>
        </Container>
    )
}

const styles = StyleSheet.create({
    numBox: {
        height: 40,
        width: 40,
        borderRadius: 5,
        backgroundColor: primaryBg,
        borderWidth: 1,
        borderColor: primaryColor
    }
})