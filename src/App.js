import React from 'react';
import FirstPage from './HomePageComponent/FirstPage';
import { Route, Switch } from "react-router-dom";
// import Example from './HomePageComponent/home'
import Login from './LoginPageComponent/LoginPage';
import Contact from './ContactComponent/Contact';
import Gallery from './GalleryComponent/Gallery';
import Club from './ClubComponent/Club';
import About from './AboutComponent/About';
import RealEstate from './RealEstateComponent/RealEstate';


function App() {
  return (
    <div className="App">
    
     
    
     <Switch>
      
     <Route exact path="/" component={FirstPage} />
        <Route  path="/About" component={About} />
        <Route  path="/Club" component={Club} />
        <Route path="/RealEstate" component={RealEstate} />
        <Route path="/Gallery" component={Gallery} />
        <Route  path="/Contact" component={Contact} />
        <Route  path="/Login" component={Login} />
      </Switch>
    </div>
  );
}

export default App;
