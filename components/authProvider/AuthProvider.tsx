import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
const gmailImg = require('@/assets/images/gmail.png');
const appleImg = require('@/assets/images/apple.png');
const facebookImg = require('@/assets/images/facebook.png');

export default function AuthProvider() {
    return (
        <View style={styles.container}>
            <Image
                style={{ height: "auto", width: "auto" }}
                source={gmailImg}
                width={44}
                height={44}
            />
            <Image
                style={{ height: "auto", width: "auto" }}
                source={appleImg}
                width={34}
                height={40}
            />
            <Image
                style={{ height: "auto", width: "auto" }}
                source={facebookImg}
                width={44}
                height={44}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignSelf: "center",
        columnGap: 40,
    }
});