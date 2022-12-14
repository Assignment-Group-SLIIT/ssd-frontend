import firebase from 'firebase/compat/app';
import { initializeApp } from 'firebase/app';
import { getStorage } from "firebase/storage";
import "firebase/storage";

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDj6eGjZTnV8LdkIOWC88ZzsFHOe22tiv0",
    authDomain: "fir-storage-private.firebaseapp.com",
    projectId: "fir-storage-private",
    storageBucket: "fir-storage-private.appspot.com",
    messagingSenderId: "641762296362",
    appId: "1:641762296362:web:e509c575dc373665037953"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

const storage = getStorage(app);

export { storage, firebase as default };
