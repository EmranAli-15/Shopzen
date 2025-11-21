import React from 'react'
import { Text, View } from 'react-native'
import BackButton from '../BackButton'

export default function Header({ title }: { title: string }) {
    return (
        <View style={{ flexDirection: "row", columnGap: 10, alignItems: "center" }}>
            <BackButton></BackButton>
            <Text style={{
                paddingVertical: 10,
                fontFamily: "PoppinsSemiBold",
                fontSize: 17,
                color: "#1A1F71"
            }}>
                {title}
            </Text>
        </View>
    )
}