import Alert from '@/components/alert/Alert';
import AuthProvider from '@/components/authProvider/AuthProvider';
import BackButton from '@/components/BackButton';
import { globalStyles } from '@/constants/globalStyles';
import { useAuth } from '@/contextProvider/ContextProvider';
import { storeData } from '@/utils/asyncStorate';
import axiosInstance from '@/utils/axiosInstance';
import { decryptHash } from '@/utils/hashing';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Logo from './Logo';
import { AuthStyles } from './styles/AuthStyles';
const delivery_truck = require('@/assets/images/delivery_truck.png');

export default function SignIn() {
    const router = useRouter();
    const { setContextLoading } = useAuth()

    // nayrit@gmail.com
    // Haha@1234

    const [logInError, setLogInError] = useState("");
    const [loginLoading, setLoginLoading] = useState(false);

    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");


    const [email, setEmail] = useState("nayrit@gmail.com");
    const [password, setPassword] = useState("Haha@1234");

    const resetForm = () => {
        setEmail("");
        setPassword("");
        setEmailError("");
        setPasswordError("");
        setLogInError("");
    }
    const handleLogin = async () => {

        if (!email) return setEmailError("* Email or phone number required");
        else setEmailError("");
        if (!password) return setPasswordError("* password required");
        else setPasswordError("")

        setLoginLoading(true);
        const response = await axiosInstance.get('/users');





        const data = response.data.find((user: any) => user.email === email)

        if (data) {
            setLoginLoading(false);
            const pass = decryptHash(password, data.password_hash);
            if (!pass) setLogInError("Password in correct")
            else {
                storeData({ key: "user", value: data });
                setContextLoading(true)
                router.navigate("/home/Index");
            }
        }
        else {
            setLogInError("User not found.")
        };
        setTimeout(() => {
            setLogInError("");
        }, 2500);
    }


    const [passwordFocus, setPasswordFocus] = useState(false);
    const [emailFocus, setEmailFocus] = useState(false);
    const [showPass, setShowPass] = useState(true);

    return (
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
            <SafeAreaView style={{ marginHorizontal: 10, flex: 1 }}>
                <View style={{ flex: 1 }}>
                    {logInError && <Alert text={logInError} type='error'></Alert>}
                    {loginLoading && <Alert text="Logging ..." type='loading'></Alert>}
                    <BackButton></BackButton>




                    <View style={{ flex: 1, flexDirection: "column", justifyContent: "space-evenly", rowGap: 40 }}>
                        {/* LOGO AND INTRO */}
                        <View>
                            <Logo></Logo>
                            <Text style={[AuthStyles.font as any, { alignSelf: "center", marginTop: 10 }]}>Welcome Back! Please enter your details.</Text>
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
                                    emailError && <Text style={AuthStyles.errorText}>{emailError}</Text>
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
                                        passwordError && <Text style={AuthStyles.errorText}>{passwordError}</Text>
                                    }
                                    <View style={{ position: "absolute", right: 15, top: 12 }}>
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
                                <Text style={AuthStyles.font as any}>Or continue with</Text>
                                <View style={styles.devideLine}></View>
                            </View>

                            <AuthProvider></AuthProvider>

                            <View style={{ flexDirection: "column", rowGap: 8 }}>
                                <TouchableOpacity onPress={() => router.navigate('/ForgetHome')}>
                                    <Text style={[AuthStyles.font as any, { alignSelf: "center" }]}>Forget Password?</Text>
                                </TouchableOpacity>
                                <View style={{ flexDirection: "row", alignItems: "center", columnGap: 2, alignSelf: "center" }}>
                                    <Text style={[AuthStyles.font as any, { alignSelf: "center" }]}>
                                        Dont have an account?
                                    </Text>
                                    <TouchableOpacity
                                        onPress={() => router.navigate('/SignUp')}
                                    >
                                        <Text style={[AuthStyles.font as any, { color: "#FF620A" }]}>Sign up</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
            </SafeAreaView>
        </ScrollView>
    )
}


const styles = StyleSheet.create({
    devideLine: {
        height: 2,
        flex: 1,
        borderRadius: 2,
        backgroundColor: "#666666"
    }
});