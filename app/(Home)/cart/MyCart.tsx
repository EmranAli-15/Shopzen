import Container from '@/components/Container'
import Header from '@/components/header/Header'
import MyModal from '@/components/MyModal'
import { globalStyles, primaryColor } from '@/constants/globalStyles'
import { retrieveData, storeData } from '@/utils/asyncStorate'
import { FontAwesome6, MaterialCommunityIcons } from '@expo/vector-icons'
import MaterialIcons from '@expo/vector-icons/MaterialIcons'
import { Checkbox } from 'expo-checkbox'
import { Link } from 'expo-router'
import React, { useEffect, useState } from 'react'
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
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




    const [idForDelItem, setIdFroDelItem] = useState<any>()
    const [delModal, setDelModal] = useState(false)
    const handleRemoveItem = (id: any) => {
        setIdFroDelItem(id);
        setDelModal(true);
    }
    const confirmItemDelete = () => {
        const updatedCart = cart.filter((item: any) => item.id !== idForDelItem);
        setCart(updatedCart);
        storeData({ key: "myCart", value: updatedCart })
        setDelModal(false)
    }



    return (
        <Container>
            <Header title='My Cart'></Header>
            {
                <MyModal modal={delModal} setModal={setDelModal}>
                    <Text style={{ alignSelf: "center", fontSize: 20, fontFamily: "PoppinsBold" }}>Are you sure!</Text>
                    <View style={{ flexDirection: "row", marginTop: 20, width: "100%" }}>
                        <View style={{ width: "50%" }}>
                            <TouchableOpacity
                                style={[globalStyles.btnFilled, { width: "100%" }]}
                                onPress={() => setDelModal(false)}
                            >
                                <Text style={[globalStyles.txt as any, { color: "white" }]}>NO</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ width: "50%" }}>
                            <TouchableOpacity
                                style={[globalStyles.btn, { width: "100%" }]}
                                onPress={() => confirmItemDelete()}
                            >
                                <Text style={[globalStyles.txt as any, { color: "#FF620A" }]}>Confirm!</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </MyModal>
            }

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
                                    key={item.id}
                                >
                                    <View
                                        style={{ flexDirection: "row", columnGap: 10 }}
                                    >
                                        <View>
                                            <Checkbox
                                                style={{ marginTop: 10 }}
                                                value={false}
                                                // onValueChange={setChecked4}
                                                // color={isChecked4 ? primaryColor : undefined}
                                                color="black"
                                            />
                                        </View>
                                        <View>
                                            <View style={{ flexDirection: "row", columnGap: 10 }}>
                                                <View>
                                                    <Image style={{ height: 80, width: 80, borderRadius: 8 }} source={{ uri: item.image1 }}></Image>
                                                </View>
                                                <View style={{ flexDirection: "column", justifyContent: "space-between" }}>
                                                    <Text style={{ fontFamily: "PoppinsMedium" }}>{item.name}</Text>
                                                    <View style={{ flexDirection: "row", columnGap: 2, alignItems: "center" }}>
                                                        <MaterialCommunityIcons name="storefront" size={12} color="#1A1F71" />
                                                        <Text style={{ fontFamily: "PoppinsRegular", fontSize: 12, marginTop: 3 }}>{item.vendor_name}</Text>
                                                    </View>
                                                    <TouchableOpacity
                                                        onPress={() => handleRemoveItem(item.id)}
                                                    >
                                                        <MaterialIcons name="delete-outline" size={20} color="red" />
                                                    </TouchableOpacity>
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