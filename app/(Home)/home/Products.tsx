import { Link } from 'expo-router';
import React from 'react';
import { FlatList, View } from 'react-native';
import ProductCard from './ui/ProductCard';


export default function Products({ products }: { products: any }) {

    return (
        <View style={{ marginTop: 20 }}>
            <FlatList
                scrollEnabled={false}
                data={products}
                numColumns={2}
                columnWrapperStyle={{ justifyContent: "space-between" }}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <Link
                        href={{
                            pathname: `/(Home)/home/product/[id]`,
                            params: { id: item.id },
                        }}
                        style={{ width: "48%", marginBottom: 8 }}>
                        <ProductCard
                            image={item.image1}
                            title={item.name}
                            price={item.original_price}
                            rating={item.rating_avg}
                            vendor={item.vendor_name}
                        />
                    </Link>
                )}
            />
        </View>
    )
}