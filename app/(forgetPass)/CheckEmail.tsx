import Container from '@/components/Container';
import { globalStyles } from '@/constants/globalStyles';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useRouter } from 'expo-router';
import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { ForgotStyles } from './styles/ForgotStyles';
const forget1 = require('@/assets/images/forget/Forget2.png');

export default function CheckEmail() {
    const router = useRouter();

    return (
        <Container>
            <View style={{ flex: 1, justifyContent: "center" }}>
                <View style={ForgotStyles.sectionGap as any}>
                    <View style={ForgotStyles.introGap as any}>
                        <View style={{ alignSelf: "center" }}>
                            <Image
                                style={{ height: 70, width: 70 }}
                                source={forget1}
                                width={60}
                                height={60}
                            />
                        </View>

                        <Text style={[globalStyles.h2, { textAlign: "center" }]}>Check Your Email</Text>
                        <Text style={globalStyles.p as any}>
                            A reset link has been sent to your email.
                        </Text>
                    </View>


                    {/* Email form */}
                    <View style={{ flexDirection: "column", rowGap: 16 }}>
                        <TouchableOpacity
                            onPress={() => router.navigate("/ResetPassword")}
                            style={[globalStyles.btnFilled]}>
                            <Text style={[globalStyles.txt as any, { color: "white" }]}>Open email app</Text>
                        </TouchableOpacity>

                        <View style={{ flexDirection: "row", alignItems: "center", columnGap: 2, alignSelf: "center" }}>
                            <Text style={[globalStyles.h6 as any, { alignSelf: "center" }]}>
                                Don't receive the email?
                            </Text>
                            <TouchableOpacity
                                onPress={() => router.navigate('/ForgetHome')}
                            >
                                <Text style={[globalStyles.h6 as any, { color: "#FF620A" }]}>Click to resend</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

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
        </Container>
    )
}