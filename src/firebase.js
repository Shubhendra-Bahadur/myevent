// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyArbI5ud2xYwZfaYjOVWMKo8g4brnDXCfA",
  authDomain: "myevent-b9c63.firebaseapp.com",
  databaseURL: "https://myevent-b9c63.firebaseio.com",
  projectId: "myevent-b9c63",
  storageBucket: "myevent-b9c63.appspot.com",
  messagingSenderId: "22935607223",
  appId: "1:22935607223:web:dbbfbb37565cc4643aba32",
  measurementId: "G-49LFE6EHQ1",
});

const db = firebaseApp.firestore();

export default db;
