import React from "react";
import styled from "styled-components";
import Img1 from "../img/13.png";

const Container = styled.div`
  width: 200px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  -webkit-box-shadow: 0px 0px 17px -11px rgba(0, 0, 0, 0.58);
  box-shadow: 0px 0px 17px -11px rgba(0, 0, 0, 0.58);
  @media only screen and (max-width: 480px) {
    width: 130px;
  }
`;
const Image = styled.img`
  width: 40px;
`;
const Text = styled.span`
  margin-top: 10px;
  text-align: center;
  @media only screen and (max-width: 480px) {
    font-size: 14px;
  }
`;

const MiniCard = ({ image, text, text1 }) => {
  return (
    <Container>
      <Image src={image} />
      <Text>{text}</Text>
      <Text>{text1}</Text>
    </Container>
  );
};

export default MiniCard;
