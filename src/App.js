import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import GlobalStyle from "./components/GlobalStyle";
import Page from "./components/Page";

const Wrapper = styled.div`
  position: relative;
  height: 75%;
  width: 50%;
  background-color: #11111188;
  border-radius: 0.5rem;
  padding: 2rem;
`;

const Header = styled.h1`
  position: relative;
  margin-bottom: 1rem;
  font-size: 6rem;
  color: #111111cc;
`;

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  let [characters, setCharacters] = useState([]);
  const [page, setPage] = useState(1);

  // Fetch characters from the API in an effect hook. Remember, anytime you have a
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  useEffect(() => {
    try {
      const people = async () => {
        const response = await axios({
          method: "GET",
          url: `https://swapi.dev/api/people/`,
        });
        let data = response.data;
        console.log(data, response.body);
        console.log(data, data.results, typeof data["results"]);
        return setCharacters(data);
      };
      people();
      console.log(people());
    } catch (error) {
      console.error(error);
      // Page will be the change variable here.
    }
  }, []);

  console.log(characters);

  return (
    <div className="App">
      <GlobalStyle />
      <Header className="Header">Star Wars Characters</Header>
      <Wrapper characters={characters}>
        <Page characters={characters} />
      </Wrapper>
    </div>
  );
};

export default App;
