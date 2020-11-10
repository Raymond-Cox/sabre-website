import React from "react";
import styled from "styled-components";

export default function Button({ primary, onClickHandler, text }) {
  return (
    <ButtonContainer primary={primary} onClick={onClickHandler}>
      <p>{text}</p>
    </ButtonContainer>
  );
}

Button.defaultProps = {
  primary: true,
  onClickHandler: () => console.log("clicked"),
  text: "button text",
};
const ButtonContainer = styled.div`
  background-color: ${(props) =>
    props.primary ? "#004c98" : "var(--primary)"};
  color: var(--high-text);
  cursor: pointer;
  margin: 10px;
  p {
    font-weight: bold;
    font-size: 14px;
  }
`;

// teal #349188
// olive green #658252
// royal blue #004c98
