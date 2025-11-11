import Container from '@/components/Container';
import { globalStyles } from '@/constants/globalStyles';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
const forget1 = require('@/assets/images/forget/Forget1.png');

export default function ForgetHome() {
    const router = useRouter();
    const [email, setEmail] = useState("");

    const [emailFocus, setEmailFocus] = useState(false);
    const handleEmailFocus = () => setEmailFocus(true);
    const handleEmailBlur = () => setEmailFocus(false);

    return (
        <Container>
            <View>
                <View style={{ alignSelf: "center", marginBottom: 20 }}>
                    <Image
                        style={{ height: 70, width: 70 }}
                        source={forget1}
                        width={37}
                        height={26}
                    />
                </View>
                <Text style={{ fontSize: 24, fontWeight: "600", color: "#333333", alignSelf: "center" }}>Forgot Your Password?</Text>
                <Text style={{ fontSize: 16, color: "#666666", textAlign: "center", marginTop: 12 }}>
                    Enter your registered email address, and we’ll send you a link to reset your password.
                </Text>


                {/* Email form */}
                <View style={{ flexDirection: "column", rowGap: 40, marginTop: 40 }}>
                    <View>
                        <Text style={{ fontWeight: "500", fontSize: 15 }}>Email or phone</Text>
                        <TextInput
                            style={[
                                globalStyles.textInput,
                                emailFocus ? styles.inputFocused : styles.inputBlurred,
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
                    onPress={()=> router.navigate("/CheckEmail")}
                    style={[globalStyles.btnFilled]}>
                        <Text style={[globalStyles.txt as any, { color: "white" }]}>Send Reset Link</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => router.navigate("/SignIn")}
                    >
                        <View style={{ flexDirection: "row", alignItems: "center", alignSelf: "center" }}>
                            <Ionicons name="arrow-back" size={16} color="#FF620A" />
                            <Text>Back to Sign in</Text>
                        </View>
                    </TouchableOpacity>
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
    },
    inputBlurred: {
        backgroundColor: '#F2F6FF',
        borderWidth: 1,
        borderColor: "transparent"
    },
    inputFocused: {
        backgroundColor: '#FFF',
        borderWidth: 1,
        borderColor: '#FF620A',
    },
});