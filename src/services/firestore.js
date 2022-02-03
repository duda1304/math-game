// import * as firebase from "firebase/app";
// import "firebase/firestore/lite";
// // import "firebase/auth";

// const firebaseConfig = {
//     apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
//     authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
//     projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID
// };

// firebase.initializeApp(firebaseConfig);
// const db = firebase.firestore();

// // export const authenticateAnonymously = () => {
// //     return firebase.auth().signInAnonymously();
// // };

// export const createUser = (userKey, data) => {
//     return db.collection('data')
//         .add({
//             user : userKey,
//             addition : data
//         });
// };

// export const getGroceryList = groceryListId => {
//     return db.collection('groceryLists')
//         .doc(groceryListId)
//         .get();
// };

// export const getGroceryListItems = groceryListId => {
//     return db.collection('groceryLists')
//         .doc(groceryListId)
//         .collection('items')
//         .get();
// }

// export const streamGroceryListItems = (groceryListId, observer) => {
//     return db.collection('groceryLists')
//         .doc(groceryListId)
//         .collection('items')
//         .orderBy('created')
//         .onSnapshot(observer);
// };

// export const addUserToGroceryList = (userName, groceryListId, userId) => {
//     return db.collection('groceryLists')
//         .doc(groceryListId)
//         .update({
//             users: firebase.firestore.FieldValue.arrayUnion({ 
//                 userId: userId,
//                 name: userName
//             })
//         });
// };

// export const addGroceryListItem = (item, groceryListId, userId) => {
//     return getGroceryListItems(groceryListId)
//         .then(querySnapshot => querySnapshot.docs)
//         .then(groceryListItems => groceryListItems.find(groceryListItem => groceryListItem.data().name.toLowerCase() === item.toLowerCase()))
//         .then(matchingItem => {
//             if (!matchingItem) {
//                 return db.collection('groceryLists')
//                     .doc(groceryListId)
//                     .collection('items')
//                     .add({
//                         name: item,
//                         created: firebase.firestore.FieldValue.serverTimestamp(),
//                         createdBy: userId
//                     });
//             }
//             throw new Error('duplicate-item-error');
//         });
// };



// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore, collection, getDocs, setDoc, updateDoc, doc } from 'firebase/firestore';

import userData from '../constants/userData';
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCF-NtOZBC_0Ay2EXPLMJulfVYCGtV_2lA",
  authDomain: "mathgame-662ad.firebaseapp.com",
  projectId: "mathgame-662ad",
  storageBucket: "mathgame-662ad.appspot.com",
  messagingSenderId: "224852220264",
  appId: "1:224852220264:web:fb3634126e1b89e27a5edd",
  measurementId: "G-9YSK6MTPZ0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore();

// create random string for user key
const rand = function() {
    return Math.random().toString(36).substr(2); // remove `0.`
};
const token = function() {
    return rand() + rand(); // to make it longer
};

export const getAllScores = async () => {
    const scores = collection(db, 'data');
    const scoresSnapshot = await getDocs(scores);
    const scoreList = scoresSnapshot.docs.map(doc => doc.data());
    return scoreList;
}

export const createUser = async () => {
    const userKey = token();
    let data =  {};
    userData.forEach(element => data[element] = "");

    const user = doc(db, 'data', userKey);
    await setDoc(user, data)
    .then((doc) => {
        console.log("doc save successful")
      })
      // .catchError((error) => {
      //   console.log("doc save error")
      //   console.log(error);
      // });
}

export const updateUserScore = async () => {
    const user = doc(db, 'data', localStorage.getItem("userKey"));
   
    const updatedUser = await updateDoc(user, {"addition-easy" : 5});
    return updatedUser;
}

