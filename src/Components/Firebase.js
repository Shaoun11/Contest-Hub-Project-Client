// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCUxe2b6dHTVVNFEC6i0QmaVkMYZ_otLao",
  authDomain: "assignment-10-brand-shop-f10c2.firebaseapp.com",
  projectId: "assignment-10-brand-shop-f10c2",
  storageBucket: "assignment-10-brand-shop-f10c2.appspot.com",
  messagingSenderId: "694880571062",
  appId: "1:694880571062:web:ab70b9f199f4bacc99a017"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default(auth)