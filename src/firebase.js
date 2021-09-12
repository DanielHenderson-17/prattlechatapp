import firebase from "firebase/app";
import "firebase/auth";


export const auth = firebase.initializeApp({
    apiKey: "AIzaSyAsGiRjmEzs61EfEJvK08Akpmz1ZndylOM",
    authDomain: "prattle-7df7c.firebaseapp.com",
    projectId: "prattle-7df7c",
    storageBucket: "prattle-7df7c.appspot.com",
    messagingSenderId: "388329800040",
    appId: "1:388329800040:web:926ad630eefb3a9a71d6dd"
  }).auth();