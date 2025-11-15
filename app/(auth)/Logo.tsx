import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
const delivery_truck = require('@/assets/images/delivery_truck.png');


export default function Logo() {
    return (
        <View>
            <Text style={styles.heading}>Shop<Text style={{ color: "#0973BA" }}>Zen</Text></Text>
            <View style={{ flexDirection: "row", alignSelf: "center", alignItems: "center", columnGap: 2, marginTop: -15 }}>
                <Text style={{ color: "#3CB64B", fontFamily: "PoppinsBold", fontSize: 13 }}>Your Trusted Marketplace.</Text>
                <Image
                    style={{ height: "auto", width: "auto" }}
                    source={delivery_truck}
                    width={37}
                    height={26}
                />
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    heading: {
        fontSize: 44,
        fontFamily: "PoppinsBold",
        textAlign: "center",
        color: "#FF620A"
    }
});