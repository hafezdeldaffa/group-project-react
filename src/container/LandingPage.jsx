import React from 'react';
import ImageLanding from '../components/ImageLanding';
import Navbar from '../components/Navbar';
import ServiveInfo from '../components/ServiceInfo';
import SymptomSection from '../components/SymptomSection';


const LandingPage = () => {
    return(
        <React.Fragment>
            <Navbar/>
            <ImageLanding/>
            <ServiveInfo/>
            <SymptomSection/>
        </React.Fragment>
    )
}

export default LandingPage