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
            <Text style={[globalStyles.p as any, { textAlign: "left" }]}>
              Go to Profile then Account info and edit yours details.
            </Text>
          </Collapsible>

          <Collapsible title="I forgot my password. What should I do?">
            <Text style={[globalStyles.p as any, { textAlign: "left" }]}>
              Use Forgot password on the login screen to reset it via OTP or email.
            </Text>
          </Collapsible>

          <Collapsible title="How do I delete my account?">
            <Text style={[globalStyles.p as any, { textAlign: "left" }]}>
              Contact support to request permanent.
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
