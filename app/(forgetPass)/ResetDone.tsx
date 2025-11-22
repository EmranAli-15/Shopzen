import Container from '@/components/Container';
import { globalStyles } from '@/constants/globalStyles';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useRouter } from 'expo-router';
import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { ForgotStyles } from './styles/ForgotStyles';
const forget4 = require('@/assets/images/forget/Forget4.png');

export default function ResetDone() {
    const router = useRouter();

    return (
        <Container>
            <View style={{ flex: 1, justifyContent: "center" }}>
                <View style={ForgotStyles.sectionGap as any}>
                    <View style={ForgotStyles.introGap as any}>
                        <View style={{ alignSelf: "center" }}>
                            <Image
                                style={{ height: 70, width: 70 }}
                                source={forget4}
                                width={60}
                                height={60}
                            />
                        </View>

                        <Text style={[globalStyles.h2, { textAlign: "center" }]}>Password Reset</Text>
                        <Text style={globalStyles.p as any}>
                            Your password has been reset successfully. You can now sign in with your new password.
                        </Text>
                    </View>

                    <TouchableOpacity
                        onPress={() => router.navigate("/")}
                        style={[globalStyles.btnFilled]}>
                        <Text style={[globalStyles.txt as any, { color: "white" }]}>Continue</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => router.navigate("/SignIn")}
                    >
                        <View style={{ flexDirection: "row", alignItems: "center", alignSelf: "center" }}>
                            <Ionicons name="arrow-back" size={24} color="#FF620A" />
                            <Text style={globalStyles.h1 as any}>Back to Sign in</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </Container>
    )
}