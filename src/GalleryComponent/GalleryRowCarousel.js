import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel'
import bull from '../images/bull.jpg';
import flower from '../images/flower.jpg'
import lake from '../images/laketree.jpg'
import redpole from '../images/redpole.jpg'
import './Gallery.css';

function RowCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img 
          className="d-block w-50"
          src={flower}
          alt="First slide"
        />

      </Carousel.Item>
      <Carousel.Item>
        <img 
          className="d-block w-50"
          src={flower}
          alt="Second slide"
        />

 
      </Carousel.Item>
      <Carousel.Item>
        <img 
          className="d-block w-50"
          src={flower}
          alt="Third slide"
        />
          
      </Carousel.Item>
      <Carousel.Item>
        <img 
          className="d-block w-50"
          src={flower}
          alt="fourth slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}
export default RowCarousel