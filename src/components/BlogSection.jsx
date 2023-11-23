import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


const BlogSection = () => {
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
        <div className="container mt-5 pt-5 about-container">
                <div className="row gy-3">
                <h3 className='text-center'> <span><img src='../assets/img/lineicon-left.svg' alt="" /></span> সাম্প্রতিক প্রবন্ধসমূহ <span><img src="/src/assets/img/line-icon.svg" alt="" /></span></h3>

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
                                            <h4 className='card-title pb-1'>{item['title']}</h4>
                                            <div className='mb-3 name-date'><span className='pe-2'>{item['createdBy']} {" "} {" "}</span> | <span className='ps-2'>{item['createdDate']}</span></div>
                                            <p className="card-text text-blog">{item['description']}</p>

                                            <Link to={'/blog-details'} className="view-more-card-btn">
                                                <span className="hover-underline-animation"> আরো পড়ুন  </span>
                                                <svg viewBox="0 0 46 16" height="10" width="30" xmlns="http://www.w3.org/2000/svg" id="arrow-horizontal">
                                                <path transform="translate(30)" d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z" data-name="Path 10" id="Path_10"></path>
                                                </svg>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                
                </div>
            </div>
    );
};

export default BlogSection;