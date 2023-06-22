import {
  CButton,
  CCard,
  CCardBody,
  CCardImage,
  CCardText,
  CCardTitle,
  CFormInput,
} from "@coreui/react";
import React, {
  useState,
  useEffect,
  useContext,
  useReducer,
  useMemo,
  useRef,
} from "react";
import { ThemeContext } from "../context/ThemeContext";
import "../styles/character.css";

const initialState = {
  favorites: [],
  search: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_FAVORITE":
      return {
        ...state,
        favorites: [...state.favorites, action.payload],
      };
    case "SEARCH":
      return {
        ...state,
        search: [action.payload],
      };
    default:
      return state;
  }
};

const Characters = () => {
  //State
  const [characters, setCharacters] = useState([]);
  const { darkmode } = useContext(ThemeContext);
  const [state, dispatch] = useReducer(reducer, initialState);
  const [search, setSearch] = useState("");
  const searchInput = useRef(null);

  // Variable
  /*  const filterSearch = characters.filter((f) =>
    f.name.toLowerCase().includes(search.toLowerCase())
  ); */

  //using useMemo
  const filterSearch = useMemo(
    () =>
      characters.filter((f) =>
        f.name.toLowerCase().includes(search.toLowerCase())
      ),
    [characters, search]
  );

  //Functions
  const onClick = (favorite) => {
    dispatch({
      type: "ADD_TO_FAVORITE",
      payload: favorite,
    });
  };

  const onChange = (e) => {
    e.preventDefault();
    setSearch(searchInput.current.value);

    dispatch({
      type: "SEARCH",
      payload: filterSearch,
    });
    console.log(state);
  };

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
      .then((reponse) => reponse.json())
      .then((data) => setCharacters(data.results));
  }, []);

  return (
    <div className="characters">
      {/* Search */}
      <CFormInput
        style={{
          textAlign: "center",
          width: "320px",
        }}
        placeholder="Search your favorite character 🔎"
        onChange={(e) => onChange(e)}
        value={search}
        ref={searchInput}
      />
      <div className="favorite">
        {/* Favorite */}
        {state.favorites.map((favorite) => (
          <CCard key={favorite.id} style={{ width: "18rem" }}>
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
        {filterSearch.map((character) => (
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
