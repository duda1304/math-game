import { setDoc, doc } from 'firebase/firestore/lite';

async function addUserScore(db) {
    const res = await setDoc(doc(db, "data", "w"), {
      "addition-easy": 5,
      "addition-hards": 6
    });
   console.log(res);
}

export default addUserScore;