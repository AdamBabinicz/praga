import React from "react";
import styled from "styled-components";
import { Link as LinkS } from "react-scroll";

const Container = styled.div`
  height: 10%;
  background: #4e8cff;
  color: #fff;
`;
const Wrapper = styled.div`
  padding: 20px;
  display: flex;
  justify-content: space-between;
  @media only screen and (max-width: 480px) {
    padding: 10px;
    flex-direction: column;
    align-items: center;
  }
`;
const List = styled.ul`
  display: flex;
  padding: 0;
  margin: 0;
  list-style: none;

  @media only screen and (max-width: 480px) {
    padding-bottom: 1.5rem;
  }
`;
const ListItems = styled(LinkS)`
  margin-right: 20px;
  cursor: pointer;
  @media only screen and (max-width: 480px) {
    margin-right: 10px;
    font-size: 14px;
  }
`;
const Copyright = styled.span`
  @media only screen and (max-width: 480px) {
    font-size: 14px;
    padding-bottom: 1rem;
  }
`;

const Footer = () => {
  return (
    <Container>
      <Wrapper>
        <List>
          <a
            href="//www.facebook.com/profile.php?id=100011937734013"
            target="_blank"
            rel="noopener noreferrer"
          >
            Facebook
          </a>
          {/* <ListItems>Pomoc</ListItems>
          <ListItems>API</ListItems>
          <ListItems>Społeczność</ListItems> */}
        </List>
        <Copyright>
          <p>2021 - {new Date().getFullYear()}.</p>
        </Copyright>
      </Wrapper>
    </Container>
  );
};

export default Footer;
