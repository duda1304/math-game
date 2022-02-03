import { initializeApp } from "firebase/app";

import { getFirestore, collection, getDocs, setDoc, doc } from 'firebase/firestore/lite';

// import { collection, setDoc, doc, set } from 'firebase/firestore/lite';
import userData from '../constants/userData';

const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID
};
const app = initializeApp(firebaseConfig);
const db = getFirestore();

// create random string for user key
const rand = function() {
    return Math.random().toString(36).substr(2); // remove `0.`
};
const token = function() {
    return rand() + rand(); // to make it longer
};

const createUser = () => {
    const userKey = token();
    setDoc(doc(db, "data", token), {"data" : "123"});
    
};



// async function createUser(database) {
    
//     const userKey = token();
   
//     // data to post
//     let data =  {};
//     console.log(userData)
//     userData.forEach(element => data[element] = "");
//     console.log(data);
//     // const res = await collection(database, 'data').set(doc(database, "data", userKey), data);
//     setDoc(doc(database, "data", userKey), data)
//     .then(response => {
//         console.log('document reference ID', response)
//       })
//       .catch(error => {
//         console.log(error.message)
//       })
  
//     // const cityList = res.writeResults;
//     // console.log(res);
// }

export {createUser};