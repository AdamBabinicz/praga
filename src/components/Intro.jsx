import React, { useState } from "react";
import styled from "styled-components";
import Img from "../img/5.png";
import AnimatedShapes from "./AnimatedShapes";
import Popup from "./Popup";
import Img1 from "../img/1.svg";

const Container = styled.div`
  height: calc(100vh - 50px);
  display: flex;
  padding: 20px;
  @media only screen and (max-width: 480px) {
    flex-direction: column;
  }
`;
const Left = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media only screen and (max-width: 480px) {
    width: 100%;
    height: 100%;
  }
`;
const Right = styled.div`
  width: 40%;
  @media only screen and (max-width: 480px) {
    display: none;
  }
`;
const Title = styled.h1`
  width: 60%;
  font-size: 60px;
  color: #c7991c;
  @media only screen and (max-width: 480px) {
    width: 100%;
    font-size: 40px;
  }
`;
const Desc = styled.p`
  width: 60%;
  font-size: 20px;
  margin-top: 20px;
  color: gray;
  @media only screen and (max-width: 480px) {
    width: 100%;
    /* text-shadow: 0.05rem 0.05rem 0.05rem rgba(0, 0, 0, 0.21); */
  }
`;
const Info = styled.div`
  width: 60%;
  margin-top: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media only screen and (max-width: 480px) {
    width: 100%;
    flex-direction: column;
  }
`;
const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px;
  background: #c7991c;
  color: #fff;
  border-radius: 10px;
  font-weight: bold;
  border: none;
  cursor: pointer;
  letter-spacing: 2px;
  transition: all 0.3s;
  &:hover {
    opacity: 0.5;
  }
  @media only screen and (max-width: 480px) {
    margin-bottom: 20px;
  }
`;
const Contact = styled.div`
  display: flex;
  flex-direction: column;
`;
const Phone = styled.span`
  color: #4e8cff;
  font-weight: bold;
`;
const ContactText = styled.span`
  color: gray;
  margin-top: 5px;
`;
const Image = styled.img`
  width: 100%;
`;

const Intro = () => {
  const [buttonPopup, setButtonPopup] = useState(false);
  const [state] = useState({
    title: "",
    img: Img1,
    p0: "„Praga jest uważana za jedno z najbardziej atrakcyjnych miast Europy, z tego względu corocznie odwiedzają ją liczne rzesze turystów. W mieście znajduje się ponad 20 muzeów i prawie 100 galerii. Niektórymi z atrakcji turystycznych są: Hradczany z zamkiem oraz gotycką katedrą św. Wita, św. Wacława i św. Wojciecha (św. Adalberta); Złota Uliczka; Malá Strana – pełna kościołów, pałaców i ogrodów oraz urokliwych uliczek; barokowy kościół św. Mikołaja z XVIII wieku na Malostranské náměstí; Loreta; Stare Miasto na prawym brzegu Wełtawy; Ratusz Staromiejski (XIV wiek) ze słynnym zegarem astronomicznym Orloj na Staroměstské náměstí;”.",
    em: "https://pl.wikipedia.org/wiki/Praga",
  });

  return (
    <Container>
      <Left>
        <Title>Złota Praga</Title>
        <Desc>
          Dzisiejsza Praga powstała w 1784 r. z połączenia pięciu wcześniej
          samodzielnych, lecz powiązanych ze sobą organizmów, których początki
          sięgają średniowiecza: Starego Miasta, Nowego Miasta, Josefova, Małej
          Strany i Hradczan – siedziby władców czeskich. Od 1992 r. zabytkowe
          centrum miasta znajduje się na
          <b> liście światowego dziedzictwa UNESCO</b>.
        </Desc>
        <Info>
          <Button onClick={() => setButtonPopup(true)}>Czytaj więcej</Button>
          <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
            <h3>{state.title}</h3>
            <br />
            <img src={state.img} alt="..." style={{ width: 80 }} /> <br />
            <p>{state.p0}</p>
            <em style={{ fontSize: "15px" }}>{state.em}</em>
            <br />
          </Popup>
          <Contact>
            <Phone>100 00 – 199 00</Phone>
            <ContactText>Kod pocztowy</ContactText>
          </Contact>
        </Info>
      </Left>
      <Right>
        <Image src={Img} alt="..." />
        <AnimatedShapes />
      </Right>
    </Container>
  );
};

export default Intro;
