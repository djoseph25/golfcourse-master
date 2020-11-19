import React from "react";
import Col from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Container';
import Container from 'react-bootstrap/Container';
import "./home.css";
import Footer from './Footer'
const Example = (props) => (
	<>
	<Container>
		<Row>
			<Col xs sm md lg="12">
				<h1 className="Isle">AN ISLE OF WORTH</h1>
				<div className="vertical-line"></div>
			</Col>
		</Row>
		<Row className="course-info">
			<Col xs sm md lg="12">
				Spanning 600 acres among Central Florida's Butler Chain of Lakes, Isleworth is recognized
				<br></br> as one of the most prestigious private golf club communities in the world, featuring
				<br></br> championship golf and a collection of amenities paired with extraordinary estate
				homes.
			</Col>
		</Row>
		<Row>
			<Col>
				<button className="club-info">EXPLORE THE CLUB</button>
			</Col>
		</Row>
		<div className="grid-container">
			<div class="grid-item info1">
				<img
					id="offering-image"
					src="https://images.squarespace-cdn.com/content/v1/5d235ff1fdd42c0001908e34/1562686068388-XYVO6RF99EJF2A16B6GC/ke17ZwdGBToddI8pDm48kBYcmRYpiBfepfjbZV58nw1Zw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZamWLI2zvYWH8K3-s_4yszcp2ryTI0HqTOaaUohrI8PIhKXKm8Jles_zIP0CYCT9G5q4RXXu6sTFMJEWy4oLAeMKMshLAGzx4R3EDFOm1kBS/18_IWR_Lot264_MLS_back.jpg?format=1500w"
				/>
			</div>
			<div class="grid-item info">
				{' '}
				<h1 className="view-listing">ISLEWORTH LIVING</h1>
				<p className="course-info2">
					Isleworth presents a range of estate homes within the established community, many<br></br> with
					exquisite views of the championship golf course, lakes or monumental art.
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
					intertwined among pristine lakes and presents one of the longest and most challenging rounds in
					the country.
				</p>
				<button className="show-button">LEARN MORE</button>
			</div>
			<div class="grid-item info1">
				<img
					id="championship-image"
					src="https://images.squarespace-cdn.com/content/v1/5d235ff1fdd42c0001908e34/1562686068388-XYVO6RF99EJF2A16B6GC/ke17ZwdGBToddI8pDm48kBYcmRYpiBfepfjbZV58nw1Zw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZamWLI2zvYWH8K3-s_4yszcp2ryTI0HqTOaaUohrI8PIhKXKm8Jles_zIP0CYCT9G5q4RXXu6sTFMJEWy4oLAeMKMshLAGzx4R3EDFOm1kBS/18_IWR_Lot264_MLS_back.jpg?format=1500w"
				/>
			</div>
		</div>
		<h3 className="statement">
			<i>
				“Isleworth is a statement of excellence – luxury estate homes, <br></br>picturesque lakes and
				preciously manicured gardens.”
			</i>
		</h3>
		<h5 className="unique-statement"> - UNIQUE HOMES</h5>
		
	</Container>
	<Footer />
	</>
);

export default Example;
