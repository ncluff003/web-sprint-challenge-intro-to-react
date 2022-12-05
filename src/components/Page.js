import React from "react";
import styled from "styled-components";
import SearchBar from "./SearchBar";
import PageNavigation from "./PageNavigation";
import { Character, MainInfo, BasicInfo } from "./Character";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

const PageNumber = styled.div`
  position: relative;
  height: 100%;
  width: 4rem;
  padding: 1rem;
  font-size: 2rem;
  color: #222222aa;

  &:hover {
    cursor: pointer;
    color: #222222;
    transition: color 0.5s;
  }
`;

const Results = styled.section`
  position: relative;
  height: max-content;
  max-height: 70%;
  width: 90%;
  border: 0.3rem groove #fefefeaa;
  border-radius: 1rem;
  background-color: #fefefe44;
  padding: 1rem;
  margin: 1.5rem 0;
  overflow-y: auto;
`;

const StyledPage = styled.section`
  position: relative;
  height: 100%;
  width: 100%;
  background-color: #f0f0f0aa;
  border-radius: 0.5rem;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  padding: 2rem;
`;

const Page = function (props) {
  const { characters } = props;

  const expandCharacter = (index) => {
    const clickedCharacter = document.querySelectorAll(".character")[index];
    clickedCharacter.querySelector(".character-info").classList.toggle("expand");
  };

  return (
    <StyledPage>
      <SearchBar />
      <Results>
        {characters.map((character, index) => {
          return (
            <Character key={index} className="character">
              <BasicInfo>
                <p>{character.name}</p>
                <div>
                  <p>{character.birth_year}</p>
                  <p>
                    <FontAwesomeIcon
                      icon={faChevronDown}
                      onClick={() => {
                        expandCharacter(index);
                      }}
                    />
                  </p>
                </div>
              </BasicInfo>
              <MainInfo className="character-info">
                <div>
                  <p>Gender:</p>
                  <p>{character.gender}</p>
                </div>
                <div>
                  <p>Height:</p>
                  <p>{character.height}</p>
                </div>
                <div>
                  <p>Mass:</p>
                  <p>{character.mass}</p>
                </div>
                <div>
                  <p>Hair Color:</p>
                  <p>{character.hair_color}</p>
                </div>
                <div>
                  <p>Eye Color:</p>
                  <p>{character.eye_color}</p>
                </div>
                <div>
                  <p>Skin Color:</p>
                  <p>{character.skin_color}</p>
                </div>
              </MainInfo>
            </Character>
          );
        })}
      </Results>
      <PageNavigation></PageNavigation>
    </StyledPage>
  );
};

export default Page;
