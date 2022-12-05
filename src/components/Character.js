import React from "react";
import styled from "styled-components";

export const MainInfo = styled.article`
  position: relative;
  height: 0;
  width: 100%;
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: center;

  & div {
    position: relative;
    height: max-content;
    width: 100%;
    display: none;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;

    & p {
      font-size: 1.6rem;
      &:first-of-type {
        padding-left: 2rem;
      }
      &:nth-of-type(2) {
        padding-right: 6rem;
      }
    }
  }
`;

export const BasicInfo = styled.header`
  position: relative;
  height: 5rem;
  width: 100%;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;

  & p {
    position: relative;
    height: 100%;
    width: 30%;
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;
  }

  & div {
    position: relative;
    height: 100%;
    width: 50%;
    min-width: 20rem;
    padding: 1rem;
    display: flex;
    justify-content: flex-end;

    &:hover {
      cursor: pointer;
    }
  }
`;

export const Character = styled.section`
  position: relative;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-around;
  align-items: center;
  height: max-content;
  min-height: 5rem;
  width: 100%;
  padding: 1rem 2rem;
  font-size: 2rem;

  & .expand {
    height: max-content;
    transition: height 0.5s;

    & div {
      display: flex;
    }
  }
`;
