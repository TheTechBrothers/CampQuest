import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import {getAnalytics} from "firebase/analytics";

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
    apiKey: "AIzaSyB2bHLq_5ateDHJTJyAkXuh5d5DIOYwSq0",
    authDomain: "campquest-58c8a.firebaseapp.com",
    databaseURL: "https://campquest-58c8a-default-rtdb.firebaseio.com",
    projectId: "campquest-58c8a",
    storageBucket: "campquest-58c8a.appspot.com",
    messagingSenderId: "556299306138",
    appId: "1:556299306138:web:fc08db805d7b26e7d78b23",
    measurementId: "G-DQ9CN3X2S5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);