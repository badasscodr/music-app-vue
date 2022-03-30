import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyCDMlgynfzrlG4EmG3dw0HNNq3K4uHYu9U',
  authDomain: 'soundscape-9e59f.firebaseapp.com',
  databaseURL:
    'https://soundscape-9e59f-default-rtdb.asia-southeast1.firebasedatabase.app',
  projectId: 'soundscape-9e59f',
  storageBucket: 'soundscape-9e59f.appspot.com',
  messagingSenderId: '362681373195',
  appId: '1:362681373195:web:f9431ffe85a0ac5535ed0e',
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();

firebase.firestore()
  .enablePersistence()
  .catch((err) => {
    if (err.code === 'failed-precondition') {
      // Multiple tabs open, persistence can only be enabled
      // in one tab at a a time.
      // ...
    } else if (err.code === 'unimplemented') {
      // The current browser does not support all of the
      // features required to enable persistence
      // ...
    }
  });
// Subsequent queries will use persistence, if it was enabled successfully

const usersCollection = db.collection('users');
const songsCollection = db.collection('songs');
const commentsCollection = db.collection('comments');

export {
  auth,
  db,
  usersCollection,
  songsCollection,
  commentsCollection,
  storage,
};
