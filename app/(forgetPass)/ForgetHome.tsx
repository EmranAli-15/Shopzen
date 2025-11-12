import Container from '@/components/Container';
import { globalStyles } from '@/constants/globalStyles';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { ForgotStyles } from './styles/ForgotStyles';
const forget1 = require('@/assets/images/forget/Forget1.png');

export default function ForgetHome() {
    const router = useRouter();
    const [email, setEmail] = useState("");

    const [emailFocus, setEmailFocus] = useState(false);
    const handleEmailFocus = () => setEmailFocus(true);
    const handleEmailBlur = () => setEmailFocus(false);

    return (
        <Container>
            <View style={{ flex: 1, justifyContent: "center" }}>
                <View style={ForgotStyles.sectionGap as any}>
                    <View style={ForgotStyles.introGap as any}>
                        <View style={{ alignSelf: "center" }}>
                            <Image
                                style={{ height: 70, width: 70 }}
                                source={forget1}
                                width={37}
                                height={26}
                            />
                        </View>

                        <Text style={globalStyles.h3 as any}>Forgot Your Password?</Text>
                        <Text style={globalStyles.p as any}>
                            Enter your registered email address, and we’ll send you a link to reset your password.
                        </Text>
                    </View>


                    {/* Email form */}
                    <View style={ForgotStyles.sectionGap as any}>
                        <View>
                            <Text style={globalStyles.h6 as any}>Email or phone</Text>
                            <TextInput
                                style={[
                                    globalStyles.textInput as any,
                                    emailFocus ? globalStyles.inputFocused : globalStyles.inputBlurred,
                                ]}
                                onChangeText={text => setEmail(text)}
                                value={email}
                                inputMode='email'
                                placeholder="Enter your email or phone number"
                                placeholderTextColor="#666666"
                                onFocus={handleEmailFocus}
                                onBlur={handleEmailBlur}
                            />
                        </View>

                        <TouchableOpacity
                            onPress={() => router.navigate("/CheckEmail")}
                            style={[globalStyles.btnFilled]}>
                            <Text style={[globalStyles.txt as any, { color: "white" }]}>Send Reset Link</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            onPress={() => router.navigate("/SignIn")}
                        >
                            <View style={{ flexDirection: "row", alignItems: "center", alignSelf: "center" }}>
                                <Ionicons name="arrow-back" size={24} color="#FF620A" />
                                <Text style={globalStyles.h6 as any}>Back to Sign in</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Container>
    )
}


const styles = StyleSheet.create({
    heading: {
        fontSize: 44,
        fontWeight: "900",
        textAlign: "center",
        color: "#FF620A"
    },
    devideLine: {
        height: 2,
        flex: 1,
        borderRadius: 2,
        backgroundColor: "#666666"
    }
});