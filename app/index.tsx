import Container from '@/components/Container';
import AntDesign from '@expo/vector-icons/AntDesign';
import React, { useState } from 'react';
const bdLogo = require('@/assets/images/bdLogo.png')

import MyModal from '@/components/MyModal';
import { globalStyles } from '@/constants/globalStyles';
import { useRouter } from 'expo-router';
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function index() {
    const router = useRouter();
    const [modal, setModal] = useState(true);

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


    const handleLan = (txt: string) => {
        setMyLanguage(txt);
        setOpenLan(!openLan);
        setOpenDis(false);
    }

    const handleDis = (txt: string) => {
        setMyDistrict(txt);
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
            <View style={{ flex: 1, flexDirection: "column", justifyContent: "space-evenly" }}>



                <View style={{ flexDirection: "row", justifyContent: "center" }}>
                    <Image
                        style={{ transform: [{ rotate: '-10deg' }] }}
                        source={bdLogo}
                        width={300}
                        height={300}
                    />
                </View>

                <View>
                    <Text style={[{ fontSize: 18, textAlign: "center", marginTop: -50 }]}>We noticed you’re using Softzen from <Text style={{ color: "#FF620A", fontWeight: "bold" }}>Bangladesh</Text>. Tell us your preferred language and where you’re from.</Text>

                    <View>
                        <View style={{ position: "relative", width: "100%" }}>
                            <TouchableOpacity
                                onPress={() => setOpenLan(!openLan)}
                                style={[styles.select, { marginTop: 15 }]}>
                                <Text>{myLanguage}</Text>
                                <AntDesign style={openLan && { transform: [{ rotate: '180deg' }] }} name="caret-down" size={16} color="black" />
                            </TouchableOpacity>
                            {
                                openLan &&
                                <View style={{ flex: 1, width: "100%" }}>
                                    <FlatList
                                        style={[styles.boxShadow, styles.fixedModal]}
                                        data={languages}
                                        renderItem={({ item }) => (
                                            <TouchableOpacity
                                                onPress={() => handleLan(item.language)}
                                            ><Text style={styles.optiosText}>{item.language}</Text></TouchableOpacity>
                                        )}
                                        keyExtractor={item => item.id}
                                    ></FlatList>
                                </View>
                            }
                        </View>

                        <View style={{ position: "relative", width: "100%" }}>
                            <TouchableOpacity
                                onPress={() => setOpenDis(!openDis)}
                                style={[styles.select, { marginTop: 15 }]}>
                                <Text>{myDistrict}</Text>
                                <AntDesign style={openDis && { transform: [{ rotate: '180deg' }] }} name="caret-down" size={16} color="black" />
                            </TouchableOpacity>
                            {
                                openDis &&
                                <View style={{ flex: 1, width: "100%" }}>
                                    <FlatList
                                        style={[styles.boxShadow, styles.fixedModal]}
                                        data={districts}
                                        renderItem={({ item }) => (
                                            <TouchableOpacity
                                                onPress={() => handleDis(item.district)}
                                            ><Text style={styles.optiosText}>{item.district}</Text></TouchableOpacity>
                                        )}
                                        keyExtractor={item => item.id}
                                    ></FlatList>
                                </View>
                            }
                        </View>
                    </View>
                </View>

                <View>
                    <TouchableOpacity
                        style={globalStyles.btnFilled}
                        onPress={() => router.navigate('/AuthHome')}
                    >
                        <Text style={[globalStyles.txt as any, { color: "white" }]}>Done</Text>
                    </TouchableOpacity>
                </View>


            </View>
        </Container>
    )
}


const styles = StyleSheet.create({
    mt: {
        marginTop: 30
    },
    select: {
        backgroundColor: "#FFF2EB",
        borderColor: "#FF620A",
        borderWidth: 1,
        borderRadius: 8,
        padding: 8,
        flexDirection: "row",
        justifyContent: "space-between"
    },
    optiosText: {
        marginLeft: 5,
        marginVertical: 2,
        borderBottomWidth: 1,
        borderColor: "gray",
        paddingVertical: 3
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
    }
});
