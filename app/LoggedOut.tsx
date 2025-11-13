import Container from '@/components/Container'
import { globalStyles, primaryColor } from '@/constants/globalStyles'
import { useRouter } from 'expo-router'
import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
const goodBye = require('@/assets/images/signInOut/Goodbye.png');

export default function SignOut() {
    const router = useRouter()

    return (
        <Container>
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>

                <View>
                    <View style={{ flexDirection: "column", rowGap: 40 }}>
                        <View style={styles.container}>
                            <Image
                                style={styles.image}
                                resizeMode="contain"
                                source={goodBye}
                            />
                        </View>

                        <Text style={globalStyles.h3 as any}>See You Soon!</Text>
                        <Text style={globalStyles.p as any}>You’ve been signed out of your ShopZen account.Come back anytime to explore great deals.</Text>

                        <TouchableOpacity
                            style={globalStyles.btnFilled}
                            onPress={() => router.navigate('/SignIn')}
                        >
                            <Text style={[globalStyles.txt as any, { color: "white" }]}>Go to Sign in</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={globalStyles.btn}
                        // onPress={() => router.navigate('/Profile')}
                        >
                            <Text style={[globalStyles.txt as any, { color: primaryColor }]}>Continue Shopping</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Container>
    )
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: "30%",
        alignItems: 'center',
        justifyContent:"center"
    },
    image: {
        width: '80%',
        height: '80%',
    },
})