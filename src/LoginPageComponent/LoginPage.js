import React, { useState } from "react";
import { StickyContainer, Sticky } from "react-sticky";
import { Row, Col } from "reactstrap";
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav } from "reactstrap";
import { NavLink } from "react-router-dom";
import "./LoginPage.css";
const Login = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <StickyContainer>
        <img
          id="logo-Login"
          src="http://www.thescratchlist.com/uploads/8/7/8/3/87833928/isleworth-logo-jpg_orig.jpg"
        />
        <div className="bottom-border"></div>
        <Navbar
          color="white"
          light
          expand="md"
          className="navbar navbar-default"
        >
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            {/* Navbar Links */}

            <Nav className="mx-auto" navbar>
              <NavLink
                id="login"
                className="links"
                activeClassName="active-link"
                to="/Login"
              >
                LOGIN
              </NavLink>
            </Nav>
          </Collapse>
        </Navbar>
        <div id='border-line'></div>
      </StickyContainer>
      <div className="wrap">

          <Row>
              <Col className='col-lg-6 col-md-6 col-sm-12 col-xs-12'><img
              id="login-image"
              src="https://members.isleworth.com/getmedia/6ee5a4fa-a0ee-4c70-b19a-788f74bfdfb4/login_2.aspx"
            />
              </Col>
              <Col className='col-lg-6 col-md-6 col-sm-12 col-xs-12'> <form className='login-form'>
            <label id='login-label'>Please Log On</label><br></br>
            <input type='text/' placeholder='Username' className='input-style1'/>
            
            <input type ='text' placeholder='PassWord' className='input-style2'/><br></br>
            <input type='checkbox'placeholder='remember me'/><span class='password-login'> Remember me <label id='password'>Forgot Password</label></span><br></br>
            <button id='login-button'>LOG IN</button><br></br>
            <button id='member-button'>MEMBER  REGISTRATION</button>
        </form>
              </Col>
          </Row>
         <footer id='footer-login'>
          TAVISTOCK GROUP CAREERS MEMBER LOGIN LEGAL
          <div className='footer-login'><i>powered by jonas club software</i></div>
         </footer>
      </div>
    </div>
  );
};

export default Login;
