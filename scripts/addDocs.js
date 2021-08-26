const { initializeApp } = require("firebase/app");
const firebaseConfig = require("../src/credentials.json");
const { getFirestore } = require("firebase/firestore");
const { collection, addDoc } = require("firebase/firestore");
const pokemons = require("../data/pokemon.json");
initializeApp(firebaseConfig);
const db = getFirestore();

const addDocs = async () => {
  debugger;
  for (const pokemon of pokemons) {
    try {
      const docRef = await addDoc(collection(db, "pokemon"), pokemon);
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }
};

addDocs().then(() => {
  process.exit(1);
});
