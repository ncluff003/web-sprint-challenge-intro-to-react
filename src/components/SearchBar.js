import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const StyledSearchButton = styled.button`
  position: relative;
  height: 100%;
  width: 12.5%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-right: 1rem;
  background-color: #f7f7f7aa;
  border: 0.3rem outset #f0f0f0aa;
  border-top-right-radius: 5rem;
  border-bottom-right-radius: 5rem;
  color: #222222aa;
  font-size: 3rem;

  &:hover {
    cursor: pointer;
    border: 0.3rem outset #f0f0f0;
    background-color: #f0f0f0;
    transition: background-color 0.5s, border 0.5s, color 0.5s;
    color: #222222;
  }

  &:active {
    border: 0.3rem inset #222222;
    background-color: #333333;
    color: #f0f0f0;
  }
`;

const StyledSearchBar = styled.input`
  position: relative;
  height: 100%;
  width: 87.5%;
  border: 0.3rem solid #222222aa;
  border-top-left-radius: 5rem;
  border-bottom-left-radius: 5rem;
  background-color: #333333aa;
  color: #030303;
  font-size: 2rem;
  padding: 2rem;

  &:focus {
    outline: none;
    border-color: 0.3rem solid #222222;
    background-color: #555555;
    color: #f0f0f0;
  }
`;

const SearchBarContainer = styled.div`
  position: relative;
  height: 10%;
  min-height: 8rem;
  width: 90%;
  display: flex;
`;

const SearchBar = function (props) {
  return (
    <SearchBarContainer>
      <StyledSearchBar placeholder="Search..." />
      <StyledSearchButton>
        <FontAwesomeIcon icon={faMagnifyingGlass} />
      </StyledSearchButton>
    </SearchBarContainer>
  );
};

export default SearchBar;
