import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Carou from './GalleryCarousel';
import {Container } from 'reactstrap';
import Header from '../HomePageComponent/Header';
import bull from '../images/bull.jpg';
import fairway from '../images/terrain.jpg.jpg';
import entrance from '../images/entrance.jpg';
import statue from '../images/statue.jpg.jpg';
import lake from '../images/lake2.jpg';
import Footer from '../HomePageComponent/Footer'
import './Gallery.css';
import GalleryRow from './GalleryRow'
import ActivityGallery from './ActivityGallery'
import SecondGalleryRow from './SecondGalleryRow'

function Gallery() {
  const [show, setShow] = useState(false);

  return (
    <>
    <Header/>
        <Container>
            <div className='row mt-5'>
                <div className='col-6'>
                <img src={bull} alt='bullimages' id='bullimage'/>
                </div>
                <div className='col-3' onClick={() => setShow(true)} >
                <img src={fairway} alt='fairway' id='modalpic'/>
                 <img src={statue} alt='fairway'id='modalpic'/>
                </div>
                 <div className='col-3' onClick={() => setShow(true)}>
                <img src={entrance} alt='fairway' id='modalpic'/>
                <div className='col-3'></div>
                 <img src={lake} alt='fairway' id='modalpic'/>
                </div> 
            </div>
        </Container>
      
      <Modal className='size'
        size="xl"
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-70w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton>
        
        </Modal.Header>
        <Modal.Body id="body"> 
           <Carou/>  
        </Modal.Body>
      </Modal>
      <p className='Gallerystatement'>“One of the finest club communities in the country.”</p>
      <p className='Report'>-ROBB REPORT</p>
     <GalleryRow/>
     <ActivityGallery/>
     <SecondGalleryRow/>
     <Footer/>
    </>
  );
}

export default Gallery;