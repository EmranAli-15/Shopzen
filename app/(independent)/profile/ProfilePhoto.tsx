import Container from '@/components/Container';
import Header from '@/components/header/Header';
import { globalStyles, primaryBg, primaryColor } from '@/constants/globalStyles';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import * as ImagePicker from "expo-image-picker";
import React, { useState } from 'react';
import { FlatList, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
const icon1 = require("@/assets/images/profile/profileIcons/icon1.png");
const icon2 = require("@/assets/images/profile/profileIcons/icon2.png");
const icon3 = require("@/assets/images/profile/profileIcons/icon3.png");
const icon4 = require("@/assets/images/profile/profileIcons/icon4.png");
const icon5 = require("@/assets/images/profile/profileIcons/icon5.png");
const icon6 = require("@/assets/images/profile/profileIcons/icon6.png");
const icon7 = require("@/assets/images/profile/profileIcons/icon7.png");
const icon8 = require("@/assets/images/profile/profileIcons/icon8.png");
const icon9 = require("@/assets/images/profile/profileIcons/icon9.png");
const icon10 = require("@/assets/images/profile/profileIcons/icon10.png");
const icon11 = require("@/assets/images/profile/profileIcons/icon11.png");
const icon12 = require("@/assets/images/profile/profileIcons/icon12.png");
const icon13 = require("@/assets/images/profile/profileIcons/icon13.png");
const icon14 = require("@/assets/images/profile/profileIcons/icon14.png");
const icon15 = require("@/assets/images/profile/profileIcons/icon15.png");

export default function ProfilePhoto() {
    const icons = [icon1, icon2, icon3, icon4, icon5, icon6, icon7, icon8, icon9, icon10, icon11, icon12, icon13, icon14, icon15];
    const [isIcon, setIsIcon] = useState(-1);

    const [profileURL, setProfileURL] = useState("");


    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        if (!result.canceled) {
            setProfileURL(result.assets[0].uri);
            setIsIcon(-1);
        }
    };


    return (
        <Container>
            <Header title='Upload Your Picture'></Header>
            <ScrollView>
                <View style={{ flexDirection: "column", flex: 1, rowGap: 40 }}>
                    <View>
                        <Text style={[globalStyles.p as any, { textAlign: "left", fontSize: 14 }]}>Add a profile picture to personalize your ShopZen experience. You can skip this for now.</Text>
                    </View>



                    <View>
                        <View style={[styles.container, { borderRadius: "50%", overflow: "hidden" }]}>
                            {
                                profileURL && isIcon == -1 ? <Image
                                    style={styles.image}
                                    source={{ uri: profileURL }}
                                /> :
                                    isIcon >= 0 ?
                                        <Image
                                            style={styles.image}
                                            source={icons[isIcon]}
                                        /> :
                                        <View style={{ borderRadius: "50%", backgroundColor: primaryBg, padding: 10, height: 150, width: 150, alignItems: "center", justifyContent: "center" }}>
                                            <FontAwesome name="user" size={130} color={primaryColor} />
                                        </View>
                            }
                        </View>

                        <View style={{ marginTop: 16 }}>
                            <TouchableOpacity
                                style={[globalStyles.btnFilled, { width: "auto", alignSelf: "center", paddingVertical: 5 }]}
                                onPress={pickImage}
                            >
                                <Text style={[{ color: "white", fontFamily: "PoppinsMedium" }]}>Upload another file</Text>
                            </TouchableOpacity>

                        </View>
                    </View>

                    <View>
                        <Text style={globalStyles.p as any}>Or choose avatar instead</Text>
                        <FlatList
                            style={{ marginTop: 16 }}
                            numColumns={5}
                            scrollEnabled={false}
                            data={icons}
                            renderItem={({ item, index }) => (
                                <TouchableOpacity
                                    onPress={() => setIsIcon(index)}
                                    style={{ width: "20%", alignItems: "center", justifyContent: "center" }}
                                >
                                    <Image
                                        style={styles.icons}
                                        source={item}
                                        height={70}
                                    />
                                </TouchableOpacity>
                            )}
                            keyExtractor={(item, index) => index.toString()}
                        />
                    </View>

                    <View>
                        <TouchableOpacity
                            style={globalStyles.btnFilled}
                        >
                            <Text style={[globalStyles.txt as any, { color: "white" }]}>Continue</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </Container>
    )
};


const styles = StyleSheet.create({
    container: {
        alignSelf: 'center',
    },
    image: {
        width: 150,
        height: 150,
        objectFit: "cover",
    },
    icons: {
        maxWidth: 60,
        maxHeight: 60,
    }
})