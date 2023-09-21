import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

/*________________________________________________________________________________*/

const firebaseConfig = {

  apiKey: "AIzaSyDupJDFACaRvtwHaFAgvluyUvRcMz4gBY8",
  authDomain: "linkedin-clone-75581.firebaseapp.com",
  projectId: "linkedin-clone-75581",
  storageBucket: "linkedin-clone-75581.appspot.com",
  messagingSenderId: "777221410313",
  appId: "1:777221410313:web:60e2e7c2648d9b97b132d8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export const provider = new GoogleAuthProvider();

/*________________________________________________________________________________*/
