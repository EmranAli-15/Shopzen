import Container from '@/components/Container'
import { globalStyles } from '@/constants/globalStyles'
import Ionicons from '@expo/vector-icons/Ionicons'
import { useRouter } from 'expo-router'
import React, { useState } from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
const Change4 = require('@/assets/images/forget/Change4.png')

export default function UpdateDone() {


    const router = useRouter();



    const [email, setEmail] = useState("");



    const [emailFocus, setEmailFocus] = useState(false);


    return (
        <Container>
            <View style={{ flex: 1, flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                <View style={{ flexDirection: "column", rowGap: 20 }}>
                    <View style={{ alignSelf: "center" }}>
                        <Image
                            style={{ height: 80, width: "60%" }}
                            source={Change4}
                            width={150}
                            height={150}
                        />
                    </View>

                    <View>
                        <Text style={[globalStyles.h2, { textAlign: "center" }]}>Password Changed</Text>
                        <Text style={globalStyles.p as any}>Please provide your phone number. We'll text you a verification code to confirm it's you.</Text>
                    </View>

                    <TouchableOpacity
                        style={[globalStyles.btnFilled, { marginTop: 20 }]}
                        onPress={() => router.navigate('/')}
                    >
                        <Text style={[globalStyles.txt as any, { color: "white" }]}>Continue</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => router.navigate("/SignIn")}
                    >
                        <View style={{ flexDirection: "row", alignItems: "center", alignSelf: "center" }}>
                            <Ionicons name="arrow-back" size={24} color="#FF620A" />
                            <Text style={globalStyles.h1}>Back to Sign in</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </Container>
    )
}


// { fontFamily: "PoppinsMedium", fontSize: 20, color: "#333333", textAlign: "center" }