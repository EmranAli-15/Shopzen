import Container from "@/components/Container";
import Header from "@/components/header/Header";
import { globalStyles, primaryColor } from "@/constants/globalStyles";
import { FontAwesome6, Ionicons } from "@expo/vector-icons";
import { useLocalSearchParams } from "expo-router";
import React, { useEffect, useRef, useState } from "react";
import { Dimensions, FlatList, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

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
            productData.image1,
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
        <SafeAreaView>
            <View style={{ marginHorizontal: 10 }}>
                <Header title="Product details"></Header>
            </View>
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
                                resizeMode="cover"
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


                <Container>

                    <View style={{ flexDirection: "column", rowGap: 10 }}>

                        {/* Product name */}
                        <View>
                            <Text style={[globalStyles.h1, { fontSize: 16 }]}>{product?.name}</Text>
                            <Text style={[globalStyles.p as any, {textAlign:"left"}]}>Brand : Sony</Text>
                        </View>


                        {/* Product price */}
                        <View>
                            <View style={{ flexDirection: "row", alignItems: "center", columnGap: 2 }}>
                                <FontAwesome6 name="bangladeshi-taka-sign" size={16} color={primaryColor} />
                                <Text style={{ textAlign: "left", marginTop: 7, color: primaryColor, fontSize: 16, fontFamily: "PoppinsBold" }}>{product?.original_price}</Text>
                            </View>

                            {/* Product rating */}
                            <View style={{ flexDirection: "row", alignItems: "center", columnGap: 2 }}>
                                <Ionicons name="star" size={12} color={primaryColor} />
                                <Ionicons name="star" size={12} color={primaryColor} />
                                <Ionicons name="star" size={12} color={primaryColor} />
                                <Ionicons name="star" size={12} color={primaryColor} />
                                <Ionicons name="star" size={12} color="gray" />
                                <Text style={{ fontFamily: "poppinsRegular" }}>{product?.rating_avg}</Text>
                            </View>
                        </View>





                        {/* Product description */}
                        <View>
                            <Text style={globalStyles.h1}>Product Description</Text>
                            <Text style={[globalStyles.p as any, { textAlign: "left" }]}>{product?.description}</Text>
                        </View>


                        {/* Add to cart */}
                        <View style={{ flexDirection: "column", alignItems: "center", justifyContent: "center", rowGap: 20, marginTop: 20 }}>
                            <View style={{ flexDirection: "row", columnGap: 10 }}>
                                <TouchableOpacity style={[globalStyles.btnFilled, { borderRadius: 8, paddingVertical: 5 }]}>
                                    <Text style={{ color: "#fff", fontFamily: "PoppinsRegular" }}>Buy Now</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={[globalStyles.btn, { borderRadius: 8, paddingVertical: 5 }]}>
                                    <Text style={{ color: primaryColor, fontFamily: "PoppinsRegular" }}>Add to Cart</Text>
                                </TouchableOpacity>
                            </View>
                        </View>


                        {/* Shop details */}
                        <View style={{ flexDirection: "column", rowGap: 8, marginVertical: 20, marginBottom: 100 }}>
                            <View style={styles.devideLine}></View>
                            <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                                <View style={{ flexDirection: "row", columnGap: 5, alignItems: "center" }}>
                                    <Image
                                        height={40}
                                        width={40}
                                        source={{ uri: productData.image1 }}
                                        style={{ height: 40, width: 40, borderRadius: 4 }}
                                    ></Image>
                                    <Text style={{ fontFamily: "PoppinsMedium", fontSize: 14 }}>{productData.vendor_name}</Text>
                                </View>
                                <TouchableOpacity
                                    style={[globalStyles.btnFilled, { paddingVertical: 4, borderRadius: 8, height: 30 }]}
                                >
                                    <Text style={[globalStyles.txt as any, { color: "#fff" }]}>View Shop</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.devideLine}></View>
                        </View>
                    </View>
                </Container>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    mainImage: {
        width: width,
        height: width,
    },
    thumbnailContainer: {
        flexDirection: "row",
        paddingHorizontal: 10,
    },
    thumbnail: {
        marginTop: 20,
        width: 30,
        height: 30,
        borderRadius: 8,
        marginHorizontal: 4,
        borderWidth: 2,
    },
    devideLine: {
        flex: 1,
        height: 1,
        borderRadius: 2,
        backgroundColor: "#D3D3D3"
    }
});
