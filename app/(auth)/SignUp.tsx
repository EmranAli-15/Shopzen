import AuthProvider from '@/components/authProvider/AuthProvider';
import BackButton from '@/components/BackButton';
import Container from '@/components/Container';
import { globalStyles } from '@/constants/globalStyles';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { AuthStyles } from './styles/AuthStyles';
const delivery_truck = require('@/assets/images/delivery_truck.png');

export default function SignUp() {
    const router = useRouter();
    const [error, setError] = useState("");
    const [nameError, setNameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");

    const [showPass, setShowPass] = useState(true);

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    const [nameFocus, setNameFocus] = useState(false);
    const [emailFocus, setEmailFocus] = useState(false);
    const [passwordFocus, setPasswordFocus] = useState(false);


    const handleSignUp = () => {
        if (!name) return setNameError("* Name is required")
        else setNameError("")
        if (!email) return setEmailError("* Email is required")
        else setEmailError("")
        if (!password) return setPasswordError("* Password is required")
        setPasswordError("")

        router.navigate('/Profile');
    }


    return (
        <Container>
            <BackButton></BackButton>
            {/* Logo and into */}
            <View>
                <Text style={styles.heading}>Shop<Text style={{ color: "#0973BA" }}>Zen</Text></Text>
                <View style={{ flexDirection: "row", alignSelf: "center", alignItems: "center", columnGap: 2 }}>
                    <Text style={{ color: "#3CB64B", fontWeight: "600", fontSize: 13 }}>Your Trusted Marketplace.</Text>
                    <Image
                        style={{ height: "auto", width: "auto" }}
                        source={delivery_truck}
                        width={37}
                        height={26}
                    />
                </View>
                <Text style={[styles.font as any, { alignSelf: "center" }]}>Welcome to ShopZen.</Text>
            </View>


            <View style={{ flex: 1, justifyContent: "center" }}>
                <View style={AuthStyles.sectionGap as any}>
                    {/* Auth providers */}
                    <View style={{ flexDirection: "column", rowGap: 20 }}>
                        <Text style={{ fontFamily: "Poppins", fontSize: 16 }}>Sign up quickly with:</Text>

                        <AuthProvider></AuthProvider>

                        {/* Line devide */}
                        <View style={{ flexDirection: "row", alignItems: "center", columnGap: 5 }}>
                            <View style={styles.devideLine}></View>
                            <Text style={styles.font as any}>Or continue with</Text>
                            <View style={styles.devideLine}></View>
                        </View>
                    </View>


                    {/* Inputs for signup */}
                    <View style={{ flexDirection: "column", rowGap: 20, marginTop:-20 }}>
                        <View>
                            <Text style={globalStyles.inputHeading as any}>Full name</Text>
                            <TextInput
                                style={[
                                    globalStyles.inputStyle as any,
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
                                nameError && <Text style={styles.errorText}>{nameError}</Text>
                            }
                        </View>
                        <View>
                            <Text style={globalStyles.inputHeading as any}>Email or phone</Text>
                            <TextInput
                                style={[
                                    globalStyles.inputStyle as any,
                                    emailFocus ? globalStyles.inputFocused : globalStyles.inputBlurred,
                                ]}
                                inputMode='email'
                                onChangeText={text => setEmail(text)}
                                value={email}
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
                            <Text style={globalStyles.inputHeading as any}>Password</Text>
                            <View style={{ position: "relative" }}>
                                <TextInput
                                    style={[
                                        globalStyles.inputStyle as any,
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
                                <View style={{ position: "absolute", right: 15, top: 13 }}>
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
                            <Text style={[styles.font as any, { alignSelf: "center" }]}>
                                Already have an account?
                            </Text>
                            <TouchableOpacity
                                onPress={() => router.navigate('/SignIn')}
                            >
                                <Text style={[styles.font as any, { color: "#FF620A" }]}>Sign in</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        </Container>
    )
};

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
    errorText: {
        fontSize: 14,
        color: "#E63946"
    },
    font: {
        fontWeight: "500",
        fontSize: 16,
        fontFamily: "Poppins",
        color: "#333333"
    }
});