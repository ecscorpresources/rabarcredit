import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Footer from "../includes/Footer";
import Pagenav from "../includes/Pagenav";
import Homepage from "../pages/Homepage/Homepage";

function App() {
  return (
    <>
      <Router>
        <Pagenav />
        <Switch>
          <Route exact path="/" component={Homepage} />
        </Switch>
        {/* <Footer /> */}
      </Router>
    </>
  );
}

export default App;
