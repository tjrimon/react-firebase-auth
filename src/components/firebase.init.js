// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA00ViS3xydKex-wKWO6ec-81dHWBoZq2s",
  authDomain: "react-auth-tjrimon.firebaseapp.com",
  projectId: "react-auth-tjrimon",
  storageBucket: "react-auth-tjrimon.appspot.com",
  messagingSenderId: "216615356816",
  appId: "1:216615356816:web:c584e08a061c6b81394b15"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;