
import firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyA0QYn6DGQEskvSxnJMXFUgtCgHcl8vujQ",
    authDomain: "zuckbook-53c13.firebaseapp.com",
    projectId: "zuckbook-53c13",
    storageBucket: "zuckbook-53c13.appspot.com",
    messagingSenderId: "488109931673",
    appId: "1:488109931673:web:3b5572cf6ea6cb161e4c08"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)

  const db = firebaseApp.firestore();

  const auth = firebase.auth();

  const provider = new firebase.auth.GoogleAuthProvider()


  export { auth, provider}
  export default db;