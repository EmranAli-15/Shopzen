import Container from '@/components/Container';
import { globalStyles } from '@/constants/globalStyles';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useRouter } from 'expo-router';
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
const delivery_truck = require('@/assets/images/delivery_truck.png');

export default function AUthHome() {
  const router = useRouter();

  return (
    <Container>
      <View>
        <View style={{ marginBottom: 40 }}>
          <TouchableOpacity
            onPress={() => router.back()}
            style={{ backgroundColor: "#FFF2EB", width: 50, height: 50, alignItems: "center", justifyContent: "center", borderRadius: "50%" }}
          >
            <Ionicons name="arrow-back" size={24} color="#FF620A" />
          </TouchableOpacity>
        </View>


        {/* Logo and into */}
        <View>
          <Text style={styles.heading}>Shop<Text style={{ color: "#0973BA" }}>Zen</Text></Text>
          <View style={{ flexDirection: "row", alignSelf: "center", alignItems: "center", columnGap: 2 }}>
            <Text style={{ color: "#3CB64B", fontWeight: "600" }}>Your Trusted Marketplace.</Text>
            <Image
              style={{ height: "auto", width: "auto" }}
              source={delivery_truck}
              width={37}
              height={26}
            />
          </View>
        </View>


        {/* Buttons for redirects auth pages */}
        <View style={{ flexDirection: "column", rowGap: 28, marginTop: 60 }}>
          <TouchableOpacity
            style={globalStyles.btnFilled}
          onPress={() => router.navigate('/SignIn')}
          >
            <Text style={[globalStyles.txt as any, { color: "white" }]}>Sign in to your Account</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={globalStyles.btn}
          // onPress={() => router.navigate('/AuthHome')}
          >
            <Text style={[globalStyles.txt as any, { color: "#FF620A" }]}>Sign Up Now</Text>
          </TouchableOpacity>
        </View>


        {/* Line devide */}
        <View style={{ flexDirection: "row", alignItems: "center", columnGap: 5, marginVertical: 60 }}>
          <View style={styles.devideLine}></View>
          <Text style={{ fontWeight: "600", fontSize: 16 }}>or</Text>
          <View style={styles.devideLine}></View>
        </View>


        {/* Continue shophing */}
        <View>
          <TouchableOpacity
            style={globalStyles.btnFilled}
          // onPress={() => router.navigate('/AuthHome')}
          >
            <Text style={[globalStyles.txt as any, { color: "white" }]}>Continue Shopping</Text>
          </TouchableOpacity>
        </View>



      </View>
    </Container>
  )
}

const styles = StyleSheet.create({
  heading: {
    fontSize: 44,
    fontWeight: "900",
    textAlign: "center",
    color: "#FF620A"
  },
  devideLine: {
    height: 2,
    width: 160,
    borderRadius: 2,
    backgroundColor: "#666666"
  }
});