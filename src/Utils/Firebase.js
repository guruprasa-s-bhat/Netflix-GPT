// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB6uey3i9YCxB9LSFc4IJu4IfWxegC8WsM",
  authDomain: "netflix-gpt-reactjs.firebaseapp.com",
  projectId: "netflix-gpt-reactjs",
  storageBucket: "netflix-gpt-reactjs.appspot.com",
  messagingSenderId: "744991910259",
  appId: "1:744991910259:web:b6648e11a74498cfaa7d06",
  measurementId: "G-QXJ119QC86",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
