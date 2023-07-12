import React from "react";
import { styled } from "styled-components";

const Button = ({ onClick, title, type }) => {
  const StyledButton = styled.button`
    ${() => typeHandler(type)};
  `;

  const typeHandler = (type) => {
    switch (type) {
      case "main":
        return `width: 250px; height: 50px; background-color: transparent; margin: 0 10px; border-radius: 30px;`;
      case "filter":
        return `width: 60px; height: 35px; margin: 5px; background-color: transparent; border: black solid 1px`;
      case "detail":
        return `width: 130px; height: 35px; margin: 10px; background-color: transparent; border: black solid 1px`;
      case "write":
        return `width: 300px; height: 35px; margin: 15px; background-color: transparent; border: black solid 1px; `;
    }
  };

  return <StyledButton onClick={onClick}>{title}</StyledButton>;
};

export default Button;
