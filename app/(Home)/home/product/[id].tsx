import Container from "@/components/Container";
import Header from "@/components/header/Header";
import { globalStyles, primaryColor } from "@/constants/globalStyles";
import { FontAwesome6, Ionicons } from "@expo/vector-icons";
import Entypo from '@expo/vector-icons/Entypo';
import { useLocalSearchParams } from "expo-router";
import React, { useEffect, useRef, useState } from "react";
import { Dimensions, FlatList, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const { width } = Dimensions.get("window");

export default function ProductImages() {
    const { id } = useLocalSearchParams();
    const productData = JSON.parse(id as any);
    const [product, setProduct] = useState<any>(null);
    const [images, setImages] = useState<any>([]);


    const [quantity, setQuantity] = useState(1);
    const handleQuantity = (flag: boolean) => {
        if (flag) setQuantity(quantity + 1);
        else {
            if (quantity > 1) setQuantity(quantity - 1);
        }
    }





    useEffect(() => {
        setProduct(productData);

        const imgs = [
            productData.image1,
            productData.image2,
            productData.image3,
            productData.image4,
            productData.image5
        ]

        const avaiImgs = imgs.filter((img: any) => img !== null)
        setImages(avaiImgs)
    }, [id])


    const flatRef = useRef<any>(null);
    const [activeIndex, setActiveIndex] = useState(0);

    const onViewChange = useRef(({ viewableItems }: { viewableItems: any }) => {
        if (viewableItems.length > 0) {
            setActiveIndex(viewableItems[0].index);
        }
    });

    return (
        <ScrollView>
            <Container>
                <Header title="Product details"></Header>
                <ScrollView>
                    <View style={{ alignItems: "center" }}>
                        {/* Main Image Slider */}
                        <FlatList
                            data={images}
                            ref={flatRef}
                            horizontal
                            pagingEnabled
                            showsHorizontalScrollIndicator={false}
                            onViewableItemsChanged={onViewChange.current}
                            viewabilityConfig={{ itemVisiblePercentThreshold: 70 }}
                            keyExtractor={(item, index) => index.toString()}
                            renderItem={({ item }) => (
                                <Image
                                    source={{ uri: item }}
                                    style={styles.mainImage}
                                    resizeMode="contain"
                                />
                            )}
                        />

                        {/* Thumbnails */}
                        <View style={styles.thumbnailContainer}>
                            {images?.map((img: any, index: any) => {
                                const isActive = index === activeIndex;
                                return (
                                    <TouchableOpacity
                                        key={index}
                                        activeOpacity={0.7}
                                        onPress={() => {
                                            setActiveIndex(index);
                                            flatRef.current?.scrollToIndex({ index, animated: true });
                                        }}
                                    >
                                        <Image
                                            source={{ uri: img }}
                                            style={[
                                                styles.thumbnail,
                                                {
                                                    opacity: isActive ? 1 : 0.4,
                                                    transform: [{ scale: isActive ? 1.15 : 0.85 }],
                                                    borderWidth: 0
                                                },
                                            ]}
                                        />
                                    </TouchableOpacity>
                                );
                            })}
                        </View>
                    </View>



                    <View style={{ marginTop: 20 }}>
                        <Text style={globalStyles.h2}>{product?.name}</Text>

                        <View style={{ flexDirection: "row", alignItems: "center", columnGap: 2 }}>
                            <FontAwesome6 name="bangladeshi-taka-sign" size={20} color={primaryColor} />
                            <Text style={{ textAlign: "left", marginTop: 7, color: primaryColor, fontSize: 22, fontFamily: "PoppinsBold" }}>{product?.original_price}</Text>
                        </View>

                        <View style={{ flexDirection: "row", alignItems: "center", columnGap: 2 }}>
                            <Ionicons name="star" size={14} color={primaryColor} />
                            <Ionicons name="star" size={14} color={primaryColor} />
                            <Ionicons name="star" size={14} color={primaryColor} />
                            <Ionicons name="star" size={14} color={primaryColor} />
                            <Ionicons name="star" size={14} color="gray" />
                            <Text style={{ fontFamily: "poppinsRegular" }}>{product?.rating_avg}</Text>
                        </View>


                        {/* Shop details */}
                        <View style={{ flexDirection: "column", rowGap: 8, marginVertical: 20 }}>
                            <View style={styles.devideLine}></View>
                            <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                                <View style={{ flexDirection: "row", columnGap: 5, alignItems: "center" }}>
                                    <Image
                                        height={40}
                                        width={40}
                                        source={{ uri: productData.image1 }}
                                        style={{ height: 40, width: 40, borderRadius: 4 }}
                                    ></Image>
                                    <Text style={{ fontFamily: "PoppinsMedium", fontSize: 16 }}>{productData.vendor_name}</Text>
                                </View>
                                <TouchableOpacity
                                    style={[globalStyles.btnFilled, { paddingVertical: 5, borderRadius: 16 }]}
                                >
                                    <Text style={{ color: "white", fontFamily: "PoppinsRegular", alignSelf: "center", marginTop: 3 }}>View Shop</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.devideLine}></View>
                        </View>



                        <View>
                            <Text style={globalStyles.h2}>Product Description</Text>
                            <Text style={[globalStyles.small as any, { fontSize: 14, textAlign: "left" }]}>{product?.description}</Text>
                        </View>



                        {/* Add to cart */}
                        <View style={{ flexDirection: "column", alignItems: "center", justifyContent: "center", rowGap: 20, marginTop: 20 }}>
                            <View style={{ flexDirection: "row", alignItems: "center", columnGap: 16 }}>
                                <Text style={{ fontFamily: "PoppinsMedium" }}>Quantity</Text>
                                <View style={{ borderWidth: 1, borderRadius: 8, height: 25, width: 25, alignItems: "center", justifyContent: "center" }}>
                                    <TouchableOpacity
                                        onPress={() => handleQuantity(false)}
                                    >
                                        <Entypo name="minus" size={20} color="black" />
                                    </TouchableOpacity>
                                </View>
                                <Text style={{ fontFamily: "PoppinsRegular" }}>{quantity}</Text>
                                <View style={{ borderWidth: 1, borderRadius: 8, height: 25, width: 25, alignItems: "center", justifyContent: "center" }}>
                                    <TouchableOpacity
                                        onPress={() => handleQuantity(true)}
                                    >
                                        <Entypo name="plus" size={20} color="black" />
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <View style={{ flexDirection: "row", columnGap: 10 }}>
                                <TouchableOpacity style={[globalStyles.btnFilled, { borderRadius: 16, paddingVertical: 5 }]}>
                                    <Text style={{ color: "#fff", fontFamily: "PoppinsRegular" }}>Buy Now</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={[globalStyles.btn, { borderRadius: 16, paddingVertical: 5 }]}>
                                    <Text style={{ color: primaryColor, fontFamily: "PoppinsRegular" }}>Add to Cart</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </Container>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    mainImage: {
        width: width,
        height: 180,
        borderRadius: 12,
    },
    thumbnailContainer: {
        flexDirection: "row",
        paddingHorizontal: 10,
    },
    thumbnail: {
        marginTop: 20,
        width: 40,
        height: 40,
        borderRadius: 10,
        marginHorizontal: 6,
        borderWidth: 2,
    },
    devideLine: {
        flex: 1,
        height: 1,
        borderRadius: 2,
        backgroundColor: "#666666"
    }
});
