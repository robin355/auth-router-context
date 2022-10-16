// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCapGa1qEuP22pkL6EABSSrF_fkkgK-TdI",
    authDomain: "auth-firebase-context.firebaseapp.com",
    projectId: "auth-firebase-context",
    storageBucket: "auth-firebase-context.appspot.com",
    messagingSenderId: "426740205206",
    appId: "1:426740205206:web:b88727bc4a6e7dcd7224b7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;