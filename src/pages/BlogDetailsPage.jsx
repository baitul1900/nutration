import React, { Fragment } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import BlogDetails from '../components/BlogDetails';

const BlogDetailsPage = () => {
    return (
        <Fragment>
            <Navbar/>
            <BlogDetails/>
            <Footer/>
        </Fragment>
    );
};

export default BlogDetailsPage;