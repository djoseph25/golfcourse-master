import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel'
import bull from '../images/bull.jpg';
import garden from '../images/garden.jpg';
import plant from '../images/plant.jpg';
import tree from '../images/tree.jpg';
import soccer from '../images/soccer.jpg';
import './Gallery.css'

function ActivityCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block w-50"
          src={garden}
          alt="First slide"
        />

      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-50"
          src={plant}
          alt="Second slide"
        />

 
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-50"
          src={tree}
          alt="Third slide"
        />
          
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-50"
          src={soccer}
          alt="fourth slide"
        />

     
      </Carousel.Item>
    </Carousel>
  );
}
export default ActivityCarousel