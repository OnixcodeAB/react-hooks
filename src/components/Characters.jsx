import {
  CButton,
  CCard,
  CCardBody,
  CCardImage,
  CCardText,
  CCardTitle,
} from "@coreui/react";
import React, { useState, useEffect, useContext, useReducer } from "react";
import { ThemeContext } from "../context/ThemeContext";
import "../styles/character.css";

const initialState = {
  favorites: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_FAVORITE":
      return {
        ...state,
        favorites: [...state.favorites, action.payload],
      };
    default:
      return state;
  }
};

const Characters = ({ darkMode }) => {
  const [characters, setCharacters] = useState([]);
  const { darkmode } = useContext(ThemeContext);
  const [favorites, dispatch] = useReducer(reducer, initialState);

  const onClick = (favorite) => {
    dispatch({
      type: "ADD_TO_FAVORITE",
      payload: favorite,
    });
  };

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
      .then((reponse) => reponse.json())
      .then((data) => setCharacters(data.results));
  }, []);

  return (
    <div className="characters">
      <div className="favorite">
        {favorites.favorites.map((favorite) => (
          <CCard
            color={`${darkmode ? "dark" : "light"}`}
            key={favorite.id}
            style={{ width: "18rem" }}
          >
            <CCardImage orientation="top" src={favorite.image} />
            <CCardBody>
              <CCardTitle>{favorite.name}</CCardTitle>
              <CCardText>{favorite.status}</CCardText>
              <CCardText>{favorite.species}</CCardText>
              <CCardText>{favorite.gender}</CCardText>
              <CButton type="button" onClick={() => onClick(favorite)}>
                Add Favorite
              </CButton>
            </CCardBody>
          </CCard>
        ))}
      </div>

      <div className="list">
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
              <CButton type="button" onClick={() => onClick(character)}>
                Add Favorite
              </CButton>
            </CCardBody>
          </CCard>
        ))}
      </div>
    </div>
  );
};

export default Characters;
