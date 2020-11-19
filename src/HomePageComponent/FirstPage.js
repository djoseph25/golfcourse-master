import React  from 'react';
import Example from './home'
import Header from './Header'
import Carousels from './Carousel.js' 

const FirstPage = (props) => {
    
  

    return (
        <div>
            <Header/>
            <Carousels/>
            <Example/>
     
        </div>
    );
};

export default FirstPage;