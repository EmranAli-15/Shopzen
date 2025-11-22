import Carousel from '@/components/carousel/Carousel';
import { globalStyles, primaryBg, primaryColor } from '@/constants/globalStyles';
import axiosInstance from '@/utils/axiosInstance';
import EvilIcons from '@expo/vector-icons/EvilIcons';
import Feather from '@expo/vector-icons/Feather';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { Link } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { Dimensions, Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Products from './Products';
import CategoriesSkleton from './ui/CategoriesSkleton';
import ProductCardSkleton from './ui/ProductCardSkleton';
const searchButton = require("@/assets/images/home/searchButton.png");


// ------------
const easyReturn = require("@/assets/images/home/return.png");
const truck = require("@/assets/images/home/truck.png");
const sequre = require("@/assets/images/home/sequre.png");
const support = require("@/assets/images/home/support.png");


// Window width
const { width } = Dimensions.get("window");
const windowWidth = width;

export default function index() {
  const [search, setSearch] = useState("");
  const [searchFocus, setSearchFocus] = useState(false);
  const cateImgs = [
    require('@/assets/images/home/carousel1.png'),
    require('@/assets/images/home/carousel2.png'),
    require('@/assets/images/home/carousel3.png'),
    require('@/assets/images/home/carousel1.png'),
    require('@/assets/images/home/carousel2.png'),
    require('@/assets/images/home/carousel3.png'),
  ]




  // CATEGORIS
  const [categoriesLoading, setCategoriesLoading] = useState(true);
  const [categories, setCategories] = useState<any[]>([]);
  const fetchCategories = async () => {
    try {
      const response = await axiosInstance.get('/categories');
      setCategories(response.data);
      setCategoriesLoading(false);
    } catch (err) {
      console.log(err)
    }
  };

  useEffect(() => {
    fetchCategories();
  }, [])






  // PRODUCTS
  const [loadMore, setLoadMore] = useState({ skip: 0, limit: 16 })

  const [productLoading, setProductLoading] = useState(true);
  const [allProducts, setAllProducts] = useState<any[]>([])
  const [products, setProducts] = useState<any[]>([]);
  const fetchProducts = async () => {
    try {
      const response = await axiosInstance.get('/products');
      setAllProducts(response.data);
      setProducts(response.data.slice(loadMore.skip, loadMore.limit));
      setProductLoading(false);
    } catch (err) {
      console.log(err)
    }
  };

  useEffect(() => {
    const d = [...products, ...allProducts.slice(loadMore.skip * loadMore.limit, (loadMore.skip + 1) * loadMore.limit)]
    setProducts(d)
  }, [loadMore])

  useEffect(() => {
    fetchProducts();
  }, [])






  // SEARCH PRODUCTS
  const [searchProducts, setSearchProducts] = useState<any>([])


  const filteredProducts = allProducts.filter(product =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  useEffect(() => {
    setSearchProducts(filteredProducts.slice(0, 4));
    if (search == "") setSearchProducts([])
  }, [search])





  return (
    <SafeAreaView>
      <ScrollView>
        <View style={{ position: 'relative' }}>
          {/* Search products */}
          {
            searchProducts.length > 0 &&
            <View style={styles.searchBox}>
              <ScrollView
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{ columnGap: 16 }}
              >
                {searchProducts.map((item: any) => {
                  return (
                    (
                      <Link
                        style={{ marginTop: 8 }}
                        key={item.id}
                        href={{
                          pathname: `/(Home)/home/product/[id]`,
                          params: { id: JSON.stringify(item) },
                        }}
                      >
                        <View style={{ flexDirection: "row", columnGap: 5 }}>
                          <View style={{ height: 30, width: 60, borderRadius: 8 }}>
                            <Image
                              style={{ height: 30, width: 60, objectFit: "contain" }}
                              source={{ uri: item.image1 }}
                            ></Image>
                          </View>
                          <Text style={[globalStyles.p as any, { textAlign: "left" }]}>{item.name.length > 32 ? <Text>{item.name.slice(0, 32)}..</Text> : item.name}</Text>
                        </View>
                      </Link>
                    )
                  )
                })}
              </ScrollView>
            </View>
          }



          <View>
            <View style={{ backgroundColor: primaryColor, flexDirection: "row", paddingVertical: 5, justifyContent: "space-between", alignItems: "center", paddingHorizontal: 10 }}>
              <View style={{ position: "relative", flex: 1 }}>
                <TextInput
                  style={[
                    globalStyles.inputText as any,
                    searchFocus ? globalStyles.inputFocused : globalStyles.inputBlurred,
                    { paddingLeft: 40, width: "100%", paddingVertical: 10 }
                  ]}
                  onChangeText={text => setSearch(text)}
                  value={search}
                  inputMode='email'
                  placeholder="Search for products"
                  placeholderTextColor="#666666"
                  onFocus={() => setSearchFocus(true)}
                  onBlur={() => setSearchFocus(false)}
                />
                <Feather style={{ position: "absolute", left: 15, top: 12 }} name="search" size={18} color="#666666" />
              </View>
              <View style={{ height: 45, width: 45, marginTop: -2 }}>
                <TouchableOpacity>
                  <Image
                    style={{ height: 50, width: 50 }}
                    source={searchButton}
                  ></Image>
                </TouchableOpacity>
              </View>
            </View>
            <View style={{ backgroundColor: "#00CDA5", paddingVertical: 1, paddingHorizontal: 10, flexDirection: "row", alignItems: "center" }}>
              <EvilIcons name="location" size={14} color="white" />
              <Text style={[globalStyles.small as any, { color: "white" }]}>Delivering to Dhaka, Bangladesh</Text>
            </View>
            <View style={{ paddingHorizontal: 10 }}>
              <Text style={{ color: primaryColor, fontSize: 24, fontFamily: "PoppinsBold" }}>Shop<Text style={{ color: "#1A1F71" }}>Zen</Text></Text>
              <Text style={[globalStyles.small as any, { textAlign: "left", marginTop: -10 }]}>Your Multi-Vendor Shopping Paradise</Text>
            </View>
          </View>



          <View style={{ flexDirection: "column", rowGap: 14, marginTop: 14 }}>


            {/* Categories */}
            <View style={{ marginHorizontal: 10 }}>
              {
                categoriesLoading ?
                  <CategoriesSkleton></CategoriesSkleton> :
                  <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={{ columnGap: 12 }}
                  >
                    {categories.map((item) => {
                      return (
                        (
                          <TouchableOpacity key={item.id}>
                            <View style={{ padding: 8, backgroundColor: primaryBg, borderRadius: "50%", height: 58, width: 58, alignItems: "center", justifyContent: "center" }}>
                              <View style={styles.navList}>
                                <Image style={{ objectFit: "contain", height: "100%", width: "100%" }} source={{ uri: item.image }}></Image>
                              </View>
                            </View>
                            <Text style={[globalStyles.small as any, { color: "#1A1F71" }]}>{item.name.length > 10 ? <Text>{item.name.slice(0, 10)}..</Text> : item.name}</Text>
                          </TouchableOpacity>
                        )
                      )
                    })}
                  </ScrollView>
              }
            </View>



            {/* Carousel */}
            <View style={{ marginHorizontal: 10 }}>
              <Carousel data={cateImgs} />
            </View>



            {/* Infos */}
            <View style={styles.shadowWrapper}>
              <View style={{ flexDirection: "row", justifyContent: "space-between", marginHorizontal: 10, paddingBottom: 8 }}>
                <View style={styles.imgContainer}>
                  <Image style={styles.infoImg} source={truck} />
                  <Text style={[globalStyles.small as any, { textAlign: "center", color: "#1A1F71" }]}>
                    Free Delivery
                  </Text>
                </View>

                <View style={styles.imgContainer}>
                  <Image style={styles.infoImg} source={easyReturn} />
                  <Text style={[globalStyles.small as any, { textAlign: "center", color: "#1A1F71" }]}>
                    Easy Returns
                  </Text>
                </View>

                <View style={styles.imgContainer}>
                  <Image style={styles.infoImg} source={sequre} />
                  <Text style={[globalStyles.small as any, { textAlign: "center", color: "#1A1F71" }]}>
                    Secure Payment
                  </Text>
                </View>

                <View style={styles.imgContainer}>
                  <Image style={styles.infoImg} source={support} />
                  <Text style={[globalStyles.small as any, { textAlign: "center", color: "#1A1F71" }]}>
                    24/7 Support
                  </Text>
                </View>
              </View>
            </View>



            {/* Products */}
            <View style={{ marginHorizontal: 10 }}>
              <Text style={{ color: "#1A1F71", fontSize: 18, fontFamily: "PoppinsMedium", marginBottom: -10 }}>Featured Products</Text>
              {
                productLoading ? <ProductCardSkleton></ProductCardSkleton> :
                  <Products products={products}></Products>
              }
              <View style={{ alignSelf: "center", marginVertical: 10 }}>
                <TouchableOpacity
                  onPress={() => setLoadMore({ skip: (loadMore.skip + 1), limit: 20 })}
                  style={[globalStyles.btn,
                  {
                    width: 100,
                    paddingVertical: 3,
                    borderColor: "#1A1F71",
                    borderRadius: 8
                  }]}
                >
                  <MaterialIcons style={{ alignSelf: "center" }} name="next-plan" size={24} color="#1A1F71" />
                </TouchableOpacity>
              </View>
            </View>


          </View>



        </View>
      </ScrollView>
    </SafeAreaView>
  )
};


const styles = StyleSheet.create({
  navList: {
    height: 45,
    width: 45,
    borderRadius: "50%",
    backgroundColor: primaryBg,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },

  shadowWrapper: {
    shadowColor: "#d3d3d1",
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.5,
    shadowRadius: 3,
    elevation: 4,
    backgroundColor: "#fff",
    borderRadius: 8,
  },
  imgContainer: {
    width: 54,
  },
  infoImg: {
    width: 54,
    height: 54
  },
  searchBox: {
    top: 52,
    zIndex: 999,
    position: "absolute",
    width: "100%",
    padding: 8,
    backgroundColor: "white",
    shadowColor: "#333333",
    shadowOpacity: 0.24,
    shadowOffset: { width: 0, height: 6 },
    elevation: 12
  },
});