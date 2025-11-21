import Skleton from '@/components/ui/Skleton';
import React from 'react';
import { ScrollView, View } from 'react-native';

export default function CategoriesSkleton() {
    const data = [1, 2, 3, 4, 5, 6, 7, 8]
    return (
        <View>
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{ gap: 8 }}
            >
                {data.map((item, index) => {
                    return (
                        (
                            <View key={index}>
                                <Skleton height={60} width={60} radius='50%'></Skleton>
                            </View>
                        )
                    )
                })}
            </ScrollView>
        </View>
    )
}