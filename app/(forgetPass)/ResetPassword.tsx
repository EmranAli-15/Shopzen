import Container from '@/components/Container';
import { globalStyles } from '@/constants/globalStyles';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { ForgotStyles } from './styles/ForgotStyles';
const forget3 = require('@/assets/images/forget/Forget3.png');

export default function ResetPassword() {

    const router = useRouter();


    const [password, setPassword] = useState("");
    const [conPass, setConPass] = useState("");

    const [passwordFocus, setPasswordFocus] = useState(false);
    const [showPass, setShowPass] = useState(true);
    const handlePasswordFocus = () => setPasswordFocus(true);
    const handlePasswordBlur = () => setPasswordFocus(false);

    const [conPassFocus, setConPassFocus] = useState(false);
    const handleconPassFocus = () => setConPassFocus(true);
    const handleconPassBlur = () => setConPassFocus(false);


    return (
        <Container>
            <View style={{ flex: 1, justifyContent: "center" }}>
                <View style={ForgotStyles.sectionGap as any}>
                    <View style={ForgotStyles.introGap as any}>
                        <View style={{ alignSelf: "center" }}>
                            <Image
                                style={{ height: 70, width: 70 }}
                                source={forget3}
                                width={60}
                                height={60}
                            />
                        </View>
                        <Text style={[globalStyles.h2, { textAlign: "center" }]}>Reset Your Password</Text>
                        <Text style={globalStyles.p as any}>
                            Your new password must be different to previously used password.
                        </Text>
                    </View>


                    {/* Email & password filed */}
                    <View style={ForgotStyles.inputGap as any}>
                        <View>
                            <Text style={globalStyles.inputTitle as any}>Password</Text>
                            <View style={{ position: "relative" }}>
                                <TextInput
                                    style={[
                                        globalStyles.inputText as any,
                                        passwordFocus ? globalStyles.inputFocused : globalStyles.inputBlurred,
                                    ]}
                                    secureTextEntry={showPass && true}
                                    onChangeText={text => setPassword(text)}
                                    value={password}
                                    placeholder="Enter your password"
                                    placeholderTextColor="#666666"
                                    onFocus={handlePasswordFocus}
                                    onBlur={handlePasswordBlur}
                                />
                                <View style={{ position: "absolute", right: 15, top: 17 }}>
                                    <TouchableOpacity
                                        onPress={() => setShowPass(!showPass)}
                                    >
                                        {
                                            showPass ? <Ionicons name="eye-off-outline" size={24} color="#666666" /> : <Ionicons name="eye-outline" size={24} color="black" />
                                        }
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>

                        <View>
                            <Text style={globalStyles.inputTitle as any}>Confirm Password</Text>
                            <View style={{ position: "relative" }}>
                                <TextInput
                                    style={[
                                        globalStyles.inputText as any,
                                        conPassFocus ? globalStyles.inputFocused : globalStyles.inputBlurred,
                                    ]}
                                    secureTextEntry={showPass && true}
                                    onChangeText={text => setConPass(text)}
                                    value={conPass}
                                    placeholder="Confirm password"
                                    placeholderTextColor="#666666"
                                    onFocus={handleconPassFocus}
                                    onBlur={handleconPassBlur}
                                />
                                <View style={{ position: "absolute", right: 15, top: 17 }}>
                                    <TouchableOpacity
                                        onPress={() => setShowPass(!showPass)}
                                    >
                                        {
                                            showPass ? <Ionicons name="eye-off-outline" size={24} color="#666666" /> : <Ionicons name="eye-outline" size={24} color="black" />
                                        }
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </View>

                    <TouchableOpacity
                        style={globalStyles.btnFilled}
                        onPress={() => router.navigate('/ResetDone')}
                    >
                        <Text style={[globalStyles.txt as any, { color: "white" }]}>Update Password</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Container>
    )
};