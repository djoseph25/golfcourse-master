import React, { Component } from 'react';
import Header from '../HomePageComponent/Header'
import { Row, Col, Container } from "reactstrap";
import Footer from '../HomePageComponent/Footer'
import './Contact.css'
class Contact extends Component {
    state = {  }
    render() { 
        return (
    <div><Header/> 
        <div id='contact'>
            CONTACT
       </div>
       <div id='vertical-line'></div>
       <div class='contact-container'>
           <Row>
           <Col className='col-lg-6 col-md-6 col-sm-12'>
           <p id='contact-title'>ISLEWORTH GOLF & COUNTRY CLUB</p>
           <p id='contact-address'>6100 Payne Stewart Drive Windermere, FL 34786</p>
           <div id='contact-number'>407.909.2000</div>
           <div id='contact-email'><a href=''>info@isleworth.com</a></div>
           </Col>
           <Col className='col-lg-6 col-md-6 col-sm-12'>
           <p id='contact-title'>ISLEWORTH REALTY</p>
           <p id='contact-address'>9350 Conroy Windermere Road Windermere, FL 34786</p>
           <div id='contact-number'>407.876.0111</div>
           <div id='contact-email' ><a href=''>sales@isleworth.com</a></div>
           </Col>
       </Row>
        <div id='vertical-line-2'></div>
        <div id='inquiry'>
           MAKE AN INQUIRY
       </div>
       <div id='vertical-line'></div>
       </div>
       <p id='learn-more-p'>To learn more about Isleworth or to contact our club community, please complete the inquiry form below.</p>
       <p  id='learn-more-p-2'>For employment opportunities, please <span id='contact-email'><a>click here</a></span> to visit our employment website.</p>
       {/* Form Contact Page */}
       <div id='contact-form'>
<form id='contactpage-form'>
           <header id='name'>Name *</header>
        <div className='same-line'>
                <input id='firstname' type='name'/>
                <input id='lastname' type='name' />
        </div>
            <header className='email'>Email *</header> 
         <div>
                <input type='email' id='email'/>
         </div>
            <header id='phone'>Phone *</header>
        <div>               
                <input id='area' type='phone'/>
                <input id='code' type='phone'/>
                <input id='code2' type='phone'/>
        </div>
            <header id='message'>Message *</header>
         <div>
                <input type='text' id='message-box'/>
         </div>
         <select class="form-group col-2">
             <option>Golf</option>
              <option>Membership</option>
               <option>Real Estate</option>
                <option>Special Event</option>
         </select>
         <div><button className='contact-submit-button'>SUBMIT</button></div>   
 </form>

        
       </div>
    <Footer/>   
    </div>
    );
    }
}
 
export default Contact;