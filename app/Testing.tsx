// GoogleSignInButton.js
import Container from "@/components/Container";
import { auth } from "@/utils/firebase";
import * as Google from "expo-auth-session/providers/google";
import * as WebBrowser from "expo-web-browser";
import { GoogleAuthProvider, signInWithCredential } from "firebase/auth";
import React from "react";
import { Button } from "react-native";

WebBrowser.maybeCompleteAuthSession();

export default function GoogleSignInButton() {
  // useProxy: true helps in Expo Go
  const [request, response, promptAsync] = Google.useAuthRequest({
    // expoClientId: "<EXPO_CLIENT_ID>",          // optional
    // iosClientId: "<IOS_CLIENT_ID>",            // optional
    androidClientId: "790648621648-c1nrpprrkhpr88s3hqpqa53e3k2fi514.apps.googleusercontent.com",    // optional
    webClientId: "790648621648-qbrnv33qkprlto0vb6mnli7ln5vj15vp.apps.googleusercontent.com",            // usually required to get idToken
    scopes: ["profile", "email"],
  });

  React.useEffect(() => {
    const handle = async () => {
      if (response?.type === "success") {
        const { id_token, access_token } = response.params;
        // Create a Firebase credential with the ID token
        const credential = GoogleAuthProvider.credential(id_token);
        // Sign in with credential from the Google user.
        await signInWithCredential(auth, credential);
      }
    };
    handle();
  }, [response]);

  return (
    <Container>
      <Button
        disabled={!request}
        title="Sign in with Google"
        onPress={() => promptAsync()}
      />
    </Container>
  );
}
