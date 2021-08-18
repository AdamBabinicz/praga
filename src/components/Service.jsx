import React, { useState } from "react";
import styled from "styled-components";
import Img from "../img/7.png";
import MiniCard from "./MiniCard";
import img1 from "../img/15.png";
import img2 from "../img/1.svg";
import img3 from "../img/16.png";

const Container = styled.div`
  display: flex;
  height: 100%;
  color: gray;
  @media only screen and (max-width: 480px) {
    flex-direction: column;
  }
`;
const Left = styled.div`
  width: 50%;
  position: relative;
  @media only screen and (max-width: 480px) {
    display: none;
  }
`;
const Image = styled.img`
  display: ${(props) => props.open && "none"};
  height: 100%;
  margin-left: 100px;
`;
const Video = styled.video`
  display: ${(props) => !props.open && "none"};
  height: 600px;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  margin: auto;
  @media only screen and (max-width: 480px) {
    width: 100%;
  }
`;
const Right = styled.div`
  width: 50%;
  @media only screen and (max-width: 480px) {
    width: 100%;
  }
`;
const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  flex-direction: column;
  @media only screen and (max-width: 480px) {
    padding: 20px;
  }
`;
const Title = styled.h2`
  margin-top: 110px;
  font-size: 60px;
  color: #c7991c;
  @media only screen and (max-width: 480px) {
    font-size: 40px;
    margin-top: 2rem;
  }
`;
const Desc = styled.p`
  font-size: 20px;
  margin-top: 20px;
`;
const CardConteiner = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 50px;
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
  margin-top: 50px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  transition: all 0.3s;
  &:hover {
    opacity: 0.5;
  }
`;
const Icon = styled.img`
  width: 20px;
  margin-right: 10px;
`;
const Modal = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
`;

const CloseButton = styled.button`
  position: absolute;
  background-color: white;
  padding: 5px;
  border: none;
  border-radius: 5px;
  right: 5px;
  top: 50%;
`;

const Service = () => {
  const [open, setOpen] = useState(false);
  const smallScreen = window.screen.width <= 480 ? true : false;
  return (
    <Container>
      <Left>
        <Image open={open} src={Img} alt="..." />
        <Video open={open} autoPlay loop controls src="/img/video.mp4" />
      </Left>
      <Right>
        <Wrapper>
          <Title>Statystyki</Title>
          <Desc>
            Według danych szacunkowych z 1 stycznia 2020 r. liczba ludności
            miasta wynosiła 1 324 277 osób (1. miejsce w Czechach), natomiast
            powierzchnia – 496 km² (również 1 miejsce w Czechach). Praga
            oficjalnie podzielona jest na dziesięć obwodów, które z kolei dzielą
            się na dzielnice.
          </Desc>
          <CardConteiner>
            <MiniCard image={img1} text={"burmistrz"} text1={"Zdeněk Hřib"} />
            <MiniCard image={img2} text={"obwody"} text1={"9"} />
            <MiniCard image={img3} text={"dzielnice"} text1={"22"} />
          </CardConteiner>
          <Button onClick={() => setOpen(true)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-caret-right-fill"
              viewBox="0 0 16 16"
            >
              <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
            </svg>
            Oglądaj
          </Button>
        </Wrapper>
      </Right>

      {smallScreen && open && (
        <Modal>
          <Video open={open} autoPlay loop controls src="/img/video.mp4" />
          <CloseButton onClick={() => setOpen(false)}>Zamknij</CloseButton>
        </Modal>
      )}
    </Container>
  );
};

export default Service;
