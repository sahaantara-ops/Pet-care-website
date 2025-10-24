// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDEhpXcPIB0koALfwxDCzmL99rRrH-RcPA",
  authDomain: "pet-care-service-website.firebaseapp.com",
  projectId: "pet-care-service-website",
  storageBucket: "pet-care-service-website.firebasestorage.app",
  messagingSenderId: "677318903792",
  appId: "1:677318903792:web:76353b2665813052567f35"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;