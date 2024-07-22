// Import the functions you need from the SDKs you need
import { initializeApp, FirebaseApp } from "firebase/app";
import { getAuth, Auth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCNw0DwoeQVB1DRTaIPWBIv380Cyw0spKM",
  authDomain: "shop-c29e0.firebaseapp.com",
  projectId: "shop-c29e0",
  storageBucket: "shop-c29e0.appspot.com",
  messagingSenderId: "699315507429",
  appId: "1:699315507429:web:2c6c7eca8f0cac8f6bc40c",
};

// Initialize Firebase
const app: FirebaseApp = initializeApp(firebaseConfig);

// Get Auth service
const auth: Auth = getAuth(app);

export { auth };