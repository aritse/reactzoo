import React, { useState, useEffect } from "react";
import ZooList from "./components/ZooList";
import API from "./utils/API";

function App() {
  const [animals, setAnimals] = useState([]);
  const [reset, setReset] = useState(false);

  useEffect(() => {
    API.getAllAnimals().then(res => setAnimals(res.data));
  }, [reset]);

  const showByClassName = className => {
    API.getAllByClass(className).then(res => setAnimals(res.data));
  };

  const resetList = () => setReset(!reset);

  return (
    <div>
      <h1>Zoo App</h1>
      <button onClick={() => showByClassName("mammal")}>Mammals</button>
      <button onClick={() => showByClassName("bird")}>Birds</button>
      <button onClick={() => showByClassName("fish")}>Fishes</button>
      <button onClick={resetList}>Reset</button>
      <ZooList animals={animals} />
    </div>
  );
}

export default App;
