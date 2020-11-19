import React, { Component } from "react";
import Header from "../HomePageComponent/Header";
import RealEstateCarousel from "./RealEstateCarousel";
import { Jumbotron, Container, Row, Col } from "reactstrap";
import Footer from '../HomePageComponent/Footer'
import './RealEstate.css'

class RealEstate extends Component {
  state = {};
  render() {
    return (
      <div>
        <Header />
        <RealEstateCarousel />
        <Row>
          <Col xs sm md lg="12">
            <div className="above-line"></div>
            <h1 className="listing">
              TO LEARN MORE ABOUT ISLEWORTH LISTINGS, CALL (407) 876-0111
            </h1>
            <div className="bottom-line"></div>
          </Col>
        </Row>
        <Row className="container">
          
          <Col xs sm md lg="6">
            <img
              className="club-house"
              src="https://images.squarespace-cdn.com/content/v1/5d235ff1fdd42c0001908e34/1562686068388-XYVO6RF99EJF2A16B6GC/ke17ZwdGBToddI8pDm48kBYcmRYpiBfepfjbZV58nw1Zw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZamWLI2zvYWH8K3-s_4yszcp2ryTI0HqTOaaUohrI8PIhKXKm8Jles_zIP0CYCT9G5q4RXXu6sTFMJEWy4oLAeMKMshLAGzx4R3EDFOm1kBS/18_IWR_Lot264_MLS_back.jpg?format=1500w"
            />
          </Col>
          <Col xs sm md lg="6" >
            <div className="contains">
              <h1 className="Isle-listing">CURRENT LISTINGS</h1>
              <p className="listing-info">
                Isleworth offers extraordinary estate homes and home sites set
                among grand cypress<br></br> and oak trees and surrounded by
                Central Florida's renowned Butler Chain of Lakes.<br></br>{" "}
                Whether overlooking the championship golf course or set along
                one of the seven miles
                <br></br> of shoreline, Isleworth provides an unmatched
                combination of architecture, amenities, service and security.
              </p>
              <button className="listing-button">VIEW CURRENT LISTING</button>
            </div>
          </Col>
        </Row>

        <Row className="container">
          <Col>
            <div className="Homes-championship">
              <h1 className="New-Homes">
                NEW HOMES IN THE<div className="garden">GARDENS</div>{" "}
              </h1>
              <p className="garden-info">
                Gardens of Isleworth, only seven lots remain to build a custom
                homes in an exquisite setting. Award-winning luxury custom home
                builder Goehring & Morgan has created a collection of designs
                and floor plans - all celebrating indoor-outdoor living -
                specifically for these lots designed to enjoy the garden
                lifestyle.
              </p>
              <button className="explore-button">EXPLORE RESIDENCE</button>
            </div>
          </Col>
          <Col>
            {" "}
            <img
              className="championship-photo"
              src="https://images.squarespace-cdn.com/content/v1/5d235ff1fdd42c0001908e34/1562685061647-XOBFV1A43EFZFD9GWSTN/ke17ZwdGBToddI8pDm48kFuTfCR-ecbutRwos0iLHIB7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UQVuJKS7mjfjN6oCX1vq1U0gQAbe6lCSD94X_54gkwnMS0NPeaHDG8GIWiWpcKQ6cg/careysheffield12thhole%2B0361_EDIT.jpg?format=1500w"
            />
          </Col>
        </Row>
        <Row>
          <Col xs sm md lg="12">
            <div className="above-line-showing"></div>
            <h1 className="showing">SCHEDULE A PRIVATE VIEWING</h1>
            <div className="bottom-line-showing"></div>
          </Col>
          <Col className="showing-text">
            To arrange a private viewing, please complete the inquiry form
            below.
          </Col>
        </Row>
        {/* Form Contact Page */}
        <div id="contact-form">
          <form id="contactpage-form">
            <header id="name">Name *</header>
            <div className="same-line">
              <input id="firstname" type="name" />
              <input id="lastname" type="name" />
            </div>
            <header className="email">Email *</header>
            <div>
              <input type="email" id="email" />
            </div>
            <header className="email">Subject *</header>
            <div>
              <input type="subject" id="email" />
            </div>
            <header id="phone">Phone *</header>
            <div>
              <input id="area" type="phone" />
              <input id="code" type="phone" />
              <input id="code2" type="phone" />
            </div>
            <header id="message">Message *</header>
            <div>
              <input type="text" id="message-box" />
            </div>
            <div>
              <button className="estate-submit-button">SUBMIT</button>
            </div>
          </form>
        </div>
        <Footer />
      </div>
    );
  }
}

export default RealEstate;
