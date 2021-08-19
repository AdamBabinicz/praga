import React, { useState } from "react";
import styled from "styled-components";
import Img from "../img/2.jpg";
import AnimatedShapes from "./AnimatedShapes";
import Popup from "./Popup";
import Img1 from "../img/10.jpg";

const Container = styled.div`
  display: flex;
  color: gray;
  @media only screen and (max-width: 480px) {
    height: 100vh;
    flex-direction: column;
    padding: 30px 20px;
  }
`;
const Left = styled.div`
  width: 50%;
  @media only screen and (max-width: 480px) {
    display: none;
  }
`;
const Image = styled.img`
  width: 80%;
`;
const Right = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media only screen and (max-width: 480px) {
    width: 100%;
  }
`;
const Title = styled.span`
  font-size: 60px;
  color: #c7991c;
  @media only screen and (max-width: 480px) {
    font-size: 40px;
    margin-top: 2rem;
  }
`;
const SubTitle = styled.span`
  font-size: 24px;
  font-style: italic;
  margin-top: 30px;

  @media only screen and (max-width: 480px) {
    font-size: 18px;
  }
`;
const Desc = styled.p`
  font-size: 20px;
  margin-top: 30px;

  @media only screen and (max-width: 480px) {
    font-size: 16px;
  }
`;
const Button = styled.button`
  width: 150px;
  padding: 15px;
  background: #c7991c;
  color: #fff;
  border-radius: 10px;
  font-weight: bold;
  border: none;
  cursor: pointer;
  letter-spacing: 2px;
  white-space: nowrap;
  margin-top: 40px;
  transition: all 0.3s;
  &:hover {
    opacity: 0.5;
  }
`;

const Feature = () => {
  const [buttonPopup, setButtonPopup] = useState(false);
  const [state] = useState({
    title: "...",
    img: Img1,
    p0: "sierpień 2021'",
    em: "...",
  });

  return (
    <Container>
      <Left>
        <Image src={Img} alt="..." />
      </Left>
      <Right>
        <Title>
          <b>Práh</b> –<br /> znaczy <b>próg</b>
        </Title>
        <SubTitle>
          Według tradycji oryginalna czeska nazwa miasta Praha pochodzi od
          czeskiego słowa práh – próg ... .
        </SubTitle>
        <Desc>
          Pierwsze plemiona słowiańskie przybyły na te tereny ok. 500 roku.
          Walki o dominację doprowadziły ok. 800 roku do władzy dynastię
          Przemyślidów, którzy założyli tu miasto. Wznieśli oni dwie warowne
          osady: Zamek Praski i Wyszehrad.
        </Desc>
        <Button onClick={() => setButtonPopup(true)}>Zobacz więcej</Button>
        <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
          <h3>{state.title}</h3>
          <br />
          <img src={state.img} alt="..." /> <br />
          <p>{state.p0}</p>
          <em style={{ fontSize: "15px" }}>{state.em}</em>
          <br />
        </Popup>
      </Right>
      <AnimatedShapes />
    </Container>
  );
};

export default Feature;
