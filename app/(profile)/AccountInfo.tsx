import Alert from '@/components/alert/Alert';
import BackButton from '@/components/BackButton';
import Container from '@/components/Container';
import { globalStyles, primaryBg, primaryColor } from '@/constants/globalStyles';
import AntDesign from '@expo/vector-icons/AntDesign';
import Feather from '@expo/vector-icons/Feather';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import DateTimePicker from '@react-native-community/datetimepicker';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Platform, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function AccountInfo() {
    const router = useRouter();
    const [success, setSuccess] = useState(false);


    const [birthDate, setBirthDate] = useState("2025-11-13");
    const [date, setDate] = useState(new Date());
    const [show, setShow] = useState(false);
    const onChange = (event: any, selectedDate: any) => {
        setShow(false);
        if (selectedDate) {
            const formattedDate = selectedDate.toISOString().split('T')[0];
            setBirthDate(formattedDate);
        }
    };

    const [showGender, setShowGender] = useState(false);
    const genderFn = (gen: string) => {
        setGender(gen);
        setShowGender(false);
    }


    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [gender, setGender] = useState("Gender");
    const [number, setNumber] = useState("");
    const [occupation, setOccupation] = useState("");



    const [nameFocus, setNameFocus] = useState(false);
    const [emailFocus, setEmailFocus] = useState(false);
    const [numberFocus, setNumberFocus] = useState(false);
    const [occupationFocus, setOccupationFocus] = useState(false);



    const handleProfileUpdate = () => {
        setSuccess(true);
        setTimeout(() => {
            setSuccess(false)
        }, 1000);
    }

    return (
        <Container>
            {
                success && <Alert text='Profile update successfully' type='success'></Alert>
            }
            <BackButton></BackButton>
            <Text style={{ position: "absolute", flex: 1, alignSelf: "center", paddingVertical: 10, fontFamily: "Poppins", fontWeight: 700, fontSize: 24, color: "#1A1F71" }}>Account Information</Text>

            <ScrollView>
                <View style={{ flexDirection: "column", rowGap: 40, paddingBottom: 80 }}>
                    {/* User profile view */}
                    <View style={{ flexDirection: "column", alignItems: "center" }}>
                        <View style={{ borderRadius: "50%", backgroundColor: primaryBg, padding: 10, height: 100, width: 100, alignItems: "center", justifyContent: "center" }}>
                            <FontAwesome name="user" size={80} color={primaryColor} />
                            <TouchableOpacity
                                onPress={() => router.navigate("/profile/ProfilePhoto")}
                                style={{ position: "absolute", bottom: 0, right: 10 }}>
                                <AntDesign name="camera" size={16} color={primaryColor} />
                            </TouchableOpacity>
                        </View>
                    </View>



                    <View style={{ flexDirection: "column", rowGap: 24 }}>
                        {/* Name */}
                        <View>
                            <Text style={globalStyles.h6 as any}>Full Name</Text>
                            <View style={{ position: "relative" }}>
                                <TextInput
                                    style={[
                                        globalStyles.textInput as any,
                                        nameFocus ? globalStyles.inputFocused : globalStyles.inputBlurred,
                                    ]}
                                    onChangeText={text => setName(text)}
                                    value={name}
                                    inputMode='text'
                                    placeholder="Enter your full name"
                                    placeholderTextColor="#666666"
                                    onFocus={() => setNameFocus(true)}
                                    onBlur={() => setNameFocus(false)}
                                />
                                <Feather style={styles.editIcon} name="edit" size={12} color="black" />
                            </View>
                        </View>

                        {/* Email */}
                        <View>
                            <Text style={globalStyles.h6 as any}>Email</Text>
                            <View style={{ position: "relative" }}>
                                <TextInput
                                    style={[
                                        globalStyles.textInput as any,
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
                                <Feather style={styles.editIcon} name="edit" size={12} color="black" />
                            </View>
                        </View>

                        {/* Phone number */}
                        <View>
                            <Text style={globalStyles.h6 as any}>Phone number</Text>
                            <View style={{ position: "relative" }}>
                                <TextInput
                                    style={[
                                        globalStyles.textInput as any,
                                        numberFocus ? globalStyles.inputFocused : globalStyles.inputBlurred,
                                    ]}
                                    onChangeText={text => setNumber(text)}
                                    value={number}
                                    inputMode='numeric'
                                    placeholder="Enter your phone number"
                                    placeholderTextColor="#666666"
                                    onFocus={() => setNumberFocus(true)}
                                    onBlur={() => setNumberFocus(false)}
                                />
                                <Feather style={styles.editIcon} name="edit" size={12} color="black" />
                            </View>
                        </View>

                        {/* Date of birth */}
                        <View>
                            <Text style={globalStyles.h6 as any}>Date of Birth</Text>
                            <View style={{ position: "relative" }}>
                                <TouchableOpacity
                                    style={[globalStyles.btnFilled, { backgroundColor: primaryBg, borderColor: primaryBg, borderWidth: 4 }]}
                                    onPress={() => setShow(true)}
                                >
                                    <Text style={[{ color: "black", fontFamily: "Poppins" }]}>{birthDate}</Text>
                                </TouchableOpacity>
                                <AntDesign style={styles.editIcon} name="caret-down" size={12} color="black" />
                            </View>
                            {show && (
                                <DateTimePicker
                                    value={date}
                                    mode="date"
                                    display={Platform.OS === 'ios' ? 'spinner' : 'default'}
                                    onChange={onChange}
                                />
                            )}
                        </View>

                        {/* Occupation */}
                        <View>
                            <Text style={globalStyles.h6 as any}>Occupation</Text>
                            <View style={{ position: "relative" }}>
                                <TextInput
                                    style={[
                                        globalStyles.textInput as any,
                                        occupationFocus ? globalStyles.inputFocused : globalStyles.inputBlurred,
                                    ]}
                                    onChangeText={text => setOccupation(text)}
                                    value={occupation}
                                    inputMode='text'
                                    placeholder="Your occupation"
                                    placeholderTextColor="#666666"
                                    onFocus={() => setOccupationFocus(true)}
                                    onBlur={() => setOccupationFocus(false)}
                                />
                                <Feather style={styles.editIcon} name="edit" size={12} color="black" />
                            </View>
                        </View>

                        {/* Gender */}
                        <View>
                            <Text style={globalStyles.h6 as any}>Gender</Text>
                            <View style={{ position: "relative" }}>
                                <TouchableOpacity
                                    style={[globalStyles.btnFilled, showGender && { borderBottomLeftRadius: 0, borderBottomRightRadius: 0 }, { backgroundColor: primaryBg, borderColor: primaryBg, borderWidth: 4 }]}
                                    onPress={() => setShowGender(!showGender)}
                                >
                                    <Text style={[{ color: "black", fontFamily: "Poppins" }]}>{gender}</Text>
                                </TouchableOpacity>
                                <AntDesign style={styles.editIcon} name="caret-down" size={12} color="black" />
                            </View>
                            {
                                showGender && <View style={{ padding: 16, backgroundColor: primaryBg, borderBottomLeftRadius: 28, borderBottomRightRadius: 28, marginTop: 4 }}>
                                    <TouchableOpacity onPress={() => genderFn("Male")}>
                                        <Text>Male</Text>
                                    </TouchableOpacity>
                                    <View style={styles.devideLine}></View>
                                    <TouchableOpacity onPress={() => genderFn("Female")}>
                                        <Text>Female</Text>
                                    </TouchableOpacity>
                                </View>
                            }
                        </View>
                    </View>


                    <View>
                        <TouchableOpacity
                            style={globalStyles.btnFilled}
                            onPress={() => handleProfileUpdate()}
                        >
                            <Text style={[globalStyles.txt as any, { color: "white" }]}>Update</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </Container>
    )
};



const styles = StyleSheet.create({
    headlines: {
        fontWeight: 700,
        fontSize: 20,
        fontFamily: "Poppins",
        color: "#333333"
    },
    linkHeading: {
        fontWeight: 600,
        fontSize: 18,
        fontFamily: "Poppins",
        color: "#4D4D4D"
    },
    editIcon: {
        position: "absolute",
        right: 10,
        top: 24
    },
    devideLine: {
        height: 1,
        marginVertical: 10,
        flex: 1,
        borderRadius: 2,
        backgroundColor: "#666666"
    },
})