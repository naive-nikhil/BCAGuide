import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB1ItbuqVw-BsSScsQnxlUVOe6Avd7v5rk",
  authDomain: "bcaguide-1131f.firebaseapp.com",
  projectId: "bcaguide-1131f",
  storageBucket: "bcaguide-1131f.firebasestorage.app",
  messagingSenderId: "306510601586",
  appId: "1:306510601586:web:19b0b9679c270c219d51eb",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
