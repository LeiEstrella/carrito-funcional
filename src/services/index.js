import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBcteQ0mCnxAXinF5GrgCrkZa0WYWJGre8",
    authDomain: "seeds-28ed4.firebaseapp.com",
    projectId: "seeds-28ed4",
    storageBucket: "seeds-28ed4.appspot.com",
    messagingSenderId: "178433323634",
    appId: "1:178433323634:web:c0357968b5849cf28bc8eb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app, {
    experimentalForceLongPolling: true, // this line
    useFetchStreams: false, // and this line
})