import firebase from "firebase";

const fireBaseConfig = {
    apiKey: "AIzaSyA9BnlX96fMf7XiUVCFRsoQzG8DGERJkeY",
    authDomain: "disneyplus-clone-a33d5.firebaseapp.com",
    projectId: "disneyplus-clone-a33d5",
    storageBucket: "disneyplus-clone-a33d5.appspot.com",
    messagingSenderId: "37918794208",
    appId: "1:37918794208:web:dbe9842dfe1dda522a4b85",
    measurementId: "G-DRVLJKWRWG"
  };


const fireBaseApp = firebase.initializeApp(fireBaseConfig);
const storage = firebase.storage();
const db = fireBaseApp.firestore();
const provider = new firebase.auth.GoogleAuthProvider();
const auth = firebase.auth();

export default db;
export {auth, provider, storage};
