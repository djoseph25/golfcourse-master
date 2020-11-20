import React, { Component } from 'react';
import Header from '../HomePageComponent/Header';
import Footer from '../HomePageComponent/Footer';
import './About.css';
import Container from 'react-bootstrap/Container';
import AboutCarousel from './AboutCarousel';
class About extends Component {
	state = {};
	render() {
		return (
			<div>
				<Header />

				<Container style={{ marginTop: 110 }}>
					<div className="grid-container">
						<div class="grid-item info2">
							{' '}
							<h1 className="show-listing">PRISTINE SETTING</h1>
							<p className="golf-info">
								Set amidst grand cypress and oak trees and surrounded by freshwater lakes, the 600-acre golf
								club community's natural environment provides an exquisite backdrop for those who enjoy the
								community each day. Thousands of trees and flowers, along with a collection of important
								sculptures and magnificent estates, line the streets of Isleworth, creating a stunning
								setting not found anywhere else.
							</p>
						</div>
						<div class="grid-item info1">
							<img
								id="championship-image"
								src="https://images.squarespace-cdn.com/content/v1/5d235ff1fdd42c0001908e34/1562701571485-32SQYUCPI260AS1DIKSX/ke17ZwdGBToddI8pDm48kBajoXmoABVPna_2J6i3sYN7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UTnZ8SAlEr0Hi8Oqb_6UYR0RoVo_GTgVgKQUuciw6RGXyle_XYq8wjluc2FaLpi0qA/181106_IW_Clubhouse_Dusk-003-Edit.jpg"
								alt="image"
							/>
						</div>
					</div>
					<div id="center-every">A STORIED HISTORY</div>
					{/* Carousel Added */}
					<AboutCarousel />
					<div className="grid-container">
						<div class="grid-item info1">
							<img
								id="offering-image"
								src="https://images.squarespace-cdn.com/content/v1/5d235ff1fdd42c0001908e34/1562701959555-44LDYQJLHX5R5C9LTFYY/ke17ZwdGBToddI8pDm48kMFiMyT1nneRMhnmfuSfpxZ7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0mlM0or4nqX7jrn5yWu0hA1QXedaIFqnAbw_tQShHbKg4-O_KAc44ak5jGzrnn7f3A/careysheffieldisleworth_0075.jpg"
								alt="image"
							/>
						</div>
						<div class="grid-item clubinfo">
							{' '}
							<h1 className="view-listing">A WORK OF ART</h1>
							<p className="club-infos">
								Monumental works of art line the streets and fairways of Isleworth's celebrated golf course,
								providing a rare permanent gallery for noted pieces by acclaimed artists including Philip
								Jackson, Henry Moore and Salvador Dali. The community's iconic sculpture, the Wall Street
								Charging Bull, sits between the first and tenth tees, symbolizing the strength and power of
								this renowned community.
							</p>
						</div>
					</div>
					<div id="center-every">AT THE CENTER OF EVERYTHING</div>
					<div id="vertical-line-center"></div>

					<p className="about-info">
						As one of the fastest growing and most dynamic cities in the United States, Orlando offers a
						tremendous quality of life not found anywhere else and serves as one of the best gateways from
						any destination with its standard-setting, award-winning international airport. Isleworth,
						situated in the southwest suburb of Windermere, is conveniently located near world-class
						restaurants, retail and entertainment destinations and the renowned attractions, and just 50
						minutes from Florida beaches.
					</p>
					<img
						src="https://images.squarespace-cdn.com/content/v1/5d235ff1fdd42c0001908e34/1563900016872-ZCCK173A9HGALF9VH63Q/ke17ZwdGBToddI8pDm48kJd9-X8rZ9yYog_UDHDFFiEUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYy7Mythp_T-mtop-vrsUOmeInPi9iDjx9w8K4ZfjXt2drpO7S53G9ijbzPm3No2P9pUlBXDi9i_z_DqEiTQWNSWP7cJNZlDXbgJNE9ef52e8w/isleworth_map.jpg"
						alt="map"
						id="map"
					/>
				</Container>

				<Footer />
			</div>
		);
	}
}

export default About;
