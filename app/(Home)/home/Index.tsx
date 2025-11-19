import Carousel from '@/components/carousel/Carousel'
import Container from '@/components/Container'
import { globalStyles, primaryBg, primaryColor } from '@/constants/globalStyles'
import axiosInstance from '@/utils/axiosInstance'
import EvilIcons from '@expo/vector-icons/EvilIcons'
import Feather from '@expo/vector-icons/Feather'
import { Link } from 'expo-router'
import React, { useEffect, useState } from 'react'
import { Dimensions, Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Products from './Products'
import CategoriesSkleton from './ui/CategoriesSkleton'
import ProductCardSkleton from './ui/ProductCardSkleton'
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
  const [loadMore, setLoadMore] = useState({ skip: 0, limit: 20 })

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
                          params: { id: item.id },
                        }}
                      >
                        <Text style={[globalStyles.p as any, { textAlign: "left" }]}>{item.name.length > 32 ? <Text>{item.name.slice(0, 32)}..</Text> : item.name}</Text>
                      </Link>
                    )
                  )
                })}
              </ScrollView>
            </View>
          }



          <View>
            <View style={{ backgroundColor: primaryColor, flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
              <View style={{ position: "relative", padding: 10, flex: 1 }}>
                <TextInput
                  style={[
                    globalStyles.inputText as any,
                    searchFocus ? globalStyles.inputFocused : globalStyles.inputBlurred, { paddingLeft: 50, width: "100%" }
                  ]}
                  onChangeText={text => setSearch(text)}
                  value={search}
                  inputMode='email'
                  placeholder="Search for products"
                  placeholderTextColor="#666666"
                  onFocus={() => setSearchFocus(true)}
                  onBlur={() => setSearchFocus(false)}
                />
                <Feather style={{ position: "absolute", left: 26, top: 22 }} name="search" size={24} color="black" />
              </View>
              <TouchableOpacity>
                <Image
                  style={{ height: 55, width: 55 }}
                  source={searchButton}
                  height={55}
                  width={55}
                ></Image>
              </TouchableOpacity>
            </View>
            <View style={{ backgroundColor: "#00CDA5", paddingHorizontal: 10, paddingVertical: 5, flexDirection: "row", alignItems: "center" }}>
              <EvilIcons name="location" size={20} color="white" />
              <Text style={[globalStyles.small as any, { color: "white" }]}>Delivering to Dhaka, Bangladesh</Text>
            </View>
            <View style={{ paddingHorizontal: 10 }}>
              <Text style={{ color: primaryColor, fontSize: 30, fontFamily: "PoppinsBold" }}>Shop<Text style={{ color: "#1A1F71" }}>Zen</Text></Text>
              <Text style={[globalStyles.p as any, { textAlign: "left", marginTop: -8 }]}>Your Multi-Vendor Shopping Paradise</Text>
            </View>
          </View>
          <Container>
            {/* Categories */}
            <View style={{ marginTop: -20 }}>

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
                            <View style={{ padding: 8, backgroundColor: primaryBg, borderRadius: "50%", height: 64, width: 64, alignItems: "center", justifyContent: "center" }}>
                              <View style={styles.navList}>
                                <Image style={{ objectFit: "contain", height: "100%", width: "100%" }} source={{ uri: item.image }}></Image>
                              </View>
                            </View>
                            <Text style={[globalStyles.small as any, { color: "#1A1F71", marginTop: 8 }]}>{item.name.length > 10 ? <Text>{item.name.slice(0, 10)}..</Text> : item.name}</Text>
                          </TouchableOpacity>
                        )
                      )
                    })}
                  </ScrollView>
              }
            </View>

            {/* Carousel */}
            <View>
              <Carousel data={cateImgs} />
            </View>

            {/* Infos */}
            <View>
              <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                <View style={styles.imgContainer}>
                  <Image style={styles.infoImg} source={truck}></Image>
                  <Text style={[globalStyles.small as any, { textAlign: "center", color: "#1A1F71" }]}>Free Delivery</Text>
                </View>
                <View style={styles.imgContainer}>
                  <Image style={styles.infoImg} source={easyReturn}></Image>
                  <Text style={[globalStyles.small as any, { textAlign: "center", color: "#1A1F71" }]}>Easy Returns</Text>
                </View>
                <View style={styles.imgContainer}>
                  <Image style={styles.infoImg} source={sequre}></Image>
                  <Text style={[globalStyles.small as any, { textAlign: "center", color: "#1A1F71" }]}>Secure Payment</Text>
                </View>
                <View style={styles.imgContainer}>
                  <Image style={styles.infoImg} source={support}></Image>
                  <Text style={[globalStyles.small as any, { textAlign: "center", color: "#1A1F71" }]}>24/7 Support</Text>
                </View>
              </View>
            </View>



            {/* Products */}
            <View>
              {
                productLoading ? <ProductCardSkleton></ProductCardSkleton> :
                  <Products products={products}></Products>
              }
            </View>
          </Container>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
};


const styles = StyleSheet.create({
  navList: {
    height: 50,
    width: 50,
    borderRadius: "50%",
    backgroundColor: primaryBg,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  imgContainer: {
    width: "18%",
    height: 100
  },
  infoImg: {
    width: "100%",
    height: ((windowWidth * 17) / 100)
  },
  searchBox: {
    top: 65,
    zIndex: 999,
    position: "absolute",
    width: "100%",
    padding: 8,
    backgroundColor: "white",
    shadowColor: "#000000",
    shadowOpacity: 0.24,
    shadowOffset: { width: 0, height: 6 },
    elevation: 12
  }
});