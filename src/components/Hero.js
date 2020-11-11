import React from "react";
import styled from "styled-components";
import Button from "./Button";
import { FaDiscord } from "react-icons/fa";
import { IconContext } from "react-icons";

export default function Hero() {
  return (
    <CenteredHeader>
      <BoldText>Meet Sabre</BoldText>
      <SubText>The bot built for streaming communities</SubText>
      <ButtonContainer>
        <Button
          text={"Add to Discord"}
          icon={
            <IconContext.Provider value={{ size: "1.5em" }}>
              <FaDiscord />
            </IconContext.Provider>
          }
        />
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
  min-height: 50vh;
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
    justify-content: center;
  }
`;
