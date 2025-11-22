import AuthProvider from '@/components/authProvider/AuthProvider';
import Container from '@/components/Container';
import { globalStyles } from '@/constants/globalStyles';
import { useAuth } from '@/contextProvider/ContextProvider';
import { storeData } from '@/utils/asyncStorate';
import axiosInstance from '@/utils/axiosInstance';
import { decryptHash } from '@/utils/hashing';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Link, useRouter } from 'expo-router';
import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Logo from './Logo';

export default function SignIn() {
    const { setAlert, showAlert } = useAuth()
    const router = useRouter();
    const { setContextLoading } = useAuth()

    // nayrit@gmail.com
    // Haha@1234

    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");


    const [email, setEmail] = useState("nayrit@gmail.com");
    const [password, setPassword] = useState("Haha@1234");

    const resetForm = () => {
        setEmail("");
        setPassword("");
        setEmailError("");
        setPasswordError("");
    }
    const handleLogin = async () => {

        if (!email) return setEmailError("* Email or phone number required");
        else setEmailError("");
        if (!password) return setPasswordError("* password required");
        else setPasswordError("")

        showAlert({ text: "Loggin In", type: "loading" });
        const response = await axiosInstance.get('/users');
        setAlert(null)


        const data = response.data.find((user: any) => user.email === email)

        if (data) {
            const pass = decryptHash(password, data.password_hash);
            if (!pass) {
                showAlert({ text: "Password incorrect", type: "error" });
            }
            else {
                storeData({ key: "user", value: data });
                setContextLoading(true)
                router.navigate("/home/Index");
            }
        }
        else {
            showAlert({ text: "User not found!", type: "error" });
        };
        setTimeout(() => {
            setAlert(null);
        }, 2500);
    }


    const [passwordFocus, setPasswordFocus] = useState(false);
    const [emailFocus, setEmailFocus] = useState(false);
    const [showPass, setShowPass] = useState(true);

    return (
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
            <Container>

                <View style={{ flex: 1, justifyContent: "center" }}>
                    <View style={{ flexDirection: "column", rowGap: 40 }}>
                        {/* LOGO AND INTRO */}
                        <View>
                            <Logo></Logo>
                            <Text style={[{ alignSelf: "center", marginTop: 10, fontSize: 14, color: "#666666" }]}>Welcome Back! Please enter your details.</Text>
                        </View>


                        {/* Email & password filed */}
                        <View style={{ flexDirection: "column", rowGap: 10 }}>
                            <View>
                                <Text style={globalStyles.inputTitle as any}>Email or phone</Text>
                                <TextInput
                                    style={[globalStyles.inputText,
                                    emailFocus ? globalStyles.inputFocused : globalStyles.inputBlurred,
                                    ]}
                                    onChangeText={text => setEmail(text)}
                                    value={email}
                                    inputMode='email'
                                    placeholder="Enter your email or phone number"
                                    placeholderTextColor="#666666"
                                    onFocus={() => setEmailFocus(true)}
                                    onBlur={() => setEmailFocus(false)}
                                />
                                {
                                    emailError && <Text style={styles.errorText}>{emailError}</Text>
                                }
                            </View>
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
                                        onFocus={() => setPasswordFocus(true)}
                                        onBlur={() => setPasswordFocus(false)}
                                    />
                                    {
                                        passwordError && <Text style={styles.errorText}>{passwordError}</Text>
                                    }
                                    <View style={{ position: "absolute", right: 15, top: 10 }}>
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

                            <Link href="/ForgetHome" style={[globalStyles.h1 as any, { alignSelf: "flex-end" }]}>Forget Password?</Link>

                            {/* Sign in button */}
                            <TouchableOpacity
                                style={[globalStyles.btnFilled]}
                                onPress={handleLogin}
                            >
                                <Text style={[globalStyles.txt as any, { color: "white" }]}>Sign in</Text>
                            </TouchableOpacity>
                        </View>


                        {/* Others login options */}
                        <View style={{ flexDirection: "column", rowGap: 10 }}>
                            <View style={{ flexDirection: "row", alignItems: "center", columnGap: 5 }}>
                                <View style={styles.devideLine}></View>
                                <Text style={globalStyles.p as any}>Or continue with</Text>
                                <View style={styles.devideLine}></View>
                            </View>

                            <AuthProvider></AuthProvider>

                            <View style={{ flexDirection: "column", rowGap: 8 }}>
                                <View style={{ flexDirection: "row", alignItems: "center", columnGap: 2, alignSelf: "center" }}>
                                    <Text style={[globalStyles.p as any, { alignSelf: "center" }]}>
                                        Dont have an account?
                                    </Text>
                                    <Link href="/SignUp" style={[globalStyles.p as any, { color: "#FF620A" }]}>Sign up</Link>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>

            </Container>
        </ScrollView>
    )
}


const styles = StyleSheet.create({
    devideLine: {
        height: 1,
        flex: 1,
        borderRadius: 2,
        backgroundColor: "#666666"
    },
    errorText: {
        fontSize: 12,
        color: "#E63946",
        fontFamily: "PoppinsRegular",
    },
});