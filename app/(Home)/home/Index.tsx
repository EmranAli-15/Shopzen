import Carousel from '@/components/carousel/Carousel'
import Container from '@/components/Container'
import { globalStyles, primaryBg, primaryColor } from '@/constants/globalStyles'
import axiosInstance from '@/utils/axiosInstance'
import EvilIcons from '@expo/vector-icons/EvilIcons'
import Feather from '@expo/vector-icons/Feather'
import React, { useEffect, useState } from 'react'
import { Dimensions, Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Products from './Products'
import CategoriesSkleton from './ui/CategoriesSkleton'
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



  return (
    <SafeAreaView>
      <ScrollView>
        <View>
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
            <View style={{ backgroundColor: "#00CDA5", padding: 10, flexDirection: "row", alignItems: "center" }}>
              <EvilIcons name="location" size={20} color="white" />
              <Text style={[globalStyles.small as any, { color: "white" }]}>Delivering to Dhaka, Bangladesh</Text>
            </View>
            <View style={{ paddingHorizontal: 10 }}>
              <Text style={{ color: primaryColor, fontSize: 30, fontFamily: "PoppinsBold" }}>Shop<Text style={{ color: "#1A1F71" }}>Zen</Text></Text>
              <Text style={[globalStyles.p as any, { textAlign: "left", marginTop:-8 }]}>Your Multi-Vendor Shopping Paradise</Text>
            </View>
          </View>
          <Container>
            {/* Categories */}
            <View>

              {
                categoriesLoading ?
                  <CategoriesSkleton></CategoriesSkleton> :
                  <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={{ columnGap: 8 }}
                  >
                    {categories.map((item) => {
                      return (
                        (
                          <TouchableOpacity key={item.id}>
                            <View style={styles.navList}>
                              <Image style={{ height: "100%", width: "100%", objectFit: "contain" }} source={{ uri: item.image }}></Image>
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
              <Products></Products>
            </View>
          </Container>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
};


const styles = StyleSheet.create({
  navList: {
    height: 70,
    width: 70,
    padding: 5,
    borderRadius: "50%",
    backgroundColor: primaryBg,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden"
  },
  imgContainer: {
    width: "18%",
    height: 100
  },
  infoImg: {
    width: "100%",
    height: ((windowWidth * 17) / 100)
  }
});