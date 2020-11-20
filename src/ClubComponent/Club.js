import React, { Component } from 'react';
import Header from '../HomePageComponent/Header';
import Footer from '../HomePageComponent/Footer';
import tennis from '../images/tennis.jpg';
import Container from 'react-bootstrap/Container';
import './Club.css';
class Club extends Component {
	state = {};
	render() {
		return (
			<div>
				<Header />
				<div>
					<Container style={{ marginTop: 125 }}>
						<div className="grid-container">
							<div className="grid-item info1">
								<img
									id="offering-image"
									src="https://images.squarespace-cdn.com/content/v1/5d235ff1fdd42c0001908e34/1565815042818-D6UVTQB3B9XODGTSSTA3/ke17ZwdGBToddI8pDm48kBpxxC1FfgJSVk71CfABFup7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UfoA3W_2NzDCbUi0R9mVD9CcC4t6MgpLa2PmNCnpHNR0RY5byGCXiM996O21yNVyKA/careysheffieldIW_0004.jpg"
									alt="image"
								/>
							</div>
							<div className="grid-item clubinfo">
								{' '}
								<h1 className="view-listing">UNMATCHED CLUB</h1>
								<p className="club-infos">
									Isleworth blends the finest sporting activities, amenities and exceptional service to
									create an unparalleled club experience. At the center of the community is the
									89,000-square-foot Mediterranean-style Clubhouse with a fitness center and spa, a variety
									of restaurants, and meeting and event spaces. Recognized as one of the Top 100 Platinum
									Clubs of the World, Isleworth continues to set a standard in club excellence.
								</p>
							</div>
						</div>
						<div className="grid-container">
							<div className="grid-item info2">
								{' '}
								<h1 className="show-listing">AMENITIES</h1>
								<p className="golf-info">
									The combination of sporting and social amenities within Isleworth creates a community where
									all ages can enjoy and participate in the club.
								</p>
								<button className="show-button">LEARN MORE</button>
							</div>
							<div className="grid-item info1">
								<img id="championship-image" src={tennis} />
							</div>
						</div>
						<div className="grid-container">
							<div className="grid-item info1">
								<img
									id="offering-image"
									src="https://images.squarespace-cdn.com/content/v1/5d235ff1fdd42c0001908e34/1565814817621-K1SZ0PL7CMBLY73DOW32/ke17ZwdGBToddI8pDm48kBpxxC1FfgJSVk71CfABFup7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UfoA3W_2NzDCbUi0R9mVD9CcC4t6MgpLa2PmNCnpHNR0RY5byGCXiM996O21yNVyKA/csheffieldISWRTBROCH%2B0003.jpg"
									alt="image"
								/>
							</div>
							<div class="grid-item clubinfo">
								{' '}
								<h1 className="view-listing">GOLF</h1>
								<p className="club-infos">
									Home to one of the most iconic golf courses in the country, Isleworth boasts a championship
									course complemented by world-class practice facilities.
								</p>
								<button className="viewing-button">LEARN MORE</button>
							</div>
						</div>
						<div className="grid-container">
							<div className="grid-item info2">
								{' '}
								<h1 className="show-listing">SPECIAL GATHERINGS</h1>
								<p className="golf-info">
									The ideal location for any corporate meeting, social function or wedding, Isleworth's
									facilities provide a beautiful backdrop.
								</p>
								<button className="show-button">INQUIRE</button>
							</div>
							<div className="grid-item info1">
								<img
									id="championship-image"
									src="https://images.squarespace-cdn.com/content/v1/5d235ff1fdd42c0001908e34/1565814625928-QOMJJSW7WZ7I63CQL5UX/ke17ZwdGBToddI8pDm48kBpxxC1FfgJSVk71CfABFup7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UfoA3W_2NzDCbUi0R9mVD9CcC4t6MgpLa2PmNCnpHNR0RY5byGCXiM996O21yNVyKA/careysheffieldisleworth_0191.jpg"
									alt="image"
								/>
							</div>
						</div>
						<div className="grid-container">
							<div className="grid-item info1">
								<img
									id="championship-image"
									src="https://authenticorlando.com/wp-content/uploads/isleworth-00.jpg"
									alt="image"
								/>
							</div>
							<div className="grid-item clubinfos">
								{' '}
								<h1 className="view-listing">MEMBERSHIP</h1>
								<p className="club-infos">
									Discover the benefits of joining Isleworth Golf & Country Club.
								</p>
								<button className="viewing-button">LEARN MORE</button>
							</div>
						</div>
					</Container>
				</div>
				<Footer />
			</div>
		);
	}
}

export default Club;
