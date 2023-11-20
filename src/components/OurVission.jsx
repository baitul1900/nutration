import axios from 'axios';
import React, { useEffect, useState } from 'react';

const OurVission = () => {
    const [data, setData] = useState([]);

    useEffect(()=> {
        axios.get('/public/data.json')
        .then(response => {
            setData(response.data.ourVission)
        })

        .catch(error => {
            console.error('Error fetching data:', error);
        })
    }, [])





    return (
        <div className="container our-vision-container">
        <div className="row d-flex justify-content-center align-items-center g-0 gy-4">
            <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6">
                {
                    data.map((item, id)=> {
                        return (
                            <div key={id} className='positiong-one'>
                                <h1 className="text-start">{item['title']}</h1>
                                <p className="text-start">{item['description']}</p>
                            </div>
                        )
                    })
                }
            </div>
            <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6">
                {
                    data.map((item, id)=> {
                        return (
                            <div key={id} className='positiong-two'>
                                <img src={item['img']} className='img-fluid' alt="" />
                            </div>
                        )
                    })
                }
            </div>

        </div>
            
        </div>
    );
};

export default OurVission;