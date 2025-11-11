import AuthProvider from '@/components/authProvider/AuthProvider';
import BackButton from '@/components/BackButton';
import Container from '@/components/Container';
import { globalStyles } from '@/constants/globalStyles';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
const delivery_truck = require('@/assets/images/delivery_truck.png');

export default function SignUp() {
    const router = useRouter();

    const [showPass, setShowPass] = useState(true);

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    const [nameFocus, setNameFocus] = useState(false);
    const handleNameFocus = () => setNameFocus(true);
    const handleNameBlur = () => setNameFocus(false);


    const [emailFocus, setEmailFocus] = useState(false);
    const handleEmailFocus = () => setEmailFocus(true);
    const handleEmailBlur = () => setEmailFocus(false);


    const [passwordFocus, setPasswordFocus] = useState(false);
    const handlePasswordFocus = () => setPasswordFocus(true);
    const handlePasswordBlur = () => setPasswordFocus(false);


    return (
        <Container>
            <ScrollView>
                <View style={{ marginBottom: 40 }}>
                    <BackButton></BackButton>
                </View>

                {/* Logo and into */}
                <View>
                    <Text style={styles.heading}>Shop<Text style={{ color: "#0973BA" }}>Zen</Text></Text>
                    <View style={{ flexDirection: "row", alignSelf: "center", alignItems: "center", columnGap: 2 }}>
                        <Text style={{ color: "#3CB64B", fontWeight: "600" }}>Your Trusted Marketplace.</Text>
                        <Image
                            style={{ height: "auto", width: "auto" }}
                            source={delivery_truck}
                            width={37}
                            height={26}
                        />
                    </View>
                    <Text style={{ fontWeight: "500", fontSize: 15, alignSelf: "center" }}>Welcome to ShopZen.</Text>
                </View>


                {/* Auth providers */}
                <View style={{ marginVertical: 30, flexDirection: "column", rowGap: 10 }}>
                    <Text style={{ fontWeight: "500", fontSize: 16 }}>Sign up quickly with:</Text>

                    <AuthProvider></AuthProvider>

                    {/* Line devide */}
                    <View style={{ flexDirection: "row", alignItems: "center", columnGap: 5 }}>
                        <View style={styles.devideLine}></View>
                        <Text style={{ fontWeight: "600", fontSize: 16 }}>Or continue with</Text>
                        <View style={styles.devideLine}></View>
                    </View>
                </View>



                {/* Inputs for signup */}
                {/* Inputs for signup */}
                <View style={{ marginTop: 30, flexDirection: "column", rowGap: 15 }}>
                    <View>
                        <Text style={{ fontWeight: "500", fontSize: 15 }}>Full name</Text>
                        <TextInput
                            style={[
                                globalStyles.textInput,
                                nameFocus ? styles.inputFocused : styles.inputBlurred,
                            ]}
                            onChangeText={text => setName(text)}
                            value={name}
                            placeholder="Enter your full name"
                            placeholderTextColor="#666666"
                            onFocus={handleNameFocus}
                            onBlur={handleNameBlur}
                        />
                    </View>
                    <View>
                        <Text style={{ fontWeight: "500", fontSize: 15 }}>Email or phone</Text>
                        <TextInput
                            style={[
                                globalStyles.textInput,
                                emailFocus ? styles.inputFocused : styles.inputBlurred,
                            ]}
                            inputMode='email'
                            onChangeText={text => setEmail(text)}
                            value={email}
                            placeholder="Enter your email or phone number"
                            placeholderTextColor="#666666"
                            onFocus={handleEmailFocus}
                            onBlur={handleEmailBlur}
                        />
                    </View>
                    <View>
                        <Text style={{ fontWeight: "500", fontSize: 15 }}>Password</Text>
                        <View style={{ position: "relative" }}>
                            <TextInput
                                style={[
                                    globalStyles.textInput,
                                    passwordFocus ? styles.inputFocused : styles.inputBlurred,
                                ]}
                                secureTextEntry={showPass && true}
                                onChangeText={text => setPassword(text)}
                                value={password}
                                placeholder="Enter your password"
                                placeholderTextColor="#666666"
                                onFocus={handlePasswordFocus}
                                onBlur={handlePasswordBlur}
                            />
                            <View style={{ position: "absolute", right: 15, top: 14 }}>
                                <TouchableOpacity
                                    onPress={() => setShowPass(!showPass)}
                                >
                                    {
                                        showPass ? <Ionicons name="eye-off-outline" size={24} color="black" /> : <Ionicons name="eye-outline" size={24} color="black" />
                                    }
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    <View style={{ marginTop: 20 }}>
                        <TouchableOpacity
                            style={globalStyles.btnFilled}
                        // onPress={() => router.navigate('/AuthHome')}
                        >
                            <Text style={[globalStyles.txt as any, { color: "white" }]}>Sign up</Text>
                        </TouchableOpacity>
                    </View>
                </View>



                {/* Redirect to sign in page */}
                <View style={{ marginTop: 10, paddingBottom:30 }}>
                    <View style={{ flexDirection: "row", alignItems: "center", columnGap: 2, alignSelf: "center", marginTop: 10 }}>
                        <Text style={{ fontWeight: 500, fontSize: 16, alignSelf: "center" }}>
                            Already have an account?
                        </Text>
                        <TouchableOpacity
                            onPress={() => router.navigate('/SignIn')}
                        >
                            <Text style={{ color: "#FF620A" }}>Sign in</Text>
                        </TouchableOpacity>
                    </View>
                </View>


            </ScrollView>
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