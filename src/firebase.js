import firebase from 'firebase'
import  'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyDVVS_rebu8XgWu2fdH6CxuRgVWU_cNMNw",
    authDomain: "theeducationalacademy-17afa.firebaseapp.com",
    databaseURL: "https://theeducationalacademy-17afa.firebaseio.com",
    projectId: "theeducationalacademy-17afa",
    storageBucket: "",
    messagingSenderId: "719505354269",
    appId: "1:719505354269:web:69aac5bf1e28bf32"
  };

  firebase.initializeApp(firebaseConfig)
  export const db =firebase.firestore();
  export const auth=firebase.auth();