import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import ActivityCarousel from './ActivityGalleryCarousel';
import {Container } from 'reactstrap';
import garden from '../images/garden1.jpg';
import plant from '../images/plant.jpg';
import tree from '../images/tree.jpg';
import soccer from '../images/soccer.jpg';
import camper from '../images/camper.jpg';
import './Gallery.css';


function ActivityGallery() {
  const [show, setShow] = useState(false);

  return (
			<>
				<Container>
					<div className="row ">
						<div className="col-3" onClick={() => setShow(true)}>
							<img src={plant} alt="fairway" id="modalpic1" />
							<img src={tree} alt="fairway" id="modalpic1"  />
						</div>
						<div className="col-3" onClick={() => setShow(true)}>
							<img src={soccer} alt="fairway" id="modalpic1" />
							<div className="col-3"></div>
							<img src={garden} alt="fairway" id="modalpic1" />
						</div>
						<div className="col-6">
							<img src={camper} alt="bullimages" id="boatimage" />
						</div>
					</div>
				</Container>

				<Modal
					className="size"
					size="xl"
					show={show}
					onHide={() => setShow(false)}
					dialogClassName="modal-70w"
					aria-labelledby="example-custom-modal-styling-title"
				>
					<Modal.Header closeButton></Modal.Header>
					<Modal.Body id="body">
						<ActivityCarousel />
					</Modal.Body>
				</Modal>
				<p className="Islestatement">
					“Isleworth represents the best in living. If golf is your sport, there is no better place.”
				</p>
				<p className="Owner">— PAULA CREAMER</p>
			</>
		);
}

export default ActivityGallery