import React from "react";
import styled from "styled-components";
import Button from "./Button";

export default function Hero() {
  return (
    <CenteredHeader>
      <BoldText>Meet Sabre</BoldText>
      <SubText>
        Elevate your live-streaming Discord community to the next level
      </SubText>
      <ButtonContainer>
        <Button text={"Add to Discord"} />
        <Button primary={false} text={"See Features"} />
      </ButtonContainer>
    </CenteredHeader>
  );
}

const CenteredHeader = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  justify-content: center;
  text-align: center;
`;

const BoldText = styled.p`
  color: var(--high-text);
  font-size: 28px;
`;

const SubText = styled.p`
  font-size: 18px;
  margin-top: 0;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;
