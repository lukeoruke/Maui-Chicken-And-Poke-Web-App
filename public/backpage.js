// Initialize Cloud Firestore through Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.1.1/firebase-firestore.js";

const firebaseApp = initializeApp({
    apiKey: "AIzaSyC095wM6mpg04Sm8I_whR8h-3QXSe22-b4",

    authDomain: "maui-chicken-and-poke.firebaseapp.com",
  
    projectId: "maui-chicken-and-poke",
  
    storageBucket: "maui-chicken-and-poke.appspot.com",
  
    messagingSenderId: "97093814083",
  
    appId: "1:97093814083:web:465d9be7fd04c4b7fed1f6",
  
    measurementId: "G-81FFTX4SBY"
});
// Follow this pattern to import other Firebase services
// import { } from 'firebase/<service>';

// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

// const firebaseConfig = {
//     apiKey: "AIzaSyC095wM6mpg04Sm8I_whR8h-3QXSe22-b4",

//     authDomain: "maui-chicken-and-poke.firebaseapp.com",
  
//     projectId: "maui-chicken-and-poke",
  
//     storageBucket: "maui-chicken-and-poke.appspot.com",
  
//     messagingSenderId: "97093814083",
  
//     appId: "1:97093814083:web:465d9be7fd04c4b7fed1f6",
  
//     measurementId: "G-81FFTX4SBY"
  
// };

//These are required instances when using database
const app = initializeApp(firebaseConfig);
const db = getFirestore();

//Here's an example of getting data from database
async function getdata(db) {
    const stuff = collection(db, 'test');
    const stuffSnapshot = await getDocs(citiesCol);
    const stuffList = citySnapshot.docs.map(doc => doc.data());
    return stuffList;
  }