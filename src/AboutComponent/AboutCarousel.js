import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import first from '../images/pre-1986.jpg';
import second from '../images/founders.jpg';
import third from '../images/history.jpg';
import fourth from '../images/1986.jpg';
import fith from '../images/owner.jpg';
import six from '../images/fairway.jpg';
import seven from '../images/1993.jpg';
import eight from '../images/treelife.jpg';
import nine from '../images/lakes.jpg';
import ten from '../images/2006.jpg';
import eleven from '../images/hole1.jpg';
import twelve from '../images/golfcart.jpg';

function ControlledCarousel() {
	const [index, setIndex] = useState(0);

	const handleSelect = (selectedIndex, e) => {
		setIndex(selectedIndex);
	};

	return (
		<Carousel
			activeIndex={index}
			onSelect={handleSelect}
			style={{ paddingBottom: 200, marginTop: -30 }}
		>
			<Carousel.Item>
				<div className="row">
					<div className="col-3">
						<img className="d-block w-100" src={first} alt="First slide" />
					</div>
					<div className="col-3">
						<img className="d-block w-100" src={second} alt="First slide" />
					</div>
					<div className="col-3">
						<img className="d-block w-100" src={third} alt="First slide" />
					</div>
					<div className="col-3">
						<img className="d-block w-100" src={fourth} alt="First slide" />
					</div>
				</div>
			</Carousel.Item>

			<Carousel.Item>
				<div className="row">
					<div className="col-3">
						<img className="d-block w-100" src={fith} alt="First slide" />
					</div>
					<div className="col-3">
						<img className="d-block w-100" src={six} alt="First slide" />
					</div>
					<div className="col-3">
						<img className="d-block w-100" src={seven} alt="First slide" />
					</div>
					<div className="col-3">
						<img className="d-block w-100" src={eight} alt="First slide" />
					</div>
				</div>
			</Carousel.Item>
			<Carousel.Item>
				<div className="row">
					<div className="col-3">
						<img className="d-block w-100" src={nine} alt="First slide" />
					</div>
					<div className="col-3">
						<img className="d-block w-100" src={ten} alt="First slide" />
					</div>
					<div className="col-3">
						<img className="d-block w-100" src={eleven} alt="First slide" />
					</div>
					<div className="col-3">
						<img className="d-block w-100" src={twelve} alt="First slide" />
					</div>
				</div>
			</Carousel.Item>
		
		</Carousel>
	);
}

export default ControlledCarousel;
