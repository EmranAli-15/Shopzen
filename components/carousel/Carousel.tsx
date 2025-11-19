import { primaryColor } from '@/constants/globalStyles';
import React, { useEffect, useRef } from 'react';
import {
    Animated,
    Dimensions,
    FlatList,
    Image,
    StyleSheet,
    View
} from 'react-native';

const { width } = Dimensions.get("window");
const ITEM_WIDTH = width - 40;

export default function Carousel({ data }: { data: any }) {
    const scrollX = useRef(new Animated.Value(0)).current;
    const flatListRef = useRef<FlatList>(null);
    const currentIndex = useRef(0);

    // AUTO SCROLL
    useEffect(() => {
        const interval = setInterval(() => {
            currentIndex.current = (currentIndex.current + 1) % data.length;

            flatListRef.current?.scrollToOffset({
                offset: currentIndex.current * ITEM_WIDTH,
                animated: true,
            });
        }, 3000);

        return () => clearInterval(interval);
    }, [data]);

    return (
        <View>
            {/* CAROUSEL */}
            <Animated.FlatList
                ref={flatListRef}
                data={data}
                keyExtractor={(_, index) => index.toString()}
                horizontal
                showsHorizontalScrollIndicator={false}
                snapToInterval={ITEM_WIDTH}
                decelerationRate="fast"
                bounces={false}
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

                    const opacity = scrollX.interpolate({
                        inputRange,
                        outputRange: [0.4, 1, 0.4],
                    });

                    return (
                        <View style={{ width: ITEM_WIDTH }}>
                            <Animated.View style={[styles.card, { opacity }]}>
                                <Image source={item} style={styles.image} />
                            </Animated.View>
                        </View>
                    );
                }}
            />

            {/* DOTS INDICATOR */}
            <View style={styles.dotsContainer}>
                {data.map((_: any, i: number) => {
                    const inputRange = [
                        (i - 1) * ITEM_WIDTH,
                        i * ITEM_WIDTH,
                        (i + 1) * ITEM_WIDTH,
                    ];

                    const scale = scrollX.interpolate({
                        inputRange,
                        outputRange: [0.8, 1.4, 0.8],
                        extrapolate: "clamp"
                    });

                    const opacity = scrollX.interpolate({
                        inputRange,
                        outputRange: [0.3, 1, 0.3],
                        extrapolate: "clamp"
                    });

                    return (
                        <Animated.View
                            key={i}
                            style={[
                                styles.dot,
                                {
                                    opacity,
                                    transform: [{ scale }]
                                }
                            ]}
                        />
                    );
                })}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        height: 200,
        justifyContent: "center",
        alignItems: "center",
    },
    image: {
        width: "100%",
        height: "100%",
        borderRadius: 15,
        objectFit: "contain",
    },
    dotsContainer: {
        marginTop: 12,
        flexDirection: "row",
        alignSelf: "center",
        gap: 8,
    },
    dot: {
        width: 8,
        height: 8,
        borderRadius: 4,
        backgroundColor: primaryColor,
        marginTop:-25
    },
});
