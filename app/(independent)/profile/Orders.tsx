import BackButton from "@/components/BackButton";
import Collapsible from "@/components/collapsible/Collapsible";
import Container from "@/components/Container";
import { globalStyles } from "@/constants/globalStyles";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

export default function Orders() {
  return (
    <Container>
      <View style={{ flexDirection: "column", rowGap: 40 }}>
        <View>
          <BackButton></BackButton>
          <Text style={{ position: "absolute", flex: 1, alignSelf: "center", paddingVertical: 10, fontFamily: "Poppins", fontWeight: 700, fontSize: 24, color: "#1A1F71" }}>Order & Delivery</Text>
        </View>

        <View>
          <Collapsible title="How do I change my email or phone number?">
            <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
          </Collapsible>

          <Collapsible title="How do I track my order?">
            <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
          </Collapsible>

          <Collapsible title="How do I track my order?">
            <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
          </Collapsible>
        </View>

        <View style={{ flexDirection: "column", rowGap: 16 }}>
          <Text style={globalStyles.h3 as any}>Didn't find what you're looking for?</Text>
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
