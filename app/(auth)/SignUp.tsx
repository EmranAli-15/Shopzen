import Alert from '@/components/alert/Alert';
import AuthProvider from '@/components/authProvider/AuthProvider';
import Container from '@/components/Container';
import { globalStyles } from '@/constants/globalStyles';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Link, useRouter } from 'expo-router';
import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Logo from './Logo';

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






    async function postData(data: any) {
        try {
            const response = await fetch('https://api.softzenit.shop/shopzen/users', {
                method: 'POST', // Specify the HTTP method
                headers: {
                    'Content-Type': 'application/json' // Indicate the content type
                },
                body: JSON.stringify(data) // Convert data to JSON string
            });
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const responseData = await response.json();
            console.log('Response from server:', responseData);
        } catch (error) {
            console.error('Error sending data:', error);
        }
    }



    const handleSignUp = async () => {
        if (!name) return setNameError("* Name is required")
        else setNameError("")
        if (!phone) return setPhoneError("* Phone is required")
        else setPhoneError("")
        if (!email) return setEmailError("* Email is required")
        else setEmailError("")
        if (!password) return setPasswordError("* Password is required")
        setPasswordError("")

        // const password_hash = makeHash(password);
        // console.log(password_hash)
        // const data = { name, email, password, password_hash, phone };

        // postData(data);
    }


    return (
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
            <Container>
                {loading && <Alert type='loading' text='user creating'></Alert>}

                <View style={{ flex: 1, justifyContent: "center" }}>
                    <View style={{ flexDirection: "column", rowGap: 40 }}>
                        {/* Logo and into */}
                        <View>
                            <Logo></Logo>
                            <Text style={[{ alignSelf: "center", marginTop: 10, fontSize: 14, color: "#666666" }]}>Welcome to ShopZen.</Text>
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
                                    nameError && <Text style={styles.errorText}>{nameError}</Text>
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
                                    emailError && <Text style={styles.errorText}>{emailError}</Text>
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
                                    phoneError && <Text style={styles.errorText}>{phoneError}</Text>
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

                            {/* Signup button */}
                            <View>
                                <TouchableOpacity
                                    style={globalStyles.btnFilled}
                                    onPress={() => handleSignUp()}
                                >
                                    <Text style={[globalStyles.txt as any, { color: "white" }]}>Sign up</Text>
                                </TouchableOpacity>
                                <View style={{ flexDirection: "row", alignItems: "center", columnGap: 2, alignSelf: "center", marginTop: 10 }}>
                                    <Text style={[globalStyles.p as any, { alignSelf: "center" }]}>
                                        Already have an account?
                                    </Text>
                                    <Link href="/SignIn" style={[globalStyles.p as any, { color: "#FF620A" }]}>Sign in</Link>
                                </View>
                            </View>
                        </View>

                        {/* Auth providers */}
                        <View style={{ flexDirection: "column", rowGap: 10 }}>
                            {/* Line devide */}
                            <View style={{ flexDirection: "row", alignItems: "center", columnGap: 5 }}>
                                <View style={styles.devideLine}></View>
                                <Text style={globalStyles.p as any}>Or continue with</Text>
                                <View style={styles.devideLine}></View>
                            </View>

                            <AuthProvider></AuthProvider>

                        </View>
                    </View>
                </View>

            </Container>
        </ScrollView>
    )
};

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