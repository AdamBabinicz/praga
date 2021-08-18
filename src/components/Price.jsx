import React, { useState } from "react";
import styled from "styled-components";
import PriceCard from "./PriceCard";
import Popup from "./Popup";
import Img1 from "../img/17.png";
import Img2 from "../img/12.jpg";

const Container = styled.div`
  height: 100vh;
  display: flex;
  padding: 0 30px;
  align-items: center;
  justify-content: center;
  @media only screen and (max-width: 480px) {
    flex-direction: column;
  }
`;

const Button = styled.button`
  border: none;
  position: absolute;
  top: 90%;
  left: 50%;
  transform: translate(-50%);
  background: #4e8cff;
  color: #fff;
  font-size: 16px;
  font-weight: bold;
  padding: 15px;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.3s;
  z-index: 999;
  &:hover {
    opacity: 0.5;
  }
  @media only screen and (max-width: 480px) {
    font-size: 12px;
    padding: 5px;
  }
`;

const Price = ({ button }) => {
  const [buttonPopup, setButtonPopup] = useState(false);
  // const [buttonPopup1, setButtonPopup1] = useState(false);
  const [state] = useState({
    title: "Czech koruna (koruna česká)",
    img: Img1,
    img1: Img2,
    em: "https://pl.wikipedia.org/wiki/Praga",
    // title1: "5 tys.",
    // img1: Img2,
  });

  return (
    <>
      <Container>
        <PriceCard
          price="👑"
          type="🛒"
          desc="Korona czeska (czes. Koruna česká, skrót Kč, skrót według ISO 4217: CZK) – jednostka monetarna Czech wprowadzona w 1993 roku, formalnie (nominały niższe od korony od 2009 roku nie są w obiegu) dzieląca się na 100 halerzy (czes. haléř lub halíř)."
        />

        <PriceCard
          price="👛"
          type="🎲"
          desc="W obiegu są banknoty o nominałach: 100 Kč, 200 Kč, 500 Kč, 1000 Kč, 2000 Kč i 5000 Kč. Monety mają nominały: 1 Kč, 2 Kč, 5 Kč, 10 Kč, 20 Kč, 50 Kč."
        />
        <PriceCard
          price="💰"
          type="🎯"
          desc="Poprzednio były także w obiegu banknoty o nominałach 20 Kč (wycofany z dniem 31 sierpnia 2008), 50 Kč (wycofany został 1 kwietnia 2011), W październiku 2003 wycofano z obiegu monety 10 halerzy i 20 halerzy. Monetę o nominale 50 halerzy wycofano z obiegu w dniu 31 sierpnia 2009. Wartość 50 Kč występowała w postaci monety i banknotu do 1 kwietnia 2011."
        />
        <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
          <h3>{state.title}</h3>
          <br />
          <img src={state.img} alt="..." style={{ width: 300 }} /> <br />
          <img src={state.img1} alt="..." style={{ width: 300 }} />
          <p>{state.p0}</p>
          <em>{state.em}</em>
          <br />
        </Popup>
        {/* <Popup trigger={buttonPopup1} setTrigger={setButtonPopup1}>
          <h3>{state.title1}</h3>
          <br />
          <img src={state.img1} alt="..." style={{ width: 80 }} /> <br />
          <p>{state.p0}</p>
          <em>{state.em}</em>
          <br />
        </Popup> */}
      </Container>
      <Button onClick={() => setButtonPopup(true)}>Zobacz</Button>
    </>
  );
};

export default Price;
