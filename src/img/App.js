import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import styled, { css } from "styled-components";
import Navbar from "./components/Navbar";
import Intro from "./components/Intro";
import Feature from "./components/Feature";
import Service from "./components/Service";
import Price from "./components/Price";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";

const Container = styled.div`
  height: 100vh;
  overflow: hidden;
  position: relative;
`;
const Shape = css`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
`;
const IntoShape = styled.div`
  ${Shape}
  clip-path: polygon(67% 0, 100% 0%, 100% 100%, 55% 100%);
  background: #4e8cff98;
`;
const FeatureShape = styled.div`
  ${Shape}
  clip-path: polygon(0 0, 55% 0%, 42.5% 100%, 0 100%);
  background: #c7991c77;
`;
const ServiceShape = styled.div`
  ${Shape}
  clip-path: polygon(42.5% 0, 100% 0%, 100% 100%, 67% 100%);
  background: #4e8cff98;
`;
const PriceShape = styled.div`
  ${Shape}
  clip-path: polygon(0 0, 56.6% 0%, 33% 100%, 0 100%);
  background: #c7991c77;
`;

const App = () => {
  const smallScreen = window.screen.width <= 480 ? true : false;

  const [isOpen, setisOpen] = useState(false);
  const toggle = () => {
    setisOpen(!isOpen);
  };
  return (
    <>
      <Sidebar toggle={toggle} isOpen={isOpen} />
      <Router>
        <Container>
          <Navbar toggle={toggle} />
          <Intro />
          <IntoShape />
        </Container>
        <Container>
          <Feature />
          <FeatureShape />
        </Container>
        <Container>
          <Service />
          {!smallScreen && <ServiceShape />}
        </Container>
        <Container>
          <Price />
          <PriceShape />
        </Container>
        <Container>
          <Contact />
          <Footer />
        </Container>

        <Switch>
          {/* <Route path="/" exact component={Intro} />
          <Route path="/próg" component={Feature}></Route>
          <Route to="/miasto" component={Service} />
          <Route to="/Price" component={Price} />
          <Route to="/Contact" component={Contact} /> */}
        </Switch>
      </Router>
    </>
  );
};

export default App;
