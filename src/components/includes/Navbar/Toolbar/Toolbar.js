import React from "react";
import { Link } from "react-router-dom";
import "./Toolbar.css";
import DrawerToggleButton from "../SideDrawer/DrawerToggleButton";

const Toolbar = (props) => {
  return (
    <header className="toolbar">
      <nav className="toolbar_navigation">
        <div className="toolbar_toggle_button">
          <DrawerToggleButton
            handleDrawerToggleClick={props.handleDrawerToggleClick}
          />
        </div>
        <div className="toolbar_logo">
          <img
            src={require("../../../../assets/img/Rabar Credit.png")}
            alt=""
          />
        </div>
        {/* <div className="spacer"></div> */}
        <div className="toolbar_navigation_items">
          <ul className="links">
            <li>
              <Link to="/">How it works</Link>
            </li>
            <li>
              <Link to="/">Products</Link>
            </li>
            <li>
              <Link to="/">Pay Back loan</Link>
            </li>
            <li>
              <Link to="/">Let's Talk</Link>
            </li>
          </ul>
          <ul className="login_signup">
            <li>
              <Link to="/">SignUp</Link>
            </li>
            <li>
              <Link to="/">LogIn</Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Toolbar;
