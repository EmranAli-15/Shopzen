import AntDesign from '@expo/vector-icons/AntDesign';
import React, { useState } from 'react';
const bdLogo = require('@/assets/images/bdLogo.png')

import Container from '@/components/Container';
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
            district: "Dhaka",
            id: "1"
        },
        {
            district: "Sylhet",
            id: "2"
        },
        {
            district: "Rajshahi",
            id: "3"
        },
    ];

    const [myLanguage, setMyLanguage] = useState("Choose your preffered language")
    const [myDistrict, setMyDistrict] = useState("Select Your District")

    const [openLan, setOpenLan] = useState(false);
    const [openDis, setOpenDis] = useState(false);


    const handleLan = (txt: string) => {
        setMyLanguage(txt);
        setOpenLan(!openLan);
    }

    const handleDis = (txt: string) => {
        setMyDistrict(txt);
        setOpenDis(!openDis);
    }

    return (
        <Container>
            <View style={{ flexDirection: "column", justifyContent: "space-evenly" }}>


                <View style={styles.container}>
                    <Image
                        style={styles.image}
                        resizeMode="contain"
                        source={bdLogo}
                    />
                </View>

                <View>
                    <Text style={{ fontSize: 18, textAlign: "center" }}>We noticed you’re using Softzen from <Text style={{ color: "#FF620A", fontWeight: "bold" }}>Bangladesh</Text>. Tell us your preferred language and where you’re from.</Text>

                    <View>
                        <TouchableOpacity
                            onPress={() => setOpenLan(!openLan)}
                            style={[styles.select]}>
                            <Text>{myLanguage}</Text>
                            <AntDesign style={openLan && { transform: [{ rotate: '180deg' }] }} name="caret-down" size={16} color="black" />
                        </TouchableOpacity>
                        {
                            openLan &&
                            <FlatList
                                data={languages}
                                renderItem={({ item }) => (
                                    <TouchableOpacity
                                        onPress={() => handleLan(item.language)}
                                    ><Text style={styles.optiosText}>{item.language}</Text></TouchableOpacity>
                                )}
                                keyExtractor={item => item.id}
                            ></FlatList>
                        }

                        <TouchableOpacity
                            onPress={() => setOpenDis(!openDis)}
                            style={[styles.select, { marginTop: 15 }]}>
                            <Text>{myDistrict}</Text>
                            <AntDesign style={openDis && { transform: [{ rotate: '180deg' }] }} name="caret-down" size={16} color="black" />
                        </TouchableOpacity>
                        {
                            openDis &&
                            <FlatList
                                data={districts}
                                renderItem={({ item }) => (
                                    <TouchableOpacity
                                        onPress={() => handleDis(item.district)}
                                    ><Text style={styles.optiosText}>{item.district}</Text></TouchableOpacity>
                                )}
                                keyExtractor={item => item.id}
                            ></FlatList>
                        }
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
    container: {
        width: '100%', // Example: 80% of parent width
        height: "40%", // Fixed height for the container
        alignSelf: 'center', // Center the container
    },
    image: {
        width: '100%',
        height: '100%',
    },
});




{/* <MyModal modal={modal} setModal={setModal}>
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
            </MyModal> */}
