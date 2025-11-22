import Container from '@/components/Container'
import Header from '@/components/header/Header'
import MyModal from '@/components/MyModal'
import { globalStyles, primaryColor } from '@/constants/globalStyles'
import { retrieveData, storeData } from '@/utils/asyncStorate'
import { FontAwesome6 } from '@expo/vector-icons'
import Entypo from '@expo/vector-icons/Entypo'
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
                    <Text style={[globalStyles.h1, { textAlign: "center" }]}>Want to remove from cart!</Text>
                    <View style={{ flexDirection: "row", marginTop: 20, justifyContent: "center", width: "100%", columnGap: 10 }}>
                        <View>
                            <TouchableOpacity
                                style={{ height: 30, borderRadius: 8, width: 80, backgroundColor: primaryColor, justifyContent: "center" }}
                                onPress={() => setDelModal(false)}
                            >
                                <Text style={[{ color: "white", textAlign: "center" }]}>NO</Text>
                            </TouchableOpacity>
                        </View>
                        <View>
                            <TouchableOpacity
                                style={{ height: 30, borderRadius: 8, width: 80, borderWidth: 1, borderColor: primaryColor, justifyContent: "center" }}
                                onPress={() => confirmItemDelete()}
                            >
                                <Text style={[{ paddingVertical: 1, color: "#FF620A", textAlign: "center" }]}>Yes!</Text>
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
                    // contentContainerStyle={{ columnGap: 12 }}
                    >
                        {cart.map((item: any) => {
                            return (
                                <View
                                    style={{ marginTop: 15 }}
                                    key={item.id}
                                >
                                    <View style={{ flexDirection: "row", columnGap: 10, width: "95%" }}>

                                        {/* Checkbox and image */}
                                        <View style={{ flexDirection: "row", columnGap: 15, width: "35%" }}>
                                            <View>
                                                <Checkbox
                                                    style={{ marginTop: 10, borderWidth: 1, borderRadius: 5 }}
                                                    value={false}
                                                    // onValueChange={setChecked4}
                                                    // color={isChecked4 ? primaryColor : undefined}
                                                    // color={isChecked4 ? primaryColor : undefined}
                                                    color="#1A1F71"
                                                />
                                            </View>
                                            <Link
                                                href={{
                                                    pathname: `/(Home)/home/product/[id]`,
                                                    params: { id: JSON.stringify(item) },
                                                }}
                                            >
                                                <Image style={{ height: 65, width: 65, borderRadius: 8 }} source={{ uri: item.image1 }}></Image>
                                            </Link>
                                        </View>


                                        {/* All info about product */}
                                        <View style={{ flexDirection: "column", justifyContent: "space-between", width: "62%" }}>

                                            {/* Product name */}
                                            <Text style={{ fontFamily: "PoppinsRegular", fontSize: 12 }}>{item.name}</Text>

                                            {/* Product price */}
                                            <View style={{ flexDirection: "row", columnGap: 2, alignItems: "center" }}>
                                                <FontAwesome6 name="bangladeshi-taka-sign" size={12} color={primaryColor} />
                                                <Text style={styles.price}>{item.original_price}</Text>
                                            </View>



                                            {/* Delete button and quantity */}
                                            <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                                                {/* Delete button */}
                                                <TouchableOpacity
                                                    onPress={() => handleRemoveItem(item.id)}
                                                >
                                                    <MaterialIcons name="delete-outline" size={18} color="#666666" />
                                                </TouchableOpacity>

                                                {/* Quantity */}
                                                <View style={{ flexDirection: "row", columnGap: 15, alignItems: "center" }}>
                                                    <TouchableOpacity
                                                    >
                                                        <Entypo name="squared-minus" size={20} color="#1A1F71" />
                                                    </TouchableOpacity>
                                                    <Text>1</Text>
                                                    <TouchableOpacity
                                                    >
                                                        <Entypo name="squared-plus" size={20} color="#1A1F71" />
                                                    </TouchableOpacity>
                                                </View>
                                            </View>
                                        </View>
                                    </View>
                                </View>
                            )
                        })}
                    </ScrollView>
            }
        </Container>
    )
};


const styles = StyleSheet.create({
    price: {
        fontSize: 12,
        color: primaryColor,
        fontFamily: "PoppinsMedium",
        marginTop: 3
    }
});