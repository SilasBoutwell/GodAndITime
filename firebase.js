import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";

const firebaseConfig = {
  apiKey: "process.env.EXPO_PUBLIC_API_KEY",
  authDomain: "process.env.EXPO_PUBLIC_AUTH_DOMAIN",
  projectId: "process.env.EXPO_PUBLIC_PROJECT_ID",
  storageBucket: "process.env.EXPO_PUBLIC_PROJECT_ID.firebasestorage.app",
  messagingSenderId: "process.env.EXPO_PUBLIC_MESSAGING_SENDER_ID",
  appId: "1:process.env.EXPO_PUBLIC_MESSAGING_SENDER_ID:web:d8ceb74ce08b32f6317bcd",
  // measurementId: "G-KSFLH4G2F8"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});
