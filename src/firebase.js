import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBPXwIqZChOzyEb-BK7QhpGPoHJgwp0sUI",
    authDomain: "facebook-clone-19d61.firebaseapp.com",
    projectId: "facebook-clone-19d61",
    storageBucket: "facebook-clone-19d61.appspot.com",
    messagingSenderId: "998327212762",
    appId: "1:998327212762:web:4bad41dd835ef9541923e3",
    measurementId: "G-91W2P55LBV"
  };

 const firebaseApp = firebase.initializeApp(firebaseConfig);
 const db = firebaseApp.firestore();
 const auth = firebase.auth();
 const provider = new firebase.auth.GoogleAuthProvider(); 

 export { auth, provider };
 export default db; 