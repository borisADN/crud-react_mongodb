import React from "react";
import styled from "styled-components";

const Button = () => {
  return (
    <StyledWrapper>
      <button>
        <b>Ajouter</b>
      </button>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  button {
    position: relative;
    font-size: 1.2em;
    padding: 0.7em 1.4em;
    background-color: #bf0426;
    text-decoration: none;
    border: none;
    border-radius: 0.5em;
    color: #dedede;
    box-shadow: 0.5em 0.5em 0.5em rgba(0, 0, 0, 0.3);
    cursor: pointer; /* Ajouté pour indiquer que le bouton est cliquable */
  }

  button::before {
    position: absolute;
    content: "";
    height: 0;
    width: 0;
    top: 0;
    left: 0;
    border-radius: 0.5em;
    background: linear-gradient(135deg, rgba(33, 33, 33, 1) 0%, rgba(33, 33, 33, 1) 50%, rgba(150, 4, 31, 1) 50%, rgba(191, 4, 38, 1) 60%);
    border-radius: 0 0 0.5em 0;
    box-shadow: 0.2em 0.2em 0.2em rgba(0, 0, 0, 0.3);
    transition: 0.3s;
  }

  button:hover::before {
    width: 1.6em;
    height: 1.6em;
  }

  button:active {
    box-shadow: 0.2em 0.2em 0.3em rgba(0, 0, 0, 0.3);
    transform: translate(0.1em, 0.1em);
  }
`;

export default Button;
