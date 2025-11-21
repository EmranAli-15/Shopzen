import Collapsible from "@/components/collapsible/Collapsible";
import Container from "@/components/Container";
import Header from "@/components/header/Header";
import { globalStyles } from "@/constants/globalStyles";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

export default function TechnicalSupport() {
  return (
    <Container>
      <Header title="Technical Support"></Header>

      <View style={{ flexDirection: "column", rowGap: 40 }}>

        <View>
          <Collapsible title="The app is not loading or crashing.">
            <Text style={[globalStyles.p as any, { textAlign: "left" }]}>
              Try restarting the app or updating to the latest version.
            </Text>
          </Collapsible>

          <Collapsible title="I can't log in.">
            <Text style={[globalStyles.p as any, { textAlign: "left" }]}>
              Check your internet connection or reset your password.</Text>
          </Collapsible>

          <Collapsible title="I'm not receiving notifications.">
            <Text style={[globalStyles.p as any, { textAlign: "left" }]}>
              Enable notifications from device settings and within the app.
            </Text>
          </Collapsible>

          <Collapsible title="Howcan I report a bug?">
            <Text style={[globalStyles.p as any, { textAlign: "left" }]}>
              Go to settings then help center then app support and report issue.
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
