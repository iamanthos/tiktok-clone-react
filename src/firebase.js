
import firebase from "firebase";

const firebaseConfig = {
      apiKey: "AIzaSyDChXDFMH9fn7xpUGTixJJ9RN6z6z6bM3Y",
      authDomain: "tik-tok-clone-331d2.firebaseapp.com",
      databaseURL: "https://tik-tok-clone-331d2.firebaseio.com",
      projectId: "tik-tok-clone-331d2",
      storageBucket: "tik-tok-clone-331d2.appspot.com",
      messagingSenderId: "160640283918",
      appId: "1:160640283918:web:3519bdc5bd11fe6d45135f"
    };

  const firebaseApp = 
        firebase.initializeApp(firebaseConfig);

        console.log('Name ' + firebaseApp.name);
        

  const db = firebaseApp.firestore();

  export default db;