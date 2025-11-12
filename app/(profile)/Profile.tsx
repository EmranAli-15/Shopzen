import BackButton from '@/components/BackButton';
import Container from '@/components/Container';
import { globalStyles, primaryBg, primaryColor } from '@/constants/globalStyles';
import EvilIcons from '@expo/vector-icons/EvilIcons';
import Feather from '@expo/vector-icons/Feather';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function Profile() {
    return (
        <Container>
            <BackButton></BackButton>
            <Text style={{ position: "absolute", flex: 1, alignSelf: "center", paddingVertical: 10, fontFamily: "Poppins", fontWeight: 700, fontSize: 24 }}>Profile</Text>



            <View style={{ flexDirection: "column", alignItems: "center" }}>
                <View style={{ borderRadius: "50%", backgroundColor: primaryBg, padding: 10, height: 100, width: 100, alignItems: "center", justifyContent: "center" }}>
                    <FontAwesome name="user" size={80} color={primaryColor} />
                </View>
                <Text style={styles.headlines}>Md. Abdul Gaffar</Text>
                <Text style={globalStyles.p as any}>Softzenit@gmail.com</Text>
            </View>

            <View>
                <Text style={styles.headlines}>Account</Text>
                <View style={{ backgroundColor: primaryBg, padding: 10, borderRadius: 26 }}>

                    <TouchableOpacity
                        style={styles.linkStyle}
                    >
                        <View style={styles.linkStyleIn}>
                            <SimpleLineIcons name="user" size={24} color="black" />
                            <Text style={styles.linkHeading}>Account Information</Text>
                        </View>
                        <MaterialIcons name="arrow-forward-ios" size={16} color="black" />
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.linkStyle}
                    >
                        <View style={styles.linkStyleIn}>
                            <MaterialCommunityIcons name="invoice-text-outline" size={24} color="black" />
                            <Text style={styles.linkHeading}>My Orders</Text>
                        </View>
                        <MaterialIcons name="arrow-forward-ios" size={16} color="black" />
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.linkStyle}
                    >
                        <View style={styles.linkStyleIn}>
                            <EvilIcons name="location" size={24} color="black" />
                            <Text style={styles.linkHeading}>My Address</Text>
                        </View>
                        <MaterialIcons name="arrow-forward-ios" size={16} color="black" />
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.linkStyle}
                    >
                        <View style={styles.linkStyleIn}>
                            <Feather name="settings" size={24} color="black" />
                            <Text style={styles.linkHeading}>Settings</Text>
                        </View>
                        <MaterialIcons name="arrow-forward-ios" size={16} color="black" />
                    </TouchableOpacity>

                </View>
            </View>


            <View>
                <Text style={styles.headlines}>Support</Text>
                <View style={{ backgroundColor: primaryBg, padding: 10, borderRadius: 26 }}>

                    <TouchableOpacity
                        style={styles.linkStyle}
                    >
                        <View style={styles.linkStyleIn}>
                            <MaterialIcons name="help-outline" size={24} color="black" />
                            <Text style={styles.linkHeading}>Help Center</Text>
                        </View>
                        <MaterialIcons name="arrow-forward-ios" size={16} color="black" />
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.linkStyle}
                    >
                        <View style={styles.linkStyleIn}>
                            <MaterialIcons name="logout" size={24} color="black" />
                            <Text style={styles.linkHeading}>Sign Out</Text>
                        </View>
                        <MaterialIcons name="arrow-forward-ios" size={16} color="black" />
                    </TouchableOpacity>

                </View>
            </View>



            {/* Navigation Bar */}
            <View style={{ position: "absolute", flex:1, width:"100%" }}>
                <View style={{ backgroundColor: primaryBg, padding: 10, borderRadius: 26, flexDirection: "row" }}>

                    <TouchableOpacity
                        style={styles.linkStyle}
                    >
                        <MaterialIcons name="help-outline" size={24} color="black" />

                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.linkStyle}
                    >
                        <MaterialIcons name="logout" size={24} color="black" />
                    </TouchableOpacity>

                </View>
            </View>

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
    linkStyle: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginVertical: 10
    },
    linkStyleIn: {
        flexDirection: "row",
        columnGap: 10
    }
})