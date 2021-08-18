import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import styled, { css } from "styled-components";
import Navbar from "./components/Navbar";
import Intro from "./components/Intro";
import Slider from "./components/Slider";
import Feature from "./components/Feature";
import Service from "./components/Service";
import Price from "./components/Price";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";

const Container = styled.div`
  height: 100%;
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
      <Router>
        <Sidebar toggle={toggle} isOpen={isOpen} />
        <Navbar toggle={toggle} />
        <Switch>
          <Route path="/" exact component={Intro}>
            <Container>
              <Intro />
              <IntoShape />
            </Container>
            <Container>
              <Slider />
            </Container>
          </Route>
          <Route path="/próg" component={Feature}>
            <Container>
              <Feature />
              <FeatureShape />
            </Container>
          </Route>
          <Route path="/waluta" component={Price}>
            <Container>
              <Price />
              <PriceShape />
            </Container>
          </Route>
          <Route path="/kontakt" component={Contact}>
            <Container>
              <Contact />
            </Container>
          </Route>
          <Route path="/miasto" exact component={Service}>
            <Container>
              <Service />
              {!smallScreen && <ServiceShape />}
            </Container>
          </Route>
        </Switch>
        <Footer />
      </Router>
    </>
  );
};

export default App;
