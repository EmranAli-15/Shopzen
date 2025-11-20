import Container from "@/components/Container";
import Header from "@/components/header/Header";
import { globalStyles, primaryColor } from "@/constants/globalStyles";
import { FontAwesome6, Ionicons } from "@expo/vector-icons";
import { useLocalSearchParams } from "expo-router";
import React, { useEffect, useRef, useState } from "react";
import { Dimensions, FlatList, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const { width } = Dimensions.get("window");

export default function ProductImages() {
    const { id } = useLocalSearchParams();
    const productData = JSON.parse(id as any);

    const [product, setProduct] = useState<any>(null);

    const [images, setImages] = useState<any>([]);




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


                    <View style={{ marginTop: 10 }}>
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
