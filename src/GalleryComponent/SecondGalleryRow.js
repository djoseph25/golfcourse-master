import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import SecondRowCarousel from './SecondGalleryCarousel';
import {Container } from 'reactstrap';
import boy from '../images/boy.jpg';
import tennis from '../images/tennis.jpg'
import laketree from '../images/beautifullake.jpg'
import boat from '../images/boatrace.jpg'
import './Gallery.css';





function SecondGalleryRow() {
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
           <SecondRowCarousel/>  
        </Modal.Body>
      </Modal>
      <Container>
       <div className='row' onClick={() => setShow(true)}>
         <div className='col-md-3 col-sm-3'><img src={boy} alt='lake' id='modalpic2'/></div>
         <div className='col-md-3 col-sm-3'><img src={laketree} alt='flower' id='modalpic2'/></div>
         <div className='col-md-3 col-sm-3'><img src={tennis} alt='lake' id='modalpic2'/></div>
         <div className='col-md-3 col-sm-3'><img src={boat} alt='pole' id='modalpic2'/></div>
       </div>
       </Container>
    </>
  );
}

export default SecondGalleryRow;