import axiosInstance from '@/utils/axiosInstance';
import { Link } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { FlatList, View } from 'react-native';
import ProductCard from './ui/ProductCard';
import ProductCardSkleton from './ui/ProductCardSkleton';


export default function Products() {


    const [loading, setLoading] = useState(true);
    const [products, setProducts] = useState<any[]>([]);
    const fetchCategories = async () => {
        try {
            const response = await axiosInstance.get('/products');
            setProducts(response.data.slice(0, 10));
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

            {
                loading ? <ProductCardSkleton></ProductCardSkleton> :

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
            }


        </View>
    )
}