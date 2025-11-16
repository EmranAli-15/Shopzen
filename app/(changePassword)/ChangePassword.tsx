import Container from '@/components/Container'
import Header from '@/components/header/Header'
import { globalStyles } from '@/constants/globalStyles'
import { useRouter } from 'expo-router'
import React, { useState } from 'react'
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native'
const Change1 = require('@/assets/images/forget/Change1.png')

export default function ChangePassword() {


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
                        source={Change1}
                        width={150}
                        height={150}
                    />
                </View>

                <View>
                    <Text style={[globalStyles.h2, { textAlign: "center" }]}>Change your password</Text>
                    <Text style={globalStyles.p as any}>Please provide your phone number. We'll text you a verification code to confirm it's you.</Text>
                </View>

                <View>
                    <Text style={globalStyles.inputTitle as any}>Phone number</Text>
                    <TextInput
                        style={[globalStyles.inputText,
                        emailFocus ? globalStyles.inputFocused : globalStyles.inputBlurred,
                        ]}
                        onChangeText={text => setEmail(text)}
                        value={email}
                        inputMode='email'
                        placeholder="Enter your registered phone number."
                        placeholderTextColor="#666666"
                        onFocus={() => setEmailFocus(true)}
                        onBlur={() => setEmailFocus(false)}
                    />
                </View>

                <TouchableOpacity
                    style={[globalStyles.btnFilled, { marginTop: 20 }]}
                    onPress={() => router.navigate('/ProvideOTP')}
                >
                    <Text style={[globalStyles.txt as any, { color: "white" }]}>Generate OTP</Text>
                </TouchableOpacity>
            </View>
        </Container>
    )
}


// { fontFamily: "PoppinsMedium", fontSize: 20, color: "#333333", textAlign: "center" }