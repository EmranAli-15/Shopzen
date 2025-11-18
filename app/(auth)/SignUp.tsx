import Alert from '@/components/alert/Alert';
import AuthProvider from '@/components/authProvider/AuthProvider';
import BackButton from '@/components/BackButton';
import Container from '@/components/Container';
import { globalStyles } from '@/constants/globalStyles';
import axiosInstance from '@/utils/axiosInstance';
import { makeHash } from '@/utils/hashing';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Logo from './Logo';
import { AuthStyles } from './styles/AuthStyles';
const delivery_truck = require('@/assets/images/delivery_truck.png');

export default function SignUp() {
    const router = useRouter();
    const [error, setError] = useState("");

    const [loading, setLoading] = useState(false);


    const [nameError, setNameError] = useState("");
    const [phoneError, setPhoneError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");

    const [showPass, setShowPass] = useState(true);

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState<any>("")
    const [password, setPassword] = useState("");


    const [nameFocus, setNameFocus] = useState(false);
    const [emailFocus, setEmailFocus] = useState(false);
    const [phoneFocus, setPhoneFocus] = useState(false);
    const [passwordFocus, setPasswordFocus] = useState(false);


    const handleSignUp = async () => {
        if (!name) return setNameError("* Name is required")
        else setNameError("")
        if (!phone) return setPhoneError("* Phone is required")
        else setPhoneError("")
        if (!email) return setEmailError("* Email is required")
        else setEmailError("")
        if (!password) return setPasswordError("* Password is required")
        setPasswordError("")

        const password_hash = await makeHash(password);
        console.log(password_hash)
        const data = { name, email, password, password_hash, phone };
        console.log(data)
        try {
            setLoading(true);
            const response = await axiosInstance.post('/user', { data });
            console.log(response);
            setLoading(false)
        } catch (err) {
            console.log(err)
        }

        console.log(data)

        // router.navigate('/profile/Profile');
    }


    return (
        <Container>
            {loading && <Alert type='loading' text='user creating'></Alert>}
            <BackButton></BackButton>
            {/* Logo and into */}
            <View>
                <Logo></Logo>
                <Text style={[AuthStyles.font as any, { alignSelf: "center", marginTop: 10 }]}>Welcome to ShopZen.</Text>
            </View>


            <View style={{ flex: 1, marginTop: 20 }}>
                <View style={{ flex: 1, flexDirection: "column", justifyContent: "space-between" }}>
                    {/* Auth providers */}
                    <View style={{ flexDirection: "column", rowGap: 10 }}>
                        <Text style={AuthStyles.font}>Sign up quickly with:</Text>

                        <AuthProvider></AuthProvider>

                        {/* Line devide */}
                        <View style={{ flexDirection: "row", alignItems: "center", columnGap: 5 }}>
                            <View style={styles.devideLine}></View>
                            <Text style={AuthStyles.font as any}>Or continue with</Text>
                            <View style={styles.devideLine}></View>
                        </View>
                    </View>


                    {/* Inputs for signup */}
                    <View style={{ flexDirection: "column", rowGap: 10 }}>
                        <View>
                            <Text style={globalStyles.inputTitle as any}>Full name</Text>
                            <TextInput
                                style={[
                                    globalStyles.inputText as any,
                                    nameFocus ? globalStyles.inputFocused : globalStyles.inputBlurred,
                                ]}
                                onChangeText={text => setName(text)}
                                value={name}
                                placeholder="Enter your full name"
                                placeholderTextColor="#666666"
                                onFocus={() => setNameFocus(true)}
                                onBlur={() => setNameFocus(false)}
                            />
                            {
                                nameError && <Text style={AuthStyles.errorText}>{nameError}</Text>
                            }
                        </View>
                        <View>
                            <Text style={globalStyles.inputTitle as any}>Email</Text>
                            <TextInput
                                style={[
                                    globalStyles.inputText as any,
                                    emailFocus ? globalStyles.inputFocused : globalStyles.inputBlurred,
                                ]}
                                inputMode='email'
                                onChangeText={text => setEmail(text)}
                                value={email}
                                placeholder="Enter your email"
                                placeholderTextColor="#666666"
                                onFocus={() => setEmailFocus(true)}
                                onBlur={() => setEmailFocus(false)}
                            />
                            {
                                emailError && <Text style={AuthStyles.errorText}>{emailError}</Text>
                            }
                        </View>
                        <View>
                            <Text style={globalStyles.inputTitle as any}>Phone</Text>
                            <TextInput
                                style={[
                                    globalStyles.inputText as any,
                                    phoneFocus ? globalStyles.inputFocused : globalStyles.inputBlurred,
                                ]}
                                inputMode='numeric'
                                onChangeText={text => setPhone(text)}
                                value={phone}
                                placeholder="Enter your phone number"
                                placeholderTextColor="#666666"
                                onFocus={() => setPhoneFocus(true)}
                                onBlur={() => setPhoneFocus(false)}
                            />
                            {
                                phoneError && <Text style={AuthStyles.errorText}>{phoneError}</Text>
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
                    </View>


                    <View>
                        <TouchableOpacity
                            style={globalStyles.btnFilled}
                            onPress={() => handleSignUp()}
                        >
                            <Text style={[globalStyles.txt as any, { color: "white" }]}>Sign up</Text>
                        </TouchableOpacity>
                        <View style={{ flexDirection: "row", alignItems: "center", columnGap: 2, alignSelf: "center", marginTop: 10 }}>
                            <Text style={[AuthStyles.font as any, { alignSelf: "center" }]}>
                                Already have an account?
                            </Text>
                            <TouchableOpacity
                                onPress={() => router.navigate('/SignIn')}
                            >
                                <Text style={[AuthStyles.font as any, { color: "#FF620A" }]}>Sign in</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        </Container>
    )
};

const styles = StyleSheet.create({
    devideLine: {
        height: 2,
        flex: 1,
        borderRadius: 2,
        backgroundColor: "#666666"
    }
});