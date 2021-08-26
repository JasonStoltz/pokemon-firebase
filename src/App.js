import logo from "./logo.svg";
import "./App.css";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = require("./credentials.json");

const app = initializeApp(firebaseConfig);
const db = getFirestore();

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {app.name}
          {JSON.stringify(db.toJSON(), null, 2)}
        </p>
      </header>
    </div>
  );
}

export default App;
