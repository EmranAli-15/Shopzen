import Collapsible from "@/components/collapsible/Collapsible";
import Container from "@/components/Container";
import Header from "@/components/header/Header";
import { globalStyles } from "@/constants/globalStyles";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

export default function Payment() {
  return (
    <Container>
      <Header title="Payments"></Header>

      <View style={{ flexDirection: "column", rowGap: 40 }}>

        <View>
          <Collapsible title="What payment methods are accepted?">
            <Text style={[globalStyles.p as any, { textAlign: "left" }]}>
              ShopSen supports ..
              {'\n'}
              1. Bkash,
              {'\n'}
              2. Nagad,
              {'\n'}
              3. Rocket,
              {'\n'}
              4. Credit/Debit Cards and
              {'\n'}
              5. Cash on Delivery.
            </Text>
          </Collapsible>

          <Collapsible title="My payment failed. What should I do?">
            <Text style={[globalStyles.p as any, { textAlign: "left" }]}>
              Please ensure enable internet or try a different method. If money was debucted, it will auto-refund within 48 hours.
              </Text>
          </Collapsible>

          <Collapsible title="How can I request a refund?">
            <Text style={[globalStyles.p as any, { textAlign: "left" }]}>
              Go to..
              {'\n'}
              My Orders then Request Refund and follow the steps.
            </Text>
          </Collapsible>

          <Collapsible title="My package hasn't arrived yet. What shoud I do?">
            <Text style={[globalStyles.p as any, { textAlign: "left" }]}>
              Contact our support or the vendor directly for assistance.
            </Text>
          </Collapsible>
        </View>

        <View style={{ flexDirection: "column", rowGap: 16 }}>
          <Text style={[globalStyles.h1, { textAlign: "center" }]}>Didn't find what you're looking for?</Text>
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
