import React from "react";
import styled from "styled-components";
import Hero from "../components/Hero";

export default function Home() {
  return (
    <MainContainer>
      <Hero />
    </MainContainer>
  );
}

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
//   border: 1px solid red;
  padding: 20px;
`;

