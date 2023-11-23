import axios from 'axios';
import React, { useState, useEffect } from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import Loader from './Loader';

const Speech = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get('/public/data.json')
        .then((response)=> {
            setData(response.data.speech)
            setLoading(false);
        })
        .catch((error)=> {
            console.error('Error fetching data:', error);
            setLoading(true);
        })

    },[])

    

    const options = {
        loop: true,
        margin: 10,
        nav: false,
        responsive: {
          0: {
            items: 1
          },
          600: {
            items: 1
          },
          1000: {
            items: 1
          }
        }
      };



    return (
        <div className='container about-container'>
            <h3 className='text-center'>
        <span> <img src="/src/assets/img/lineicon-left.svg" className="img-fluid line-mark" alt="" /> </span>
        আমাদের বাণী  
        <span> <img src="/src/assets/img/line-icon.svg" className="img-fluid line-mark" alt="" /> </span>
      </h3>

{loading ? (
        <Loader /> // Render the Loader component while data is loading
      ) : (
        <OwlCarousel className='owl-theme' {...options}>
{
                    data.map((item, id)=> {
                        return (
                            // eslint-disable-next-line react/jsx-key
                            <div className="row g-3" key={id}>
                                
                                <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 p-2">
                                    <div className="card border-0 bg-transparent">
                                        <div className="row">
                                            <div className="col-3 col-lg-1 align-self-center">
                                                <img src={item['logo']} loading="lazy" className='img-fluid ' alt="logo" />
                                            </div>
                                            <div className="col-4 col-lg-6 align-self-center">
                                                <p className='mb-0 fw-bold'>{item['title']}</p>
                                                <p className='mb-0 fw-bold'>{item['subTitle']}</p>
                                                <p className='mb-0 fw-bold'>{item['designation']}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6  p-2">
                                        <p>{item['paraOne']}</p>

                                        <p>{item['paraTwo']}</p>

                                        <p>{item['paraThree']}</p>

                                        <p>{item['paraFour']}</p>

                                        <p>{item['paraFive']}</p>
                                </div>


                                <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6  p-2">
                                    <p>{item['paraSix']}
                                    </p>

                                    <p>{item['paraSeven']}
                                    </p>

                                    <p>{item['paraEight']}
                                    </p>

                                    
                                    <div className="card border-0 bg-transparent mt-5 pt-5 ">
                                        <div className="row d-flex justify-content-center">
                                            <div className="col-3 align-self-center">
                                                <img src={item['singnature']} loading="lazy" className='img-fluid' alt="" />
                                                <p className='mb-0 fw-bold pt-2'>{item['name']}</p>
                                            </div>

                                            <div className="col-5 align-self-center">
                                                <img src={item['img']} loading="lazy" className='img-fluid mx-auto w-50' alt="logo" />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                           </div>   
                        )
                    })
                }
                
</OwlCarousel>
      )}


                
            

        </div>
    );
};

export default Speech;