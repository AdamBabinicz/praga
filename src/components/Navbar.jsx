import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Popup from "./Popup";
import Img from "../img/1.jpg";
import { FaBars, FaCaretDown } from "react-icons/fa";
import { Link as LinkS } from "react-scroll";
import { BrowserRouter as Router, Link as LinkR } from "react-router-dom";

const Container = styled.div`
  /* background: ${({ scrollNav }) => (scrollNav ? "#c7991c" : "#003")}; */
  width: 100%;
  height: 65px;
  position: fixed;
  z-index: 10;
`;
const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Left = styled.div`
  width: 70%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Logo = styled.h2`
  font-weight: bold;
  text-decoration: underline #4e8cff;
  color: #4e8cff;
`;
const Menu = styled.ul`
  display: flex;
  list-style: none;
  @media only screen and (max-width: 480px) {
    display: none;
  }
`;
const MobileIcon = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: block;
    color: #000;
    font-size: 2.4rem;
    text-align: right;
  }
`;
const MenuItem = styled(LinkR)`
  margin-right: 30px;
  /* font-size: 20px;
  font-weight: bold;
  color: gray; */
`;
const Link = styled(LinkR)`
  display: flex;
  justify-content: center;
  color: #4e8cff;
  font-size: 1.7rem;
  align-items: center;
  margin-right: 1.3rem;
  position: relative;
  font-weight: 500;
  border-radius: 0.5rem;
  cursor: pointer;
  &:hover {
    color: #f54748;
    transition: 0.2s;
  }
  &.active {
    background: #f54748;
    transition: 0.5s;
    color: #fff;
    padding: 0.91rem 1rem;
    .dropdownMenu {
      top: 4.4rem;
      transition: 0.5s;
    }
  }
`;
const Button = styled.button`
  border: 2px solid white;
  padding: 10px 15px;
  background: #4e8cff;
  color: #fff;
  font-weight: bold;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.3s;
  &:hover {
    opacity: 0.5;
  }
`;

const Navbar = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false);
  const changeNav = () => {
    if (window.scrollY >= 122) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);

  const [buttonPopup, setButtonPopup] = useState(false);
  const [state] = useState({
    title: "W tle katedra św. Wita",
    img: Img,
    p0: "sierpień 2021'",
    em: "...",
  });

  return (
    <>
      <Container scrollNav={scrollNav}>
        <Wrapper>
          <Left>
            <Logo>Moje trasy</Logo>
            <MobileIcon>
              <FaBars onClick={toggle} style={{ cursor: "pointer" }} />
            </MobileIcon>
            <Menu>
              <MenuItem>
                <Link to="/">Start</Link>
              </MenuItem>
              <MenuItem>
                <Link to="/próg">Próg</Link>
              </MenuItem>
              <MenuItem>
                <Link to="/miasto">Miasto</Link>
              </MenuItem>
              <MenuItem>
                <Link to="/waluta">Waluta</Link>
              </MenuItem>
              <MenuItem>
                <Link to="/kontakt">Kontakt</Link>
              </MenuItem>
            </Menu>
          </Left>
          <Button onClick={() => setButtonPopup(true)}>Zobacz</Button>
          <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
            <h3>{state.title}</h3>
            <br />
            <img src={state.img} alt="..." /> <br />
            <p>{state.p0}</p>
            <em>{state.em}</em>
            <br />
          </Popup>
        </Wrapper>
      </Container>
    </>
  );
};

export default Navbar;
