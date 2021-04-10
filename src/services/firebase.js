import firebase from 'firebase';


const firebaseconfig = {
  apiKey: "AIzaSyAYSzwC6Mq7pXjYDLliiC7YeeLiE5bT9VM",
  authDomain: "cloud-school-bff04.firebaseapp.com",
  projectId: "cloud-school-bff04",
  storageBucket: "cloud-school-bff04.appspot.com",
  messagingSenderId: "124935021803",
  appId: "1:124935021803:web:6cd40b109b202ad8c78aae"
}

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseconfig);
  }

export const db = firebase.firestore();
export const auth= firebase.auth();

export default firebase;


