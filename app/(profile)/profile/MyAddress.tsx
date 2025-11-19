import Container from '@/components/Container';
import Header from '@/components/header/Header';
import { globalStyles } from '@/constants/globalStyles';
import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
const myAddress = require('@/assets/images/profile/myAddress.png');

export default function MyAddress() {
    return (
        <Container>
            <Header title='Address'></Header>

            <View style={{ flexDirection: "column", rowGap: 20 }}>
                <View style={{ alignSelf: "center" }}>
                    <Image
                        style={{ maxWidth: 150 }}
                        resizeMode="contain"
                        source={myAddress}
                        height={150}
                        width={150}
                    />
                </View>

                <View style={{ flexDirection: "column", rowGap: 8 }}>
                    <Text style={[globalStyles.h2 as any, { textAlign: "center" }]}>No Address Yet</Text>
                    <Text style={globalStyles.p as any}>You haven’t placed any orders yet. Discover amazing deals from trusted vendors across Bangladesh!</Text>
                </View>

                <TouchableOpacity
                    style={globalStyles.btnFilled}
                // onPress={() => router.navigate('/Profile')}
                >
                    <Text style={[globalStyles.txt as any, { color: "white" }]}>+ Add new address</Text>
                </TouchableOpacity>
            </View>
        </Container>
    )
}