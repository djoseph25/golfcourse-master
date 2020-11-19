import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel'
import boy from '../images/boy.jpg';
import tennis from '../images/tennis.jpg'
import laketree from '../images/lake.jpg'
import boat from '../images/boatrace.jpg'
import './Gallery.css';

function SecondRowCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img 
          className="d-block w-50"
          src={boy}
          alt="First slide"
        />

      </Carousel.Item>
      <Carousel.Item>
        <img 
          className="d-block w-50"
          src={laketree}
          alt="Second slide"
        />

 
      </Carousel.Item>
      <Carousel.Item>
        <img 
          className="d-block w-50"
          src={tennis}
          alt="Third slide"
        />
          
      </Carousel.Item>
      <Carousel.Item>
        <img 
          className="d-block w-50"
          src={boat}
          alt="fourth slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}
export default SecondRowCarousel