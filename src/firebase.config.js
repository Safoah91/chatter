// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBVIXYB37F-P2cAQ4jbaLS-ZQAcSW7i5_M",
  authDomain: "catter-a2276.firebaseapp.com",
  projectId: "catter-a2276",
  storageBucket: "catter-a2276.appspot.com",
  messagingSenderId: "438111096047",
  appId: "1:438111096047:web:4fd0d8592955b2a988df1a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const storage = getStorage(app);
export default storage;
