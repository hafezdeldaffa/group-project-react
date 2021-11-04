import React from 'react';
import ImageLanding from '../components/ImageLanding';
import Navbar from '../components/Navbar';


const LandingPage = () => {
    return(
        <React.Fragment>
            <Navbar/>
            <ImageLanding/>
        </React.Fragment>
    )
}

export default LandingPage