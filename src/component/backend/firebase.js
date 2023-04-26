import {initializeApp} from "firebase/app";
import {getFirestore} from '@firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCHEDdSrfbMVJbZ92de6ZY0WCl0UpgE4l8",
    authDomain: "cosmicattireclothing.firebaseapp.com",
    projectId: "cosmicattireclothing",
    storageBucket: "cosmicattireclothing.appspot.com",
    messagingSenderId: "636104153126",
    appId: "1:636104153126:web:ae17fe55f363dda51faee7",
    measurementId: "G-4QXQZGSFY3"
  };



const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);