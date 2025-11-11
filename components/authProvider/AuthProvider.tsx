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
                width={39}
                height={39}
            />
            <Image
                style={{ height: "auto", width: "auto" }}
                source={appleImg}
                width={29}
                height={35}
            />
            <Image
                style={{ height: "auto", width: "auto" }}
                source={facebookImg}
                width={39}
                height={39}
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