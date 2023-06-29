import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDx3eInlDGUV1vZel3LRj1UvhPGEQy-9VA",
  authDomain: "chatter-sapp.firebaseapp.com",
  projectId: "chatter-sapp",
  storageBucket: "chatter-sapp.appspot.com",
  messagingSenderId: "47800540363",
  appId: "1:47800540363:web:45f1f46aa74396eebf8f4e",
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const storage = getStorage(app);
export { auth, provider, storage };
