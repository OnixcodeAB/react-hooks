import { useState, useEffect } from "react";


export const useCharacters = (url) => {
  const [characters, setcharacters] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setcharacters(data.results));
  }, [url]);

  return characters;
};
