import { TYPOGRAPHY } from '@/constants/globalStyles'
import React from 'react'
import { Text, View } from 'react-native'
import BackButton from '../BackButton'

export default function Header({ title }: { title: string }) {
    return (
        <View style={{ marginBottom: 20 }}>
            <BackButton></BackButton>
            <Text style={{
                position: "absolute",
                flex: 1,
                alignSelf: "center",
                paddingVertical: 10,
                fontFamily: "PoppinsSemiBold",
                fontSize: TYPOGRAPHY.h1, 
                color: "#1A1F71"
            }}>
                {title}
            </Text>
        </View>
    )
}