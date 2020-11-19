import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import RowCarousel from './GalleryRowCarousel';
import {Container } from 'reactstrap';
import lake from '../images/lake2.jpg';
import flower from '../images/flower.jpg'
import laketree from '../images/beautifullake.jpg'
import redpole from '../images/redpole.jpg'
import './Gallery.css';





function GalleryRow() {
  const [show, setShow] = useState(false);

  return (
    <> 
      <Modal className='size'
        size="xl"
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-100w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton>
        {/* close button */}
        </Modal.Header>
        <Modal.Body id="body"> 
           <RowCarousel/>  
        </Modal.Body>
      </Modal>
      <Container>
       <div className='row' onClick={() => setShow(true)}>
         <div className='col-md-3 col-sm-3'><img src={laketree} alt='lake' id='modalpic2'/></div>
         <div className='col-md-3 col-sm-3'><img src={flower} alt='flower' id='modalpic2'/></div>
         <div className='col-md-3 col-sm-3'><img src={lake} alt='lake' id='modalpic2'/></div>
         <div className='col-md-3 col-sm-3'><img src={redpole} alt='pole' id='modalpic2'/></div>
       </div>
       </Container>
        <p className='GalleryRowStatement'>“Ranked as a top private golf club community in the U.S.”</p>
      <p className='Travel'>-TRAVEL+LEISURE GOLF MAGAZINE</p>
    </>
  );
}

export default GalleryRow;