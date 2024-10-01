import React, { useEffect, useState } from "react";
import CharectersCard from "../CharectersCard/CharectersCard";
import "./CharctersList.css";
import toast, { Toaster } from "react-hot-toast";

function CharactersList() {
  let [characters, setCharacters] = useState([]);
  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    async function giveData() {
      try {
        let response = await fetch(
          "https://rickandmortyapi.com/api/character",
          {
            signal: signal,
          }
        );
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        let data = await response.json();
        setCharacters(data.results);
        toast.success("Data fetched successfully!");
      } catch (error) {
        throw new Error(error.message);
      }
    }
    giveData();

    return () => {
      controller.abort();
    };
  }, []);

  return (
    <div className="charactersList">
      <Toaster />
      {characters.map((character, index) => (
        <CharectersCard key={index} character={character} />
      ))}
    </div>
  );
}

export default CharactersList;
