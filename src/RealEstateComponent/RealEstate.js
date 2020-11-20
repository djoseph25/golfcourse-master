import React, { Component } from "react";
import Header from "../HomePageComponent/Header";
import RealEstateCarousel from "./RealEstateCarousel";
import Col from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Container';
import Container from 'react-bootstrap/Container';
import Footer from '../HomePageComponent/Footer'
import './RealEstate.css'

class RealEstate extends Component {
  state = {};
  render() {
    return (
					<div>
						<Header />
						<RealEstateCarousel />
						<Container>
							<Row>
								<Col xs sm md lg="12">
									<div className="above-line"></div>
									<h1 className="listing">TO LEARN MORE ABOUT ISLEWORTH LISTINGS, CALL (407) 876-0111</h1>
									<div className="bottom-line"></div>
								</Col>
							</Row>
							<div className="grid-container">
								<div class="grid-item info1">
									<img
										id="offering-image"
										src="https://images.squarespace-cdn.com/content/v1/5d235ff1fdd42c0001908e34/1567009182556-J80XYIFB77B3NVAQ1UAC/ke17ZwdGBToddI8pDm48kBieUVLtQ4dMVCe2j58dS-R7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1Ub23wWp1Qxsf7y2MemDksUj7PwpYhQGDpw6KlvcjK4oz5mK74YqutHtu4hBeWE_-Pw/History%2BTimeline-1993.jpg"
										alt="image"
									/>
								</div>
								<div class="grid-item info">
									{' '}
									<h1 className="view-listing">CURRENT LISTINGS</h1>
									<p className="course-info2">
										Isleworth presents a range of estate homes within the established community, many<br></br>{' '}
										with exquisite views of the championship golf course, lakes or monumental art.
									</p>
									<button className="viewing-button">VIEW OFFERING</button>
								</div>
							</div>
							<div className="grid-container">
								<div class="grid-item info2">
									{' '}
									<h1 className="show-listing">CHAMPIONSHIP GOLF</h1>
									<p className="golf-info">
										Originally designed by Arnold Palmer, Isleworth's championship 18-hole golf course is
										intertwined among pristine lakes and presents one of the longest and most challenging
										rounds in the country.
									</p>
									<button className="show-button">LEARN MORE</button>
								</div>
								<div class="grid-item info1">
									<img
										id="championship-image"
										src="https://images.squarespace-cdn.com/content/v1/5d235ff1fdd42c0001908e34/1567008903890-VT82PQPB7QOX9OHOLT4R/ke17ZwdGBToddI8pDm48kB7tZ3aOuiNRXRYUCfs6bWF7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UTNyt4PHiIz7NqrNYzQegpze5S3s9ngcorpAK1JjOX7DgDJ_jr520FEz6htyTRq2fg/csheffieldISMarketing%2B0011.jpg"
										alt="image"
									/>
								</div>
							</div>

							<Row>
								<Col xs sm md lg="12">
									<div className="above-line-showing"></div>
									<h1 className="showing">SCHEDULE A PRIVATE VIEWING</h1>
									<div className="bottom-line-showing"></div>
								</Col>
								<Col className="showing-text">
									To arrange a private viewing, please complete the inquiry form below.
								</Col>
							</Row>
						</Container>
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
