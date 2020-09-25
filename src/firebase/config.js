import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyD0ETqjVTZtCR7PqJsCiMZCXhkmdcp6FsM",
    authDomain: "instaport-8088e.firebaseapp.com",
    databaseURL: "https://instaport-8088e.firebaseio.com",
    projectId: "instaport-8088e",
    storageBucket: "instaport-8088e.appspot.com",
    messagingSenderId: "146739728418",
    appId: "1:146739728418:web:206f38662b21cbcedaba7b"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();

export { projectStorage, projectFirestore };
