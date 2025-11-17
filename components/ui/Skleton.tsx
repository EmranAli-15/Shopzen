import React, { useEffect, useRef } from 'react';
import { Animated, Easing, View } from 'react-native';

const Skleton = ({ height, width, radius }: { height: number, width: number, radius: string }) => {
    const pulseAnim = useRef(new Animated.Value(0.2)).current;

    useEffect(() => {
        Animated.loop(
            Animated.sequence([
                Animated.timing(pulseAnim, {
                    toValue: 0.8,
                    duration: 1000,
                    easing: Easing.linear,
                    useNativeDriver: true,
                }),
                Animated.timing(pulseAnim, {
                    toValue: 0.2,
                    duration: 1000,
                    easing: Easing.linear,
                    useNativeDriver: true,
                }),
            ])
        ).start();
    }, [pulseAnim]);

    return (
        <View>
            <Animated.View style={[{ opacity: pulseAnim, width: width, height: height, borderRadius: radius, backgroundColor: "#cad5e2" }]} />
        </View>
    );
};


export default Skleton;