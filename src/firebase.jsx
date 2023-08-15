import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

import { getFirestore} from 'firebase/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyDc2APquQXZh_9091KGT0Qu8BQmVj3xFQ4",
    authDomain: "netflix-clone-766f8.firebaseapp.com",
    projectId: "netflix-clone-766f8",
    storageBucket: "netflix-clone-766f8.appspot.com",
    messagingSenderId: "810144182802",
    appId: "1:810144182802:web:d0a911973301930b635ecb",
    measurementId: "G-BJ5YFX3VG4"
  };

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth  = getAuth(app);

  
  export { db , auth };

