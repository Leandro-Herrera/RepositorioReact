import firebase from "firebase";
import 'firebase/firestore';



const firebaseConfig = {
    apiKey: "AIzaSyDw5ZUvZpaiPvHo6PKCykhi938B4CSOGv0",
    authDomain: "ecomerce-accesorios-vehiculos.firebaseapp.com",
    projectId: "ecomerce-accesorios-vehiculos",
    storageBucket: "ecomerce-accesorios-vehiculos.appspot.com",
    messagingSenderId: "419814538162",
    appId: "1:419814538162:web:09b4cb1470d54a930082ab"
  };

  const app = firebase.initializeApp(firebaseConfig)

  export function getFirestore(){
      return firebase.firestore(app)
  }