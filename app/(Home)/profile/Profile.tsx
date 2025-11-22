import Container from '@/components/Container';
import Header from '@/components/header/Header';
import MyModal from '@/components/MyModal';
import { globalStyles, primaryBg, primaryColor } from '@/constants/globalStyles';
import { useAuth } from '@/contextProvider/ContextProvider';
import { removeData } from '@/utils/asyncStorate';
import Feather from '@expo/vector-icons/Feather';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Octicons from '@expo/vector-icons/Octicons';
import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
const logout = require('@/assets/images/signInOut/Logout.png')

export default function Profile() {
    const router = useRouter();

    const [modal, setModal] = useState(false);


    const { user, setContextLoading } = useAuth();

    const handleSignOut = () => {
        removeData("user");
        setContextLoading(true);
        router.navigate("/LoggedOut")
    }


    return (
        <View>
            <Container>
                <MyModal modal={modal} setModal={setModal}>
                    <View style={{ flexDirection: "column", rowGap: 10 }}>
                        <View>
                            <Image
                                style={{ alignSelf: "center" }}
                                resizeMode="contain"
                                source={logout}
                                height={40}
                                width={40}
                            />
                        </View>
                        <Text style={[globalStyles.h1 as any, { textAlign: "center" }]}>Sign Out</Text>
                        <Text style={globalStyles.p as any}>Are you sure want to SIgn out of your ShopZen account?</Text>
                        <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", columnGap: 30 }}>
                            <TouchableOpacity
                                style={[globalStyles.btnFilled, { flex: 1, borderRadius:8, paddingVertical:6 }]}
                                onPress={() => setModal(false)}
                            >
                                <Text style={[globalStyles.txt as any, { color: "white" }]}>Cancle</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={[globalStyles.btn, { flex: 1, borderRadius:8, paddingVertical:6 }]}
                                onPress={() => handleSignOut()}
                            >
                                <Text style={[globalStyles.txt as any, { color: primaryColor }]}>Sign Out</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </MyModal>

                <View>
                    <Header title='Profile'></Header>
                </View>


                <ScrollView>
                    <View style={{ flexDirection: "column", rowGap: 30 }}>
                        {/* User profile view */}
                        <View style={{ flexDirection: "column", alignItems: "center", rowGap: 16 }}>
                            <View style={{ borderRadius: "50%", backgroundColor: primaryBg, padding: 10, height: 120, width: 120, alignItems: "center", justifyContent: "center", overflow: "hidden" }}>
                                {
                                    user?.image ? <Image
                                        style={{ height: 120, width: 120 }}
                                        source={{ uri: user?.image }}
                                    ></Image> :
                                        <FontAwesome name="user" size={100} color={primaryColor} />
                                }
                            </View>
                            <View>
                                <Text style={[styles.headlines, { textAlign: "center" }]}>{user?.name || "Md. Abdul Gaffar"}</Text>
                                <Text style={[globalStyles.p as any, { marginTop: -5 }]}>{user?.email || "Softzenit@gmail.com"}</Text>
                            </View>
                        </View>


                        {/* Account section */}
                        <View>
                            <Text style={styles.headlines}>Account</Text>
                            <View style={{ backgroundColor: primaryBg, padding: 10, borderRadius: 26 }}>

                                <TouchableOpacity
                                    style={styles.linkStyle}
                                    onPress={() => router.navigate('/profile/AccountInfo')}
                                >
                                    <View style={styles.linkStyleIn}>
                                        <SimpleLineIcons name="user" size={20} color="#4D4D4D" />
                                        <Text style={styles.linkHeading}>Account Information</Text>
                                    </View>
                                    <MaterialIcons name="arrow-forward-ios" size={16} color="#4D4D4D" />
                                </TouchableOpacity>

                                <View style={styles.devideLine}></View>

                                <TouchableOpacity
                                    style={styles.linkStyle}
                                    onPress={() => router.navigate('/profile/MyOrder')}
                                >
                                    <View style={styles.linkStyleIn}>
                                        <MaterialCommunityIcons name="invoice-text-outline" size={20} color="#4D4D4D" />
                                        <Text style={styles.linkHeading}>My Orders</Text>
                                    </View>
                                    <MaterialIcons name="arrow-forward-ios" size={16} color="#4D4D4D" />
                                </TouchableOpacity>

                                <View style={styles.devideLine}></View>

                                <TouchableOpacity
                                    style={styles.linkStyle}
                                    onPress={() => router.navigate('/profile/MyAddress')}
                                >
                                    <View style={styles.linkStyleIn}>
                                        <Octicons name="location" size={20} color="#4D4D4D" />
                                        <Text style={styles.linkHeading}>My Address</Text>
                                    </View>
                                    <MaterialIcons name="arrow-forward-ios" size={16} color="#4D4D4D" />
                                </TouchableOpacity>

                                <View style={styles.devideLine}></View>

                                <TouchableOpacity
                                    style={styles.linkStyle}
                                    onPress={() => router.navigate('/profile/Settings')}
                                >
                                    <View style={styles.linkStyleIn}>
                                        <Feather name="settings" size={20} color="#4D4D4D" />
                                        <Text style={styles.linkHeading}>Settings</Text>
                                    </View>
                                    <MaterialIcons name="arrow-forward-ios" size={16} color="#4D4D4D" />
                                </TouchableOpacity>

                            </View>
                        </View>


                        {/* Support section */}
                        <View style={{ marginBottom: 20 }}>
                            <Text style={styles.headlines}>Support</Text>
                            <View style={{ backgroundColor: primaryBg, padding: 10, borderRadius: 26 }}>

                                <TouchableOpacity
                                    style={styles.linkStyle}
                                    onPress={() => router.navigate("/profile/HelpCenter")}
                                >
                                    <View style={styles.linkStyleIn}>
                                        <MaterialIcons name="help-outline" size={20} color="#4D4D4D" />
                                        <Text style={styles.linkHeading}>Help Center</Text>
                                    </View>
                                    <MaterialIcons name="arrow-forward-ios" size={16} color="#4D4D4D" />
                                </TouchableOpacity>

                                <View style={styles.devideLine}></View>

                                <TouchableOpacity
                                    onPress={() => setModal(true)}
                                    style={styles.linkStyle}
                                >
                                    <View style={styles.linkStyleIn}>
                                        <MaterialIcons name="logout" size={20} color="#4D4D4D" />
                                        <Text style={styles.linkHeading}>Sign Out</Text>
                                    </View>
                                    <MaterialIcons name="arrow-forward-ios" size={16} color="#4D4D4D" />
                                </TouchableOpacity>

                            </View>
                        </View>
                    </View>
                </ScrollView>
            </Container>
        </View>
    )
};


const styles = StyleSheet.create({
    headlines: {
        fontSize: 16,
        fontFamily: "PoppinsSemiBold",
        color: "#333333",
        marginBottom: 4
    },
    linkHeading: {
        fontSize: 13,
        fontFamily: "PoppinsMedium",
        color: "#4D4D4D"
    },
    linkStyle: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginVertical: 10
    },
    linkStyleIn: {
        flexDirection: "row",
        columnGap: 10
    },
    devideLine: {
        height: 1,
        borderRadius: 2,
        backgroundColor: "#666666"
    }
})