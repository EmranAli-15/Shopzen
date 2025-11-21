import Collapsible from "@/components/collapsible/Collapsible";
import Container from "@/components/Container";
import Header from "@/components/header/Header";
import { globalStyles } from "@/constants/globalStyles";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

export default function Orders() {
  return (
    <Container>
      <Header title="Order & Delivery"></Header>

      <View style={{ flexDirection: "column", rowGap: 40 }}>

        <View>
          <Collapsible title="How do I track my order?">
            <View>
              <Text style={[globalStyles.p as any, { textAlign: "left" }]}>
              You can track your order in My Orders then select your order and then Track Delivery.
              </Text>
            </View>
          </Collapsible>

          <Collapsible title="When will my package arrive?">
            <Text style={[globalStyles.p as any, { textAlign: "left" }]}>
              Most orders arrive within 3-5 business daus. You'll receive updates via push notification.
            </Text>
          </Collapsible>

          <Collapsible title="Can I change my delivery address after ordering?">
            <Text style={[globalStyles.p as any, { textAlign: "left" }]}>
              You can edit your address before your order is shipped. Go to my orders then edit delivery info.
            </Text>
          </Collapsible>

          <Collapsible title="My package hoas't arrived yet. What should I do?">
            <Text style={[globalStyles.p as any, { textAlign: "left" }]}>
              Contact our support or the vendor derectly for assistance.
            </Text>
          </Collapsible>
        </View>

        <View style={{ flexDirection: "column", rowGap: 16 }}>
          <Text  style={[globalStyles.h1, { textAlign: "center" }]}>Didn't find what you're looking for?</Text>
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
