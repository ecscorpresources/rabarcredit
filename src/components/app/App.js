import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Footer from "../includes/Footer";
<<<<<<< HEAD
import Pagenav from "../includes/Pagenav";
=======
import Navbar from "../includes/Navbar/Navbar";
>>>>>>> homepage
import Homepage from "../pages/Homepage/Homepage";

function App() {
  return (
    <>
      <Router>
<<<<<<< HEAD
        <Pagenav />
=======
        <Navbar />
>>>>>>> homepage
        <Switch>
          <Route exact path="/" component={Homepage} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
