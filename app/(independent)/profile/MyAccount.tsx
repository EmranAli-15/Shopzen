import Collapsible from "@/components/collapsible/Collapsible";
import Container from "@/components/Container";
import Header from "@/components/header/Header";
import { globalStyles } from "@/constants/globalStyles";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

export default function MyAccount() {
  return (
    <Container>
      <Header title="My Account"></Header>

      <View style={{ flexDirection: "column", rowGap: 40 }}>

        <View>
          <Collapsible title="How do I change my email or phone number?">
            <Text style={[globalStyles.p as any, { textAlign: "left" }]}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
          </Collapsible>

          <Collapsible title="How do I track my order?">
            <Text style={[globalStyles.p as any, { textAlign: "left" }]}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
          </Collapsible>

          <Collapsible title="How do I track my order?">
            <Text style={[globalStyles.p as any, { textAlign: "left" }]}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
          </Collapsible>
        </View>

        <View style={{ flexDirection: "column", rowGap: 16 }}>
          <Text style={{ fontFamily: "PoppinsMedium", fontSize: 20, color: "#333333", textAlign:"center"  }}>Didn't find what you're looking for?</Text>
          <TouchableOpacity
            style={globalStyles.btnFilled}
          >
            <Text style={[globalStyles.txt as any, { color: "white" }]}>Chat with support</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={globalStyles.btn}
          >
            <Text style={[globalStyles.txt as any, { color: "black" }]}>Email Us</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Container>
  );
}
