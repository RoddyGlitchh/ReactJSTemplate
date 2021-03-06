import React from "react";
import { withRouter, Switch, Route } from "react-router-dom";
import { connect } from "react-redux";
import Footer from "./components/Footer";
import Landing from "./containers/Landing";
import Features from "./containers/Features";
import Contact from "./containers/Contact";
import NotFound from "./containers/NotFound";

const Routes = () => {
  return (
    <main>
      <Switch>
        <Route exact path='/' component={Landing} />
        <Route exact path='/features' component={Features} />
        <Route exact path='/contact' component={Contact} />
        <Route component={NotFound} />
      </Switch>
      <Footer />
    </main>
  );
};

export default withRouter(connect(null, null)(Routes));
