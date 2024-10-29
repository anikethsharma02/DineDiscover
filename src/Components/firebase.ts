// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { FirebaseApp } from "firebase/app";  // Import the type for FirebaseApp
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig: { 
  apiKey: string; 
  authDomain: string; 
  projectId: string; 
  storageBucket: string; 
  messagingSenderId: string; 
  appId: string; 
} = {
  apiKey: "AIzaSyCXhkDPVbo5jXsNUajF_863OZaGmy1WLbs",
  authDomain: "login-auth-bfde0.firebaseapp.com",
  projectId: "login-auth-bfde0",
  storageBucket: "login-auth-bfde0.appspot.com",
  messagingSenderId: "24653680888",
  appId: "1:24653680888:web:8c69e62f396b05a260ab0d",
};

// Initialize Firebase
export const app: FirebaseApp = initializeApp(firebaseConfig);

export const auth=getAuth(app);
export default app;