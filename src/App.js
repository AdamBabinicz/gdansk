import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import { OuterLayout } from "./styles/Layouts";
import CardSection from "./components/CardSection";
import styled from "styled-components";
import ChartSection from "./components/ChartSection";
import MessagingSection from "./components/MessagingSection";
import PaymentSection from "./components/PaymentSection";
import FAQSection from "./components/FAQSection";
import Footer from "./components/Footer";
import Slider from "./components/Slider";
import { Fade } from "react-reveal";

function App() {
  const smallScreen = window.screen.width <= 480 ? true : false;

  const [isOpen, setisOpen] = useState(false);
  const toggle = () => {
    setisOpen(!isOpen);
  };
  return (
    <>
      {/* <Router>
        <Header toggle={toggle} />
        <Switch>
          <OuterLayout>
            <MainStyled>
              <Route path="/poczatki" component={CardSection}>
                <CardSection />
              </Route>
              <Route path="/nazwa" component={ChartSection}>
                <ChartSection />
              </Route>
              <Route path="/rozwoj" component={MessagingSection}>
                <MessagingSection />
              </Route>
              <Route path="/amberif" component={PaymentSection}>
                <PaymentSection />
              </Route>
              <Route path="/ciekawostki" component={FAQSection}>
                <FAQSection />
              </Route>
            </MainStyled>
          </OuterLayout>
        </Switch>
        <Footer />
      </Router> */}

      <Header />
      <OuterLayout>
        <MainStyled>
          <Fade left>
            <CardSection />
          </Fade>
          <Fade right>
            <ChartSection />
          </Fade>
          <Fade left>
            <MessagingSection />
          </Fade>
          <Fade right>
            <PaymentSection />
          </Fade>
          <Fade left>
            <FAQSection />
          </Fade>
          <Fade right>
            <Slider />
          </Fade>
        </MainStyled>
      </OuterLayout>
      <Fade bottom>
        <Footer />
      </Fade>
    </>
  );
}

const MainStyled = styled.main``;

export default App;
