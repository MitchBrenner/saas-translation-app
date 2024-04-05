import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getFunctions } from "firebase/functions";


const firebaseConfig = {
    apiKey: "AIzaSyAm1mDXCLql1KCUFB5fMajrIE7Ojy8szDc",
    authDomain: "saas-translator-app-3dee6.firebaseapp.com",
    projectId: "saas-translator-app-3dee6",
    storageBucket: "saas-translator-app-3dee6.appspot.com",
    messagingSenderId: "13790698362",
    appId: "1:13790698362:web:9b29cfbc182f922f6094c3"
};

// Initialize Firebase
// this prevents us from having duplicate apps
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const functions = getFunctions(app);

export { auth, db, functions };