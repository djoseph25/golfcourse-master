
import React, { useState } from 'react';
import { Row, Col } from 'reactstrap';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav } from 'reactstrap';
import {  NavLink, Link } from "react-router-dom";
import './Header.css';
import Example from './home'
// import Login from '../LoginPageComponent/LoginPage';
// import Contact from '../ContactComponent/Contact';
// import Gallery from '../GalleryComponent/Gallery';
// import Club from '../ClubComponent/Club';
// import About from '../AboutComponent/About';
// import RealEstate from '../RealEstateComponent/RealEstate';
import Carousels from './Carousel.js' 

const Header = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);
  

    return (
        <div>
            <Row >
                <Col>
                <Link to='/'><img
                       id='logo'
                    src="https://static1.squarespace.com/static/5ba3a44e3917ee6c7e99a2ae/t/5bbcc0ade5e5f0519d9f6f8b/1596813450709/?format=1500w"
                    /></Link>
                    
                </Col>
                <Col  >
                    <div className="input-header">
                        <input placeholder="Search" class="no-outline" />
                        <i class="fas fa-search"></i>
                    </div>
                </Col>
            </Row>

            <Navbar  color="white" light expand="md" className='navbar navbar-default'>
                <NavbarBrand href="#" className="Icons"></NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    {/* Navbar Links */}

                    <Nav className="mx-auto" navbar >
                        <NavLink className="links" activeClassName="active-link" to="/About">
                            ABOUT
                        </NavLink>

                        <NavLink className="links" activeClassName="active-link" to="/Club">
                            CLUB
                        </NavLink>
                        <NavLink className="links" activeClassName="active-link" to="/RealEstate">
                            REAL ESTATE
                        </NavLink>

                        <NavLink className="links" activeClassName="active-link" to="/Gallery">
                            GALLERY
                        </NavLink>
                        <NavLink className="links" activeClassName="active-link" to="/Contact">
                            CONTACT
                        </NavLink>
                        <NavLink className="links" activeClassName="active-link" to="/Login">
                            LOGIN
                        </NavLink>
                    </Nav>
                </Collapse>
            </Navbar>
            
     
        </div>
    );
};

export default Header;