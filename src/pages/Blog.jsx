import React, { Fragment, useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import axios from 'axios';

const Blog = () => {

    const [data, setData] = useState([]);

    useEffect(()=> {

        // Fetch data using Axios
        axios.get('/public/data.json')
        .then(response => {
            setData(response.data.blogPost);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
    }, [])



    return (
        <Fragment>
            <Navbar/>
            <div className="container mt-5 pt-5">
                <div className="row">
                <h3 className='text-center'> <span><img src="/src/assets/img/lineicon-left.svg" alt="" /></span> সাম্প্রতিক প্রবন্ধসমূহ <span><img src="/src/assets/img/line-icon.svg" alt="" /></span></h3>

                    {
                        data.map((item, id)=> {
                            return (
                                <div className="col-sm-12 col-md-12 col-lg-4 col-xl-4" key={id}>
                                    <div className="card bg-transparent border-0 ">
                                        <img src={item['img']} className='img-fluid for-blog' alt="" />
                                        <div className="blog-cate w-25">
                                            <p className='blog-c-pra text-center p-2'>{item['category']}</p>
                                        </div>
                                        <div className="card-body p-0 mt-3">
                                            <p className="card-text text-blog">{item['description']}</p>
                                        </div>

                                        <div className="row mt-4">
                                            <div className="col-1">
                                                <img src={item['icon']} alt="" />
                                            </div>
                                            <div className="col-4">
                                                <p className='blog-date'>{item['createdDate']}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                
                </div>
            </div>
            <Footer/>
        </Fragment>
    );
};

export default Blog;