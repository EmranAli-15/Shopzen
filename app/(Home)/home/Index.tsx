import Carousel from '@/components/carousel/Carousel'
import Container from '@/components/Container'
import { globalStyles, primaryBg, primaryColor } from '@/constants/globalStyles'
import axiosInstance from '@/utils/axiosInstance'
import EvilIcons from '@expo/vector-icons/EvilIcons'
import Feather from '@expo/vector-icons/Feather'
import React, { useEffect, useState } from 'react'
import { Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import CategoriesSkleton from './ui/CategoriesSkleton'
const searchButton = require("@/assets/images/home/searchButton.png");


// Categorie images
const groceres = require('@/assets/images/home/categories/Groceres.png');
const home = require('@/assets/images/home/categories/Home.png');
const iphone = require('@/assets/images/home/categories/Iphone.png');
const suit = require('@/assets/images/home/categories/Suit.png');
const beauty = require('@/assets/images/home/categories/Beauty.png');

export default function index() {
  const [search, setSearch] = useState("");
  const [searchFocus, setSearchFocus] = useState(false);
  const cateImgs = [
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
    <View>
      <SafeAreaView>
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
          <Text style={{ color: primaryColor, fontSize: 30, fontWeight: 900 }}>Shop<Text style={{ color: "#1A1F71" }}>Zen</Text></Text>
          <Text style={[globalStyles.p as any, { textAlign: "left" }]}>Your Multi-Vendor Shopping Paradise</Text>
        </View>
      </SafeAreaView>


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
      </Container>
    </View>
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
  }
});