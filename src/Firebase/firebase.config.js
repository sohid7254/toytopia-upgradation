// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD6UH0X0RXp0F3053wVGMp0ToIpedZdeYk",
    authDomain: "toytopia-94e77.firebaseapp.com",
    projectId: "toytopia-94e77",
    storageBucket: "toytopia-94e77.firebasestorage.app",
    messagingSenderId: "412821255467",
    appId: "1:412821255467:web:f05929cdf5e9a85042c16e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export default app;
