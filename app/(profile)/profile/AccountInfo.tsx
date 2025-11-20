import Container from '@/components/Container';
import Header from '@/components/header/Header';
import { globalStyles, primaryBg, primaryColor } from '@/constants/globalStyles';
import { useAuth } from '@/contextProvider/ContextProvider';
import AntDesign from '@expo/vector-icons/AntDesign';
import Feather from '@expo/vector-icons/Feather';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import DateTimePicker from '@react-native-community/datetimepicker';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Image, Platform, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function AccountInfo() {
    const { user } = useAuth();
    const {showAlert} = useAuth()

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


    const [email, setEmail] = useState(user.email);
    const [name, setName] = useState(user.name);
    const [gender, setGender] = useState("Gender");
    const [number, setNumber] = useState(user.phone);
    const [occupation, setOccupation] = useState("Student");



    const [nameFocus, setNameFocus] = useState(false);
    const [emailFocus, setEmailFocus] = useState(false);
    const [numberFocus, setNumberFocus] = useState(false);
    const [occupationFocus, setOccupationFocus] = useState(false);



    const handleProfileUpdate = () => {
        setSuccess(true);
        showAlert({text:"Profile updated", type:"success"})
    }

    return (
        <Container>
            <View>
                <Header title='Information'></Header>
            </View>

            <ScrollView>
                <View style={{ flexDirection: "column", rowGap: 20, paddingBottom: 20 }}>

                    {/* User profile view */}
                    <View style={{ flexDirection: "column", alignItems: "center" }}>
                        <View style={{ borderRadius: "50%", backgroundColor: primaryBg, padding: 10, height: 120, width: 120, alignItems: "center", justifyContent: "center" }}>
                            <View style={{ borderRadius: "50%", backgroundColor: primaryBg, padding: 10, height: 120, width: 120, alignItems: "center", justifyContent: "center", overflow: "hidden" }}>
                                {
                                    user?.image ? <Image
                                        style={{ height: 120, width: 120 }}
                                        source={{ uri: user?.image }}
                                    ></Image> :
                                        <FontAwesome name="user" size={100} color={primaryColor} />
                                }
                            </View>
                            <TouchableOpacity
                                onPress={() => router.navigate("/profile/ProfilePhoto")}
                                style={{ position: "absolute", bottom: 0, right: 10, borderRadius: "50%", backgroundColor: "white", padding: 5 }}>
                                <AntDesign name="camera" size={20} color={primaryColor} />
                            </TouchableOpacity>
                        </View>
                    </View>



                    <View style={{ flexDirection: "column", rowGap: 16 }}>
                        {/* Name */}
                        <View>
                            <Text style={globalStyles.inputTitle as any}>Full Name</Text>
                            <View style={{ position: "relative" }}>
                                <TextInput
                                    style={[
                                        globalStyles.inputText as any,
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
                                <Feather style={styles.editIcon} name="edit" size={20} color="black" />
                            </View>
                        </View>

                        {/* Email */}
                        <View>
                            <Text style={globalStyles.inputTitle as any}>Email</Text>
                            <View style={{ position: "relative" }}>
                                <TextInput
                                    style={[
                                        globalStyles.inputText as any,
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
                                <Feather style={styles.editIcon} name="edit" size={20} color="black" />
                            </View>
                        </View>

                        {/* Phone number */}
                        <View>
                            <Text style={globalStyles.inputTitle as any}>Phone number</Text>
                            <View style={{ position: "relative" }}>
                                <TextInput
                                    style={[
                                        globalStyles.inputText as any,
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
                                <Feather style={styles.editIcon} name="edit" size={20} color="black" />
                            </View>
                        </View>

                        {/* Date of birth */}
                        <View>
                            <Text style={globalStyles.inputTitle as any}>Date of Birth</Text>
                            <View style={{ position: "relative" }}>
                                <TouchableOpacity
                                    style={[globalStyles.inputText, { backgroundColor: primaryBg, borderWidth: 3, borderColor: primaryBg }]}
                                    onPress={() => setShow(true)}
                                >
                                    <Text>{birthDate}</Text>
                                </TouchableOpacity>
                                <MaterialCommunityIcons style={styles.editIcon} name="arrow-down-drop-circle-outline" size={20} color="black" />
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
                            <Text style={globalStyles.inputTitle as any}>Occupation</Text>
                            <View style={{ position: "relative" }}>
                                <TextInput
                                    style={[
                                        globalStyles.inputText as any,
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
                                <Feather style={styles.editIcon} name="edit" size={20} color="black" />
                            </View>
                        </View>

                        {/* Gender */}
                        <View>
                            <Text style={globalStyles.inputTitle as any}>Gender</Text>
                            <View style={{ position: "relative" }}>
                                <TouchableOpacity
                                    style={[globalStyles.textInput, showGender && { borderBottomLeftRadius: 0, borderBottomRightRadius: 0 }, { backgroundColor: primaryBg }]}
                                    onPress={() => setShowGender(!showGender)}
                                >
                                    <Text style={{
                                        fontFamily: "PoppinsRegular",
                                        color: "#333333",
                                        fontSize: 14,
                                    }}>{gender}</Text>
                                </TouchableOpacity>
                                <MaterialCommunityIcons style={{ position: "absolute", top: 22, right: 10 }} name="arrow-down-drop-circle-outline" size={20} color="black" />
                            </View>
                            {
                                showGender && <View style={{ padding: 16, backgroundColor: primaryBg, borderBottomLeftRadius: 28, borderBottomRightRadius: 28, marginTop: 4 }}>
                                    <TouchableOpacity onPress={() => genderFn("Male")}>
                                        <Text style={{
                                            fontFamily: "PoppinsRegular",
                                            color: "#333333",
                                            fontSize: 14,
                                        }}>Male</Text>
                                    </TouchableOpacity>
                                    <View style={styles.devideLine}></View>
                                    <TouchableOpacity onPress={() => genderFn("Female")}>
                                        <Text style={{
                                            fontFamily: "PoppinsRegular",
                                            color: "#333333",
                                            fontSize: 14,
                                        }}>Female</Text>
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
        top: 14
    },
    devideLine: {
        height: 1,
        marginVertical: 10,
        flex: 1,
        borderRadius: 2,
        backgroundColor: "#666666"
    },
    inputHeading: {
        fontSize: 16,
        fontWeight: "600",
        fontFamily: "Poppins",
        marginBottom: 8
    }
})