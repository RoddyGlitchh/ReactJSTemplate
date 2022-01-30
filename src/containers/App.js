import "./App.css";
import "antd/dist/antd.css";
import React, { useEffect, useState } from "react";
import { IntlProvider } from "react-intl";
import { connect } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import ReactAnime from "react-animejs";
import Navbar from "../components/Navbar";
import Routes from "../routes";
import BackToTop from "../components/BackToTop";

const App = (props) => {
  const { Anime, stagger } = ReactAnime;

  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <IntlProvider messages={require(`../translations/${props.lang}.json`)}>
      <Router>
        <Navbar />
        {scrollPosition > 200 ? (
          <BackToTop
            animation={scrollPosition < 200 ? "slide-bottom" : "slide-top"}
          />
        ) : null}
        <Routes />
      </Router>
    </IntlProvider>
  );
};

const mapStateToProps = (state) => {
  return {
    lang: state.lang.lang,
  };
};

export default connect(mapStateToProps, null)(App);
