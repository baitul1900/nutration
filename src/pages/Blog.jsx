import React, { Fragment, useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import BlogTabs from '../components/BlogTabs';

const Blog = () => {

    



    return (
        <Fragment>
            <Navbar/>
                <BlogTabs/>
            <Footer/>
        </Fragment>
    );
};

export default Blog;