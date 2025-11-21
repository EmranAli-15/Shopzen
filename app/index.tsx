import Container from '@/components/Container';
import AntDesign from '@expo/vector-icons/AntDesign';
import { useFonts } from 'expo-font';
import React, { useState } from 'react';
const bdLogo = require('@/assets/images/bdLogo.png')

import MyModal from '@/components/MyModal';
import { globalStyles } from '@/constants/globalStyles';
import { useRouter } from 'expo-router';
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function index() {
    const [loaded] = useFonts({
        PoppinsSemiBold: require('@/assets/fonts/Poppins-SemiBold.ttf'),
        PoppinsRegular: require('@/assets/fonts/Poppins-Regular.ttf'),
        PoppinsMedium: require("@/assets/fonts/Poppins-Medium.ttf"),
        PoppinsBold: require("@/assets/fonts/Poppins-Bold.ttf"),
    });

    const router = useRouter();
    const [modal, setModal] = useState(false);

    const languages = [
        {
            language: "বাংলা",
            id: "1"
        },
        {
            language: "English",
            id: "2"
        }
    ];
    const districts = [
        {
            district: "Barishal",
            id: "1"
        },
        {
            district: "Chittagong",
            id: "2"
        },
        {
            district: "Dhaka",
            id: "3"
        },
        {
            district: "Khulna",
            id: "4"
        },
        {
            district: "Rangpur",
            id: "5"
        }
    ];

    const [myLanguage, setMyLanguage] = useState("Choose your preffered language")
    const [myDistrict, setMyDistrict] = useState("Select Your District")

    const [openLan, setOpenLan] = useState(false);
    const [openDis, setOpenDis] = useState(false);


    const handleLan = (txt: string, flag: boolean) => {
        if (flag) setMyLanguage(txt);
        setOpenLan(!openLan);
        setOpenDis(false);
    }

    const handleDis = (txt: string, flag: boolean) => {
        if (flag) setMyDistrict(txt);
        setOpenDis(!openDis);
        setOpenLan(false);
    }

    return (
        <Container>
            <MyModal modal={modal} setModal={setModal}>
                <View>
                    <Text style={{ fontWeight: "700", fontSize: 18, alignSelf: "center" }}>Allow ShopZen Shopping to send you notifications?</Text>

                    <View style={{ flex: 1, height: 2, backgroundColor: "#333333", borderRadius: 2, marginVertical: 10 }}></View>

                    <TouchableOpacity
                        style={globalStyles.btnFilled}
                        onPress={() => setModal(false)}
                    >
                        <Text style={[globalStyles.txt as any, { color: "white" }]}>Allow</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[globalStyles.btn, { marginTop: 10 }]}
                        onPress={() => setModal(false)}
                    >
                        <Text style={[globalStyles.txt as any, { color: "#FF620A" }]}>Don't Allow</Text>
                    </TouchableOpacity>
                </View>
            </MyModal>



            {/* MODAL FOR LANGUAGES */}
            <MyModal modal={openLan} setModal={setOpenLan}>
                <FlatList
                    data={languages}
                    renderItem={({ item }) => (
                        <TouchableOpacity
                            onPress={() => handleLan(item.language, true)}
                        ><Text style={styles.optiosText}>{item.language}</Text></TouchableOpacity>
                    )}
                    keyExtractor={item => item.id}
                ></FlatList>
            </MyModal>
            {/* MODAL FOR LANGUAGES */}
            <MyModal modal={openDis} setModal={setOpenDis}>
                <FlatList
                    data={districts}
                    renderItem={({ item }) => (
                        <TouchableOpacity
                            onPress={() => handleDis(item.district, true)}
                        ><Text style={styles.optiosText}>{item.district}</Text></TouchableOpacity>
                    )}
                    keyExtractor={item => item.id}
                ></FlatList>
            </MyModal>







            <View style={{ flex: 1, justifyContent: "center" }}>
                <View style={{ flexDirection: "column", rowGap: 40 }}>

                    <View style={styles.container}>
                        <Image
                            style={styles.image}
                            resizeMode="contain"
                            source={bdLogo}
                        />
                    </View>

                    <View>
                        <Text style={[{ fontSize: 16, textAlign: "center", fontFamily: "PoppinsMedium" }]}>We noticed you're using Softzen from <Text style={{ color: "#FF620A", fontWeight: "bold", fontFamily: "PoppinsMedium" }}>Bangladesh</Text>. Tell us your preferred language and where you're from.</Text>
                    </View>

                    <View>
                        <View>
                            <View>
                                <TouchableOpacity
                                    onPress={() => handleLan("", false)}
                                    style={[styles.select]}>
                                    <Text style={{ fontFamily: "PoppinsRegular" }}>{myLanguage}</Text>
                                    <AntDesign name="caret-down" size={16} color="black" />
                                </TouchableOpacity>
                            </View>

                            <View>
                                <TouchableOpacity
                                    onPress={() => handleDis("", false)}
                                    style={[styles.select, { marginTop: 15 }]}>
                                    <Text style={{ fontFamily: "PoppinsRegular" }}>{myDistrict}</Text>
                                    <AntDesign name="caret-down" size={16} color="black" />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>

                    <View>
                        <TouchableOpacity
                            style={globalStyles.btnFilled}
                            onPress={() => router.navigate('/home/Index')}
                        >
                            <Text style={[globalStyles.txt as any, { color: "white" }]}>Done</Text>
                        </TouchableOpacity>
                    </View>


                </View>
            </View>
        </Container>
    )
}


const styles = StyleSheet.create({
    select: {
        backgroundColor: "#FFF2EB",
        borderColor: "#FF620A",
        borderWidth: 1,
        borderRadius: 8,
        padding: 8,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    optiosText: {
        marginLeft: 5,
        marginVertical: 2,
        paddingVertical: 3,
        color: "#333333",
        fontFamily: "PoppinsRegular",
        fontSize: 14
    },
    boxShadow: {
        backgroundColor: 'white',
        boxShadow: '6px 6px 6px 4px rgba(0, 0, 0, 0.3)', // offsetX offsetY blurRadius spreadRadius color
    },
    fixedModal: {
        flex: 1,
        width: "100%",
        backgroundColor: "white",
        maxHeight: 100,
        position: "absolute",
        zIndex: 30
    },
    container: {
        width: '100%',
        height: 200,
        alignSelf: 'center',
    },
    image: {
        width: '100%',
        height: '100%',
        transform: [{ rotate: "-12deg" }]
    },
});
