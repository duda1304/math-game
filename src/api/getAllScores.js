import { collection, getDocs } from 'firebase/firestore/lite';

async function getAllScores(db) {
    const citySnapshot = await getDocs(collection(db, 'data'));
    const cityList = citySnapshot.docs.map(doc => doc.data());
    console.log(cityList);
}

export default getAllScores;