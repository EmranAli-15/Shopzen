import BackButton from '@/components/BackButton';
import Container from '@/components/Container';
import { globalStyles } from '@/constants/globalStyles';
import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
const myAddress = require('@/assets/images/profile/myAddress.png');

export default function MyAddress() {
    return (
        <Container>
            <BackButton></BackButton>
            <Text style={{ position: "absolute", flex: 1, alignSelf: "center", paddingVertical: 10, fontFamily: "Poppins", fontWeight: 700, fontSize: 24, color: "#1A1F71" }}>Addresses</Text>

            <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                <View style={{ flexDirection: "column", rowGap: 51 }}>
                    <View style={{alignSelf:"center"}}>
                        <Image
                            style={{ maxWidth: 150 }}
                            resizeMode="contain"
                            source={myAddress}
                            height={150}
                            width={150}
                        />
                    </View>

                    <View style={{ flexDirection: "column", rowGap: 8 }}>
                        <Text style={globalStyles.h3 as any}>No Address Yet</Text>
                        <Text style={globalStyles.p as any}>You haven’t placed any orders yet. Discover amazing deals from trusted vendors across Bangladesh!</Text>
                    </View>

                    <TouchableOpacity
                        style={globalStyles.btnFilled}
                    // onPress={() => router.navigate('/Profile')}
                    >
                        <Text style={[globalStyles.txt as any, { color: "white" }]}>+ Add new address</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Container>
    )
}