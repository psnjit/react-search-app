import React, { useState } from "react";
import "./styles.css";
const listOfFruits = [
  "Apples",
  "Mango",
  "Banana",
  "Pineapple",
  "Appricot",
  "Guava",
  "Strawberry",
  "Oranges",
  "Grapes",
  "Pomogranate",
  "Kiwi",
  "Watermelon",
  "Woodapple",
  "Custardapple",
  "Durian",
  "Blueberry",
  "Avocado",
  "Gooseberry",
  "Blueberry",
  "Blackberry"
];

export default function App() {
  const [fruits, setFruits] = useState(listOfFruits);
  const [searchInput, setSearchInput] = useState("");
  const [textInput, setTextInput] = useState("");
  function searchFunction(value) {
    const result = listOfFruits.filter((items) => {
      return items.toLowerCase().includes(value.toLowerCase());
    });
    setFruits(result);
  }
  return (
    <>
      <input
        type="text"
        placeholder="Enter Search Terms"
        onChange={(e) => {
          setSearchInput(e.target.value);
        }}
      ></input>
      <button
        onClick={() => {
          searchFunction(searchInput);
        }}
      >
        Search
      </button>
      <button
        onClick={() => {
          setFruits(listOfFruits);
        }}
      >
        Reset
      </button>
      <input
        type="text"
        placeholder="Enter Fruit Name"
        onChange={(e) => {
          setTextInput(e.target.value);
        }}
        value={textInput}
      ></input>
      <button
        onClick={() => {
          setFruits([...fruits, textInput]);
          setTextInput("");
        }}
      >
        Add
      </button>
      <ul>
        {fruits.map((item) => {
          return <li>{item}</li>;
        })}
      </ul>
    </>
  );
}
