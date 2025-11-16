import Container from '@/components/Container'
import { globalStyles, primaryBg, primaryColor } from '@/constants/globalStyles'
import EvilIcons from '@expo/vector-icons/EvilIcons'
import Feather from '@expo/vector-icons/Feather'
import React, { useState } from 'react'
import { Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
const searchButton = require("@/assets/images/home/searchButton.png");
const shopZen = require("@/assets/images/home/ShopZen.png");

export default function index() {
  const [search, setSearch] = useState("");
  const [searchFocus, setSearchFocus] = useState(false)
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
          <Text style={{ color: "white" }}>Delivering to Dhaka, Bangladesh</Text>
        </View>
        <View style={{ padding: 10 }}>
          <Text style={{ color: primaryColor, fontSize: 30, fontWeight: 900 }}>Shop<Text style={{ color: "#1A1F71" }}>Zen</Text></Text>
          <Text>Your Multi-Vendor Shopping Paradise</Text>
        </View>
      </SafeAreaView>



      <Container>
        <View style={{ marginTop: -60 }}>
          <ScrollView horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ gap: 8 }}
          >
            <TouchableOpacity>
              <View style={styles.navList}>
                <Text style={styles.navListText}>All Notes</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.navList}>
                <Text style={styles.navListText}>Today</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.navList}>
                <Text style={styles.navListText}>Exams</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.navList}>
                <Text style={styles.navListText}>Tasks</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.navList}>
                <Text style={styles.navListText}>Projects</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.navList}>
                <Text style={styles.navListText}>Ideas</Text>
              </View>
            </TouchableOpacity>
          </ScrollView>
        </View>
      </Container>
    </View>
  )
};


const styles = StyleSheet.create({
  navList: {
    height: 80,
    width: 80,
    paddingHorizontal: 8,
    borderRadius: "50%",
    backgroundColor: primaryBg
  },
  navListText: {
    fontSize: 18
  }
});