import Skleton from '@/components/ui/Skleton';
import React from 'react';
import { Dimensions, FlatList, View } from 'react-native';

const { width } = Dimensions.get("window");

export default function ProductCardSkleton() {
    const data = [1, 2, 3, 4, 5, 6, 7, 8]
    return (
        <View>
            <FlatList
                scrollEnabled={false}
                data={data}
                numColumns={2}
                columnWrapperStyle={{ justifyContent: "space-between" }}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => (
                    <View style={{padding:4}} key={item}>
                        <Skleton height={220} width={(width * 45) / 100} radius='8%'></Skleton>
                    </View>
                )}
            />
        </View>
    )
}

{/* <View key={index}>
                        <Skleton height={180} width={(width * 48) / 100} radius='8'></Skleton>
                    </View> */}