import React, { Fragment } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AboutUs from '../components/AboutUs'
import { Link } from 'react-router-dom';

const OurDetails = () => {
    return (
        <Fragment>
            <Navbar/>
            <div className="container-fluid mt-5 pt-5">
                <div className="container">
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item active" aria-current="page">
                            <Link to={'/'} className={({isActive})=>isActive ? 'active-item' : 'inactive'}>Home</Link>
                        </li>
                        <li className="breadcrumb-item active" aria-current="page"><Link to={'/ourDeatils'} className='text-decoration-none text-dark'>About Us</Link></li>
                    </ol>
                </nav>
                </div>
            </div>
            <AboutUs/>
            <Footer/>
        </Fragment>
    );
};

export default OurDetails;