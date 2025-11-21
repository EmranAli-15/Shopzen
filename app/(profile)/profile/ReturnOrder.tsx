import Collapsible from "@/components/collapsible/Collapsible";
import Container from "@/components/Container";
import Header from "@/components/header/Header";
import { globalStyles } from "@/constants/globalStyles";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

export default function ReturnOrder() {
  return (
    <Container>
      <Header title="Return Order"></Header>

      <View style={{ flexDirection: "column", rowGap: 40 }}>

        <View>
          <Collapsible title="How do I return an item?">
            <Text style={[globalStyles.p as any, { textAlign: "left" }]}>
              Go to my Orders then select item then request return.
            </Text>
          </Collapsible>

          <Collapsible title="What are the return conditions?">
            <Text style={[globalStyles.p as any, { textAlign: "left" }]}>
              Products must be unused, with tags, and returned within 7 days.
            </Text>
          </Collapsible>

          <Collapsible title="Can I cancle my order after purchase?">
            <Text style={[globalStyles.p as any, { textAlign: "left" }]}>
              Orders can be canceled before they are shipped. After shipping, contact cupport for help.
            </Text>
          </Collapsible>

          <Collapsible title="When will I receive my refunt after return?">
            <Text style={[globalStyles.p as any, { textAlign: "left" }]}>
              Once the vendor confirms receipt, refunds process within 3-5 business days
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
