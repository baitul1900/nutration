import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const BlogDetails = () => {
    const [blog, setBlog] = useState([]);

    useEffect(()=> {
        axios.get('/data.json')
        .then(response => {
            setBlog(response.data.blogDetails);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        })
    }, [])


    return (
        <div className="container mt-5 pt-5">
            {
                blog.map((item, id)=> (
                    <div className="row mt-4 pt-4" key={id}>

                        <div className="col-sm-12 col-md-9 col-lg-9 col-xl-9 col-xxl-9">
                            <h1>{item['title']}</h1>
                        </div>

                        <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 mt-3">
                            <div className="card border-0 bg-transparent">
                                <div className="row">
                                    <div className="col-1 pe-0 align-self-center">
                                        <img src={item['userImg']} className='img-fluid' alt="img" />
                                    </div>
                                    <div className="col-4 ps-2">
                                       <p className='mb-0'>{item['creatorName']}</p>
                                       <p className='mb-0'>{item['createdDate']}</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 d-flex justify-content-end align-self-end">
                            <div className="row g-5">
                                <div className="col-1">
                                    <Link to={'/'}><i className="pi pi-thumbs-up-fill"></i></Link>
                                </div>
                                <div className="col-1">
                                    <Link to={'/'}><i className="pi pi-thumbs-down-fill"></i></Link>
                                </div>
                                <div className="col-1">
                                    <Link to={'/'}><i className="pi pi-share-alt"></i></Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 mt-4">
                            <img src={item['img']} className='img-fluid w-100' alt="" />
                        </div>

                        <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 mt-4">
                            <p>{item['shortDescription']}</p>
                        </div>

                        <div className="col-sm-12 col-md-5 col-lg-5 col-xl-5 col-xxl-5 mt-4">
                            <h2>{item['subTitle']}</h2>
                        </div>

                        <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 mt-4">
                            <p>{item['description']}</p>
                        </div>


                    </div>
                ))
            }
        </div>
    );
};

export default BlogDetails;