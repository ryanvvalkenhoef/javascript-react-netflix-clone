import Firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import { seedDatabase } from '../seed';

// we need to somehow seed the database

// we need a config here

const config = {
    apiKey: "AIzaSyDHoariBvxFvkkSrJrD78Fru7_uA_4LW-Q",
    authDomain: "netflix-98a9c.firebaseapp.com",
    projectId: "netflix-98a9c",
    storageBucket: "netflix-98a9c.appspot.com",
    messagingSenderId: "992996621120",
    appId: "1:992996621120:web:a4323e5a27d919283b98a5" 
};

const firebase = Firebase.initializeApp(config);

// seedDatabase(firebase);

export { firebase };