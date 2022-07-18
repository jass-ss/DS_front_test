import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

/*const firebaseConfig = {
  apiKey: "AIzaSyBJU6MmddOEkOP560vFLwhKFVtVz1EzMEA",
  authDomain: "nwitter-1bba1.firebaseapp.com",
  databaseURL: "https://nwitter-1bba1.firebaseio.com",
  projectId: "nwitter-1bba1",
  storageBucket: "nwitter-1bba1.appspot.com",
  messagingSenderId: "556543978252",
  appId: "1:556543978252:web:5fb7e6a2a4560867e5b729",
};*/

const firebaseConfig = {
	apiKey: 'AIzaSyDNJV4F2Z5sxyijS3SHfWEaCPiByOcwSbM',
	authDomain: 'jwieeter.firebaseapp.com',
	projectId: 'jwieeter',
	storageBucket: 'jwieeter.appspot.com',
	messagingSenderId: '373704642120',
	appId: '1:373704642120:web:e5eae7dbcd94728574927d',
};

export const app = firebase.initializeApp(firebaseConfig);
export const fData = firebase.firestore();
export const fStorage = firebase.storage();
