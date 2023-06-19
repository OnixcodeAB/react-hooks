import React, { useState, useEffect } from "react";

const Characters = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
    .then(reponse => reponse.json())
    .then(data => setCharacters(data.results))
  }, []);

  return (
    <div className="characters">
      <h2>name</h2>
    </div>
  );
};

export default Characters;
