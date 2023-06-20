import {
  CButton,
  CCard,
  CCardBody,
  CCardImage,
  CCardText,
  CCardTitle,
} from "@coreui/react";
import React, { useState, useEffect, useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const Characters = ({ darkMode }) => {
  const [characters, setCharacters] = useState([]);
  const { darkmode } = useContext(ThemeContext);

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
      .then((reponse) => reponse.json())
      .then((data) => setCharacters(data.results));
  }, []);

  return (
    <div className="characters">
      {characters.map((character) => (
        <CCard
          color={`${darkmode ? "dark" : "light"}`}
          key={character.id}
          style={{ width: "18rem" }}
        >
          <CCardImage orientation="top" src={character.image} />
          <CCardBody>
            <CCardTitle>{character.name}</CCardTitle>
            <CCardText>{character.status}</CCardText>
            <CCardText>{character.species}</CCardText>
            <CCardText>{character.gender}</CCardText>
            <CButton href="#">Go somewhere</CButton>
          </CCardBody>
        </CCard>
      ))}
    </div>
  );
};

export default Characters;
