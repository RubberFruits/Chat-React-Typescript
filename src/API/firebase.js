import firebase from "firebase/app"
import 'firebase/auth'

export const auth = firebase.initializeApp({
   apiKey: "AIzaSyD-nEq64n-xxTDHYb2if_19ley9v3OaCew",
   authDomain: "react-chat-app-e0e56.firebaseapp.com",
   projectId: "react-chat-app-e0e56",
   storageBucket: "react-chat-app-e0e56.appspot.com",
   messagingSenderId: "145652924520",
   appId: "1:145652924520:web:82da888eed85ccd57afbdd"
}).auth()