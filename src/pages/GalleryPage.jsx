import React from 'react';
import Gallery from '../components/Gallery';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
// import Speech from '../components/Speech

const GalleryPage = () => {
    return (
        <div>
            <Navbar/>
            <Gallery/>
            
            <Footer/>
        </div>
    );
};

export default GalleryPage;