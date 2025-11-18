import Container from "@/components/Container";
import Header from "@/components/header/Header";
import { globalStyles, primaryColor } from "@/constants/globalStyles";
import axiosInstance from "@/utils/axiosInstance";
import { FontAwesome6, Ionicons } from "@expo/vector-icons";
import { useLocalSearchParams } from "expo-router";
import React, { useEffect, useRef, useState } from "react";
import { Dimensions, FlatList, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const { width } = Dimensions.get("window");
const cateImgs = [
    "https://api.softzenit.shop/media/product/image/images.jpeg",
    "https://api.softzenit.shop/media/product/image/images.jpeg",
    "https://api.softzenit.shop/media/product/image/images.jpeg",
    "https://api.softzenit.shop/media/product/image/images.jpeg",
]

export default function ProductImages() {
    const { id } = useLocalSearchParams();
    console.log(id)

    const [loading, setLoading] = useState(true);

    const [product, setProduct] = useState<any>(null);

    const [images, setImages] = useState<any>([]);


    const fetchProduct = async () => {
        try {
            const response = await axiosInstance.get(`/products/${id}`);
            setProduct(response.data);
            const imgs = [
                response.data.image1,
                response.data.image2,
                response.data.image3,
                response.data.image4,
                response.data.image5
            ]
            setImages(imgs)
            setLoading(false);
        } catch (err) {
            console.log(err)
        }
    };

    useEffect(() => {
        fetchProduct()
    }, [])


    const flatRef = useRef<any>(null);
    const [activeIndex, setActiveIndex] = useState(0);

    const onViewChange = useRef(({ viewableItems }: { viewableItems: any }) => {
        if (viewableItems.length > 0) {
            setActiveIndex(viewableItems[0].index);
        }
    });

    return (
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


                    <View style={{marginTop:10}}>
                        <Text style={globalStyles.h2}>Product Description</Text>
                        <Text style={[globalStyles.small as any, { fontSize: 14, textAlign: "left" }]}>{product?.description}</Text>
                    </View>

                </View>
            </ScrollView>
        </Container>
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
});
