import firebase from 'firebase';
import 'firebase/database';
import 'firebase/firestore';


var firebaseConfig = {
    apiKey: "AIzaSyCnWIdPgjkfME6CJCYlxEF8lj-sGnJusuo",
    authDomain: "react-8302c.firebaseapp.com",
    projectId: "react-8302c",
    storageBucket: "react-8302c.appspot.com",
    messagingSenderId: "252798428779",
    appId: "1:252798428779:web:b848830baa88fe8cd6732e",
    measurementId: "G-HZPNP8X31N"
  };

  const fire = firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  export default fire;