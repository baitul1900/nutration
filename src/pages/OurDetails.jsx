import React, { Fragment } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import TeamMember from '../components/TeamMember';
import OutStroy from '../components/OutStroy';
import OurVission from '../components/OurVission';

const OurDetails = () => {
    return (
        <Fragment>
            <Navbar/>
            <OutStroy/>
            <OurVission/>
            <TeamMember/>
            <Footer/>
        </Fragment>
    );
};

export default OurDetails;