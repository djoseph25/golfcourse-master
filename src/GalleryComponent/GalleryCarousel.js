import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel'
import fairway from '../images/terrain.jpg.jpg';
import entrance from '../images/entrance.jpg'
import statue from '../images/statue.jpg.jpg'
import lake from '../images/lake.jpg'
import './Gallery.css'

function Carou() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block w-50"
          src={fairway}
          alt="First slide"
        />

      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-50"
          src={entrance}
          alt="Second slide"
        />

 
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-50"
          src={statue}
          alt="Third slide"
        />
          
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-50"
          src={lake}
          alt="fourth slide"
        />

     
      </Carousel.Item>
    </Carousel>
  );
}
export default Carou