import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

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

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const storage = getStorage(app);
export { auth, provider };
export default storage;
