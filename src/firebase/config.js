import firebase from 'firebase';
import'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDo_Gr4VtM96roH0sih2Mm_SzaXkhnw9Hg",
    authDomain: "olx-clone-e14a0.firebaseapp.com",
    projectId: "olx-clone-e14a0",
    storageBucket: "olx-clone-e14a0.appspot.com",
    messagingSenderId: "759830926236",
    appId: "1:759830926236:web:0229a5cc7f810645f56e59",
    measurementId: "G-8H34MYQTBT"
  };


 export default  firebase.initializeApp(firebaseConfig)