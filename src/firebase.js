// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";


const firebaseConfig = {
    apiKey: "AIzaSyBvY3LU5Asy7G9Ods949G91IOU4nbxbSvU",
    authDomain: "challenge-21021.firebaseapp.com",
    projectId: "challenge-21021",
    storageBucket: "challenge-21021.appspot.com",
    messagingSenderId: "444536179068",
    appId: "1:444536179068:web:0f5e6b98a9ac862d017cf9",
    measurementId: "G-KXJR8DT3P1"
  };

  //Inicializar la base con la config Inicial de Firebase
  const firebaseApp = firebase.initializeApp(firebaseConfig);

  //Declaro las constantes asociadas a la base
  const db=firebaseApp.firestore();
  const auth=firebase.auth();

  export { db, auth };
