import React from "react";
import styled from "styled-components";
// import Popup from "./Popup";
// import Img1 from "../img/17.png";
// import Img2 from "../img/12.jpg";

const Container = styled.div`
  margin-right: 50px;
  padding: 20px;
  -webkit-box-shadow: 0px 0px 17px -11px rgba(0, 0, 0, 0.58);
  box-shadow: 0px 0px 17px -11px rgba(0, 0, 0, 0.58);
  background: #fff;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: gray;
  &:nth-child(3) {
    margin-right: 0;
  }
  @media only screen and (max-width: 480px) {
    margin-right: 0;
    margin-bottom: 10px;
    padding: 10px;
  }
`;
const PriceContainer = styled.div`
  display: flex;
  align-items: center;
`;
const Price = styled.span`
  font-weight: bold;
  font-size: 50px;
  @media only screen and (max-width: 480px) {
    font-size: 30px;
  }
`;
const Type = styled.div`
  font-size: 1.5rem;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #c7991c;
  background: #fff;
  color: #c7991c;
  border-radius: 10px;
  @media only screen and (max-width: 480px) {
    display: none;
  }
`;
const List = styled.ul`
  list-style: none;
`;
const ListItem = styled.li`
  margin: 30px 0;
  @media only screen and (max-width: 480px) {
    margin: 10px;
    font-size: 12px;
  }
`;
const Button = styled.button`
  border: none;
  background: #4e8cff;
  color: #fff;
  font-size: 16px;
  font-weight: bold;
  padding: 15px;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.3s;
  &:hover {
    opacity: 0.5;
  }
  @media only screen and (max-width: 480px) {
    font-size: 12px;
    padding: 5px;
  }
`;

const PriceCard = ({ price, type, desc }) => {
  // const [buttonPopup, setButtonPopup] = useState(false);
  // const [buttonPopup1, setButtonPopup1] = useState(false);
  // const [state] = useState({
  //   title: "Czech koruna (koruna česká)",
  //   img: Img1,
  //   title1: "5 tys.",
  //   img1: Img2,
  // });

  return (
    <>
      <Container>
        <PriceContainer>
          Kč<Price>{price}</Price>
        </PriceContainer>
        <Type>{type}</Type>
        <List>
          <ListItem>{desc}</ListItem>
        </List>
        {/* <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
          <h3>{state.title}</h3>
          <br />
          <img src={state.img} alt="..." style={{ width: 80 }} /> <br />
          <p>{state.p0}</p>
          <em>{state.em}</em>
          <br />
        </Popup>
        <Popup trigger={buttonPopup1} setTrigger={setButtonPopup1}>
          <h3>{state.title1}</h3>
          <br />
          <img src={state.img1} alt="..." style={{ width: 80 }} /> <br />
          <p>{state.p0}</p>
          <em>{state.em}</em>
          <br />
        </Popup> */}
      </Container>
    </>
  );
};

export default PriceCard;
