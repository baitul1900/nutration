/* eslint-disable react/jsx-key */
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const RecentCard = () => {
    const [activity, setActivity] = useState([]);

    useEffect(()=> {
        axios.get('/public/data.json')
        .then(response => {
            setActivity(response.data.recentActivity);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
    }, []);





    return (
        <div className="container about-container">
            <h3 className='text-center'> <span><img src="/src/assets/img/lineicon-left.svg" alt="" /></span> সাম্প্রতিক প্রবন্ধসমূহ <span><img src="/src/assets/img/line-icon.svg" alt="" /></span></h3>

            <div className="row gy-3">



                {
                    activity.map((item, id)=> {
                        return (
                            <div className="col-sm-12 col-md-3 col-lg-4 col-xl-4 col-xxl-4">
                            <div className="card border-0 bg-transparent" key={id}>
                                <img src={item['img']} className='img-fluid img-recent-act' alt="img" />
                                <div className="card-body card-body-recent">
                                    <p className='card-text'>{item['short-description']}</p>
                                    <Link href="{{ route('service-one') }}" className="view-more-card-btn">
                                        <span className="hover-underline-animation"> আরো পড়ুন  </span>
                                        <svg  viewBox="0 0 46 16" height="10" width="30" xmlns="http://www.w3.org/2000/svg" id="arrow-horizontal">
                                            <path className='text-light' transform="translate(30)" d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z" data-name="Path 10" id="Path_10"></path>
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

export default RecentCard;