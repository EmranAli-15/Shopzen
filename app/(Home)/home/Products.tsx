import axiosInstance from '@/utils/axiosInstance';
import React, { useEffect, useState } from 'react';
import { FlatList, View } from 'react-native';
import ProductCard from './ui/ProductCard';

export default function Products() {


    const [loading, setLoading] = useState(true);
    const [products, setProducts] = useState<any[]>([]);
    const fetchCategories = async () => {
        try {
            const response = await axiosInstance.get('/products');
            setProducts(response.data);
            setLoading(false);
        } catch (err) {
            console.log(err)
        }
    };

    useEffect(() => {
        fetchCategories();
    }, [])


    return (
        <View style={{marginTop:20}}>
            <FlatList
                scrollEnabled={false}
                data={products}
                numColumns={2}
                columnWrapperStyle={{ justifyContent: "space-between" }}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <View style={{ width: "48%" }}>
                        <ProductCard
                            image={item.image1}
                            title={item.name}
                            price={item.original_price}
                            rating={item.rating_avg}
                        />
                    </View>
                )}
            />
        </View>
    )
}