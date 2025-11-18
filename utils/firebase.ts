// firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyD4ewxY5SdCU--opJe4ayHhhdKjRQedWFc",
    authDomain: "com.shopzen.emran.app",
    projectId: "shopzen-58b54",
    storageBucket: "your-app.appspot.com",
    messagingSenderId: "SENDER_ID",
    appId: "1:533385933436:android:2ff506a7dc1a3cdf6b4ff9",
    // measurementId: "G-XXXX" // optional
};

// Optionally keep config in expo secrets or environment variables
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
