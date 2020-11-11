import React from "react";
import styled from "styled-components";
export default function Button({ primary, onClickHandler, text, icon }) {
  return (
    <ButtonContainer
      hasIcon={!!icon}
      primary={primary}
      onClick={onClickHandler}
    >
      {icon}
      <p>{text}</p>
    </ButtonContainer>
  );
}

Button.defaultProps = {
  primary: true,
  onClickHandler: () => console.log("clicked"),
  text: "button text",
  icon: null,
};

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) =>
    props.primary ? "#658252" : "var(--primary)"};
  color: var(--high-text);
  cursor: pointer;
  margin: 10px;
  border-radius: 5px;
  padding: 5px 25px;
  min-width: 175px;
  
  p {
    font-weight: bold;
    font-size: 16px;
    margin-left: ${(props) => (props.hasIcon ? "10px" : "0")};
  }
`;

// teal #349188
// olive green #658252
// royal blue #004c98
