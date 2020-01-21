import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";

const Pagenav = props => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">
<<<<<<< HEAD
          <h1>SoftLoan</h1>
=======
          <img src={require("../../assets/img/Rabar Credit.png")} alt="" />
>>>>>>> homepage
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav navbar className="homeNavLinks">
            <NavItem>
              <NavLink href="monhkey" className="links">
                How It Works
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="monhkey" className="links">
<<<<<<< HEAD
                Get A Loan
=======
                Products
>>>>>>> homepage
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="monkhey" className="links">
                Pay Back Loan
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="monkhey" className="links">
                Let's Talk
              </NavLink>
            </NavItem>
          </Nav>

          <Nav navbar className="homeLoginSignup">
            <NavItem>
              <NavLink href="monhkey" className="loginsignup login">
                LOG IN
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="monhkey" className="loginsignup signup">
                SIGN UP
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Pagenav;
