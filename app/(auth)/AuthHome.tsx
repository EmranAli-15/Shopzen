import BackButton from '@/components/BackButton';
import Container from '@/components/Container';
import { globalStyles } from '@/constants/globalStyles';
import { useRouter } from 'expo-router';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Logo from './Logo';
const delivery_truck = require('@/assets/images/delivery_truck.png');

export default function AUthHome() {
  const router = useRouter();

  return (
    <Container>
      <BackButton></BackButton>


      {/* Logo and into */}
      <View>
        <Logo></Logo>
      </View>


      <View style={{ flex: 1, maxHeight: 400, flexDirection: "column", justifyContent: "space-evenly" }}>
        {/* Buttons for redirects auth pages */}
        <View style={{ flexDirection: "column", rowGap: 28 }}>
          <TouchableOpacity
            style={globalStyles.btnFilled}
            onPress={() => router.navigate('/SignIn')}
          >
            <Text style={[globalStyles.txt as any, { color: "white" }]}>Sign in to your Account</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={globalStyles.btn}
            onPress={() => router.navigate('/SignUp')}
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
          onPress={() => router.navigate('/Testing')}
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
    flex: 1,
    height: 2,
    borderRadius: 2,
    backgroundColor: "#666666"
  }
});