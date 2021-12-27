import firebase from "firebase";
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'
const firebaseConfig = {
    apiKey: "AIzaSyDeqeM3DcZAyKkCBq8v8dVmGtBDu6rC0uI",
    authDomain: "olx-clone-d52fb.firebaseapp.com",
    projectId: "olx-clone-d52fb",
    storageBucket: "olx-clone-d52fb.appspot.com",
    messagingSenderId: "105489776891",
    appId: "1:105489776891:web:910aad96f60541721bf05e",
    measurementId: "G-4GGMP0WV0W"
  };

export default firebase.initializeApp(firebaseConfig)