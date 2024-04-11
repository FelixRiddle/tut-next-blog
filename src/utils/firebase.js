// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: process.env.FIREBASE,
    // Do I really have to set all of this on the .env?
    // 😡😡😡😡😡
    authDomain: "blog-app-e7cb2.firebaseapp.com",
    projectId: "blog-app-e7cb2",
    storageBucket: "blog-app-e7cb2.appspot.com",
    messagingSenderId: "970415444821",
    appId: "1:970415444821:web:18e2cdee436ffcf88755dc",
    measurementId: "G-XY63CCTRFF"
};

// Initialize Firebase
const FirebaseApplication = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default FirebaseApplication;
