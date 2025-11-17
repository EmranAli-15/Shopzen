import React, { useRef } from 'react';
import { Animated, Dimensions, Image, StyleSheet, View } from 'react-native';

const { width } = Dimensions.get("window");
const ITEM_WIDTH = width-40 ;
const ITEM_SPACING = (width - ITEM_WIDTH) / 2;

export default function Carousel({ data }: { data: any }) {
    const scrollX = useRef(new Animated.Value(0)).current;

    return (
        <Animated.FlatList
            data={data}
            keyExtractor={(_, index) => index.toString()}
            horizontal
            showsHorizontalScrollIndicator={false}
            snapToInterval={ITEM_WIDTH}
            decelerationRate="fast"
            bounces={false}
            // contentContainerStyle={{ paddingHorizontal: ITEM_SPACING }}
            onScroll={Animated.event(
                [{ nativeEvent: { contentOffset: { x: scrollX } } }],
                { useNativeDriver: true }
            )}
            renderItem={({ item, index }) => {
                const inputRange = [
                    (index - 1) * ITEM_WIDTH,
                    index * ITEM_WIDTH,
                    (index + 1) * ITEM_WIDTH
                ];

                const scale = scrollX.interpolate({
                    inputRange,
                    outputRange: [1, 1, 1],
                });

                const opacity = scrollX.interpolate({
                    inputRange,
                    outputRange: [0.4, 1, 0.4],
                });

                return (
                    <View style={{ width: ITEM_WIDTH }}>
                        <Animated.View style={[styles.card, { opacity, transform: [{ scale }] }]}>
                            <Image source={item} style={styles.image} />
                        </Animated.View>
                    </View>
                );
            }}
        />
    );
}

const styles = StyleSheet.create({
    card: {
        // backgroundColor: "#fff",
        // borderRadius: 20,
        // padding: 10,
        height: 200,
        justifyContent: "center",
        alignItems: "center",
        // elevation: 5,
        // shadowColor: "#000",
        // shadowOpacity: 0.2,
        // shadowRadius: 10,
        
    },
    image: {
        width: "100%",
        height: "100%",
        borderRadius: 15,
        objectFit:"contain"
    }
});
