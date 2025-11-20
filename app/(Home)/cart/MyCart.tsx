import Container from '@/components/Container'
import Header from '@/components/header/Header'
import { globalStyles, primaryColor } from '@/constants/globalStyles'
import { removeData, retrieveData } from '@/utils/asyncStorate'
import { FontAwesome6, MaterialCommunityIcons } from '@expo/vector-icons'
import { Link } from 'expo-router'
import React, { useEffect, useState } from 'react'
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
const myOrder = require('@/assets/images/profile/myOrder.png')

export default function MyCart() {

    const [cart, setCart] = useState<any>([]);
    const [removeItem, setRemoveItem] = useState(false);

    useEffect(() => {
        const fn = async () => {
            const myCart = await retrieveData("myCart");
            if (myCart) {
                const data = JSON.parse(myCart);
                setCart(data);
            }
        }
        fn();
    }, [removeItem])


    const handleRemoveItem = () => {
        removeData("myCart")
        setRemoveItem(!removeItem);
    }


    return (
        <Container>
            <Header title='My Cart'></Header>

            {
                cart.length === 0 ?
                    <View style={{ flexDirection: "column", rowGap: 20 }}>
                        <View style={{ alignSelf: "center" }}>
                            <Image
                                style={{ maxWidth: 150 }}
                                resizeMode="contain"
                                source={myOrder}
                                height={150}
                                width={150}
                            />
                        </View>

                        <View style={{ flexDirection: "column", rowGap: 8 }}>
                            <Text style={[globalStyles.h2 as any, { textAlign: "center" }]}>You've empty cart</Text>
                            <Text style={globalStyles.p as any}>You haven’t placed any orders yet. Discover amazing deals from trusted vendors across Bangladesh!</Text>
                        </View>

                    </View> :
                    <ScrollView
                        showsHorizontalScrollIndicator={false}
                        contentContainerStyle={{ columnGap: 12 }}
                    >
                        {cart.map((item: any) => {
                            return (
                                <Link
                                    href={{
                                        pathname: `/(Home)/home/product/[id]`,
                                        params: { id: JSON.stringify(item) },
                                    }}
                                    style={{ marginTop: 10 }}
                                >
                                    <View
                                        key={item.id}
                                        style={{ flexDirection: "row", columnGap: 10 }}
                                    >
                                        <View><Text>**</Text></View>
                                        <View>
                                            <View style={{ flexDirection: "row", columnGap: 10 }}>
                                                <View>
                                                    <Image style={{ height: 80, width: 80, borderRadius: 8 }} source={{ uri: item.image1 }}></Image>
                                                </View>
                                                <View>
                                                    <Text style={{ fontFamily: "PoppinsMedium" }}>{item.name}</Text>
                                                    <View style={{ flexDirection: "row", columnGap: 2, alignItems: "center" }}>
                                                        <MaterialCommunityIcons name="storefront" size={12} color="#1A1F71" />
                                                        <Text style={{ fontFamily: "PoppinsRegular", fontSize: 12, marginTop: 3 }}>{item.vendor_name}</Text>
                                                    </View>
                                                </View>
                                            </View>
                                            <View style={{ flexDirection: "row", columnGap: 2, alignItems: "center" }}>
                                                <FontAwesome6 name="bangladeshi-taka-sign" size={12} color={primaryColor} />
                                                <Text style={styles.price}>{item.original_price}</Text>
                                            </View>
                                        </View>
                                    </View>
                                </Link>
                            )
                        })}
                    </ScrollView>
            }
        </Container>
    )
};


const styles = StyleSheet.create({
    price: {
        fontSize: 14,
        color: primaryColor,
        fontFamily: "PoppinsBold",
        marginTop: 3
    }
});