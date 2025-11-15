import BackButton from '@/components/BackButton';
import Container from '@/components/Container';
import { globalStyles, primaryBg } from '@/constants/globalStyles';
import Feather from '@expo/vector-icons/Feather';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import React, { useState } from 'react';
import { FlatList, Image, Text, TextInput, TouchableOpacity, View } from 'react-native';

const helpCenter1 = require('@/assets/images/profile/helpCenter1.png');
const helpCenter2 = require('@/assets/images/profile/helpCenter2.png');
const helpCenter3 = require('@/assets/images/profile/helpCenter3.png');
const helpCenter4 = require('@/assets/images/profile/helpCenter4.png');
const helpCenter5 = require('@/assets/images/profile/helpCenter5.png');
const helpCenter6 = require('@/assets/images/profile/helpCenter6.png');

export default function HelpCenter() {
    const cards = [
        {
            id: "1",
            heading: "Orders & Delivery",
            text: "Track your order or report delivery issues",
            image: helpCenter1,
            path: "/profile/Orders"
        },
        {
            id: "2",
            heading: "Payments & Refunds",
            text: "Payments & Refunds",
            image: helpCenter2,
            path: "/profile/Payments"
        },
        {
            id: "3",
            heading: "My Account",
            text: "Profile, password, or login",
            image: helpCenter3,
            path: "/profile/MyAccount"
        },
        {
            id: "4",
            heading: "Return & Cancellations",
            text: "Learn how to return or cancle an order",
            image: helpCenter4,
            path: "/profile/ReturnOrder"
        },
        {
            id: "5",
            heading: "App & Technical Support",
            text: "Report a bug or app issue",
            image: helpCenter5,
            path: "/profile/TechnicalSupport"
        },
        {
            id: "6",
            heading: "Contack Support",
            text: "Talk directly to our support team",
            image: helpCenter6,
            path: "/profile/ContactSupport"
        },
    ]

    const [search, setSearch] = useState("");
    const [searchFocus, setSearchFocus] = useState(false)

    return (
        <Container>
            <View>
                <BackButton></BackButton>
                <Text style={{ position: "absolute", flex: 1, alignSelf: "center", paddingVertical: 10, fontFamily: "Poppins", fontWeight: 700, fontSize: 24, color: "#1A1F71" }}>Help Center</Text>
            </View>

            <View style={{ flex: 1, flexDirection: "column", rowGap: 40 }}>
                <View style={{ position: "relative" }}>
                    <TextInput
                        style={[
                            globalStyles.textInput as any,
                            searchFocus ? globalStyles.inputFocused : globalStyles.inputBlurred, { paddingLeft: 50 }
                        ]}
                        onChangeText={text => setSearch(text)}
                        value={search}
                        inputMode='email'
                        placeholder="Search for help or FAQs…"
                        placeholderTextColor="#666666"
                        onFocus={() => setSearchFocus(true)}
                        onBlur={() => setSearchFocus(false)}
                    />
                    <Feather style={{ position: "absolute", left: 15, top: 18 }} name="search" size={24} color="black" />
                </View>

                <View>
                    <FlatList
                        // style={{ marginTop: 16 }}
                        data={cards}
                        renderItem={({ item, index }) => (
                            <TouchableOpacity
                                // onPress={() => setIsIcon(index)}
                                style={{ backgroundColor: primaryBg, padding: 16, marginBottom: 8, borderRadius: 20 }}
                            >
                                <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                                    <View style={{ flexDirection: "row", alignItems: "center", columnGap: 8, width: "90%" }}>
                                        <Image
                                            style={{ objectFit: "contain", width:"20%", overflow:"hidden" }}
                                            source={item.image}
                                            height={50}
                                        >
                                        </Image>

                                        <View style={{ maxWidth: "80%" }}>
                                            <Text style={{ fontSize: 18, color: "#333333", fontWeight: "500", fontFamily: "Poppins" }}>{item.heading}</Text>
                                            <Text style={[globalStyles.p as any, { fontSize: 14, textAlign: "left" }]}>{item.text}</Text>
                                        </View>
                                    </View>
                                    <View style={{width:"10%"}}>
                                        <MaterialIcons name="arrow-forward-ios" size={24} color="black" />
                                    </View>
                                </View>
                            </TouchableOpacity>
                        )}
                        keyExtractor={(item, index) => index.toString()}
                    />
                </View>
            </View>

        </Container>
    )
}