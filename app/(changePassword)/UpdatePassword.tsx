import Container from '@/components/Container'
import Header from '@/components/header/Header'
import { globalStyles } from '@/constants/globalStyles'
import Ionicons from '@expo/vector-icons/Ionicons'
import { useRouter } from 'expo-router'
import React, { useState } from 'react'
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { AuthStyles } from '../(auth)/styles/AuthStyles'
const Change3 = require('@/assets/images/forget/Change3.png')

export default function UpdatePassword() {
    const router = useRouter();

    const [logInError, setLogInError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");


    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const resetForm = () => {
        setEmail("");
        setPassword("");
        setEmailError("");
        setPasswordError("");
        setLogInError("");
    }
    const handleLogin = () => {

        if (!email) return setEmailError("* Email or phone number required");
        else setEmailError("");
        if (!password) return setPasswordError("* password required");
        else setPasswordError("")

        resetForm();
        router.navigate("/Profile");
    }


    const [passwordFocus, setPasswordFocus] = useState(false);
    const [emailFocus, setEmailFocus] = useState(false);
    const [showPass, setShowPass] = useState(true);


    return (
        <Container>
            <Header title='Change Password'></Header>

            <View style={{ flexDirection: "column", rowGap: 20 }}>
                <View style={{ alignSelf: "center" }}>
                    <Image
                        style={{ height: 80, width: "60%" }}
                        source={Change3}
                        width={150}
                        height={150}
                    />
                </View>

                <View>
                    <Text style={{ fontFamily: "PoppinsMedium", fontSize: 20, color: "#333333", textAlign: "center" }}>Change your password</Text>
                    <Text style={globalStyles.p as any}>Please provide your phone number. We'll text you a verification code to confirm it's you.</Text>
                </View>

                <View>
                    <View>
                        <Text style={globalStyles.inputTitle as any}>Current Password</Text>
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
                                onFocus={() => setPasswordFocus(true)}
                                onBlur={() => setPasswordFocus(false)}
                            />
                            {
                                passwordError && <Text style={AuthStyles.errorText}>{passwordError}</Text>
                            }
                            <View style={{ position: "absolute", right: 15, top: 15 }}>
                                <TouchableOpacity
                                    onPress={() => setShowPass(!showPass)}
                                >
                                    {
                                        showPass ? <Ionicons name="eye-off-outline" size={24} color="#666666" /> : <Ionicons name="eye-outline" size={24} color="#666666" />
                                    }
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>

                    <View>
                        <Text style={globalStyles.inputTitle as any}>New Password</Text>
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
                                onFocus={() => setPasswordFocus(true)}
                                onBlur={() => setPasswordFocus(false)}
                            />
                            {
                                passwordError && <Text style={AuthStyles.errorText}>{passwordError}</Text>
                            }
                            <View style={{ position: "absolute", right: 15, top: 15 }}>
                                <TouchableOpacity
                                    onPress={() => setShowPass(!showPass)}
                                >
                                    {
                                        showPass ? <Ionicons name="eye-off-outline" size={24} color="#666666" /> : <Ionicons name="eye-outline" size={24} color="#666666" />
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
                                    passwordFocus ? globalStyles.inputFocused : globalStyles.inputBlurred,
                                ]}
                                secureTextEntry={showPass && true}
                                onChangeText={text => setPassword(text)}
                                value={password}
                                placeholder="Enter your password"
                                placeholderTextColor="#666666"
                                onFocus={() => setPasswordFocus(true)}
                                onBlur={() => setPasswordFocus(false)}
                            />
                            {
                                passwordError && <Text style={AuthStyles.errorText}>{passwordError}</Text>
                            }
                            <View style={{ position: "absolute", right: 15, top: 15 }}>
                                <TouchableOpacity
                                    onPress={() => setShowPass(!showPass)}
                                >
                                    {
                                        showPass ? <Ionicons name="eye-off-outline" size={24} color="#666666" /> : <Ionicons name="eye-outline" size={24} color="#666666" />
                                    }
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>

                <TouchableOpacity
                    style={[globalStyles.btnFilled, { marginTop: 20 }]}
                    onPress={() => router.navigate('/UpdateDone')}
                >
                    <Text style={[globalStyles.txt as any, { color: "white" }]}>Update Password</Text>
                </TouchableOpacity>
            </View>
        </Container>
    )
}


// { fontFamily: "PoppinsMedium", fontSize: 20, color: "#333333", textAlign: "center" }