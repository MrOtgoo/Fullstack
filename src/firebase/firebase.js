import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore, collection} from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyDfspPOtQMZdXTYiChprImrM47yd4yyjgg",
  authDomain: "from-validation-fa5d8.firebaseapp.com",
  projectId: "from-validation-fa5d8",
  storageBucket: "from-validation-fa5d8.appspot.com",
  messagingSenderId: "962802464052",
  appId: "1:962802464052:web:5e6ccfe3f59303f3006161",
  
};


const app = initializeApp(firebaseConfig);

const Auth = getAuth(app);

const Database = getFirestore(app);




const userCollaction = collection(Database, 'Users')
const blogsCollection = collection(Database, 'blogs')
const CommentsCollection = collection(Database,'comments')
const ContactCollection = collection(Database, 'Contact')

export {Auth, userCollaction ,blogsCollection, CommentsCollection,ContactCollection}