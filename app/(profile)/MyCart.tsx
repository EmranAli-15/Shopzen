import Container from '@/components/Container'
import { globalStyles, primaryBg, primaryColor } from '@/constants/globalStyles'
import FontAwesome from '@expo/vector-icons/FontAwesome'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function MyCart() {
    return (
        <Container>
            <View style={{ flexDirection: "column", alignItems: "center" }}>
                <Text style={{ alignSelf: "center", paddingVertical: 10, fontFamily: "Poppins", fontWeight: 700, fontSize: 24, color: "#1A1F71" }}>My Cart</Text>
                <View style={{ borderRadius: "50%", backgroundColor: primaryBg, padding: 10, height: 100, width: 100, alignItems: "center", justifyContent: "center" }}>
                    <FontAwesome name="user" size={80} color={primaryColor} />
                </View>
                <Text style={styles.headlines}>Md. Abdul Gaffar</Text>
                <Text style={globalStyles.p as any}>Softzenit@gmail.com</Text>
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
    }
})