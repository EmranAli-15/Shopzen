import Container from '@/components/Container';
import AntDesign from '@expo/vector-icons/AntDesign';
import React, { useState } from 'react';
const bdLogo = require('@/assets/images/bdLogo.png')

import { globalStyles } from '@/constants/globalStyles';
import { useRouter } from 'expo-router';
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function index() {
    const router = useRouter();

    const languages = [
        {
            language: "Bangla",
            id: "1"
        },
        {
            language: "English",
            id: "2"
        },
        {
            language: "Hindi",
            id: "3"
        },
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
            <View style={{}}>
                <View style={{ flexDirection: "row", justifyContent: "center" }}>
                    <Image
                        style={{ transform: [{ rotate: '-10deg' }] }}
                        source={bdLogo}
                        width={300}
                        height={300}
                    />
                </View>

                <View style={{ marginTop: 40 }}>
                    <Text style={[{ fontSize: 18, textAlign: "center", marginTop: -50 }]}>We noticed you’re using Softzen from <Text style={{ color: "#FF620A", fontWeight: "bold" }}>Bangladesh</Text>. Tell us your preferred language and where you’re from.</Text>

                    <View>
                        <TouchableOpacity
                            onPress={() => setOpenLan(!openLan)}
                            style={[styles.select, styles.mt]}>
                            <Text>{myLanguage}</Text>
                            <AntDesign name="caret-down" size={16} color="black" />
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
                            <AntDesign name="caret-down" size={16} color="black" />
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

                <View style={{ marginTop: 150 }}>
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
    }
});
