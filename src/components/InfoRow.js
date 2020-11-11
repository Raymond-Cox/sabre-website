import React from "react";
import styled from "styled-components";

export default function InfoRow({ header, subheader, img, reverse }) {
  return (
    <Container reverse={reverse}>
      <ImageContainer>
        <img src={img} />
      </ImageContainer>
      <Column>
        <HeaderText>{header}</HeaderText>
        <SubheaderText>{subheader}</SubheaderText>
      </Column>
    </Container>
  );
}

InfoRow.defaultProps = {
  header: "Header Text",
  subheader: "Subheader Text",
  img: null,
  reverse: false,
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin: 50px 0;

  @media (min-width: 768px) {
    flex-direction: ${(props) => (props.reverse ? "row-reverse" : "row")};
    width: 80%;
    justify-content: space-around;
    margin: 100px 0;
  }
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
//   border: 1px solid blue;
  width: 90%;
  margin: 25px;

  @media (min-width: 768px) {
    width: auto;
    max-width: 45%;
  }
`;

const ImageContainer = styled.div`
  display: flex;
  max-width: 90%;
  border-radius: 5px;
  overflow: hidden;
  box-shadow: 1px 0 25px var(--primary);
`;

const HeaderText = styled.p`
  color: var(--high-text);
  font-size: 26px;
  font-weight: bold;
`;

const SubheaderText = styled.p`
  font-size: 20px;
`;
