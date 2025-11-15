import BackButton from '@/components/BackButton'
import Container from '@/components/Container'
import React from 'react'
import { Text, View } from 'react-native'

export default function LiveChat() {
    return (
        <Container>
            <View>
                <BackButton></BackButton>
                <Text style={{ position: "absolute", flex: 1, alignSelf: "center", paddingVertical: 10, fontFamily: "Poppins", fontWeight: 700, fontSize: 24, color: "#1A1F71" }}>Live Chat</Text>
            </View>

            <View>
                <Text style={{}}>Hello John!</Text>
                <Text style={{ textAlign: "right" }}>Hi Doe!</Text>
            </View>
        </Container>
    )
}