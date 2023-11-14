import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore, collection} from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
 };

const app = initializeApp(firebaseConfig);

const Auth = getAuth(app);

const Database = getFirestore(app);




const userCollaction = collection(Database, 'Users')
const blogsCollection = collection(Database, 'blogs')
const CommentsCollection = collection(Database,'comments')
const ContactCollection = collection(Database, 'Contact')

export {Auth, userCollaction ,blogsCollection, CommentsCollection,ContactCollection}