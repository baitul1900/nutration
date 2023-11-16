import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer>
                <div className="container">

                    <div className="row">

                        <div className="col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3">

                            <div className="col-12">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="75" height="75" viewBox="0 0 75 75" fill="none">
                                        <circle cx="37.5" cy="37.5" r="37.5" fill="white"/>
                                    </svg>
                            </div>

                            <div className="col-8 text-light mt-2 mb-4">
                                    <p>Lorem ipsum dolor sit amet consectetur. Sem ame porttitoriaculis nec pulvinar. </p>
                            </div>

                            <div className="col-8">
                                <Link className='text-decoration-none text-light' to={'/'}> <i className="pi pi-facebook pe-2"></i></Link>
                                <Link className='text-decoration-none text-light' to={'/'}> <i className="pi pi-linkedin px-2 "></i></Link>
                                <Link className='text-decoration-none text-light' to={'/'}> <i className="pi pi-twitter px-2"></i></Link>
                                <Link className='text-decoration-none text-light' to={'/'}> <i className="pi pi-whatsapp px-2"></i></Link>
                            </div>


                        </div>


                        <div className="col-sm-12 col-md-3 col-lg-2 col-xl-2 col-xxl-2">
                            <div className="row">
                            <div className="col-12 text-start text-light">
                                        <h4>Quick Menu</h4>
                                    </div>
                            </div>
                                    
                                    <div className="row mt-4">
                                        <div className="col-12 d-flex justify-content-start">
                                            <ul className="list-unstyled text-left">
                                            <li className='mb-sm-1 mb-md-2'>
                                                <a className="text-decoration-none text-light" href="/">Home</a>
                                            </li>
                                            <li className='mb-sm-1 mb-md-2'>
                                                <a className="text-decoration-none text-light" href="/services">Services</a>
                                            </li>
                                            <li className='mb-sm-1 mb-md-2'>
                                                <a className="text-decoration-none text-light" href="/career">Career</a>
                                            </li>
                                            <li className='mb-sm-1 mb-md-2'>
                                                <a className="text-decoration-none text-light" href="/about">About Us</a>
                                            </li>
                                            <li className='mb-sm-1 mb-md-2'>
                                                <a className="text-decoration-none text-light" href="/contact">Contact</a>
                                            </li>
                                            </ul>
                                        </div>
                                    </div>
                        </div>





                        <div className="col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
                        <div className="row">
                            <div className="col-12 text-start text-light">
                                        <h4>About Us</h4>
                                    </div>
                            </div>
                                    
                                    <div className="row mt-4">
                                        <div className="col-12 d-flex justify-content-start">
                                            <ul className="list-unstyled text-left ">
                                            <li className='mb-sm-1 mb-md-2'>
                                                <a className="text-decoration-none text-light" href="/">Mission</a>
                                            </li>
                                            <li className='mb-sm-1 mb-md-2'>
                                                <a className="text-decoration-none text-light" href="/services">Vision</a>
                                            </li>
                                            <li className='mb-sm-1 mb-md-2'>
                                                <a className="text-decoration-none text-light" href="/career">Why Us</a>
                                            </li>
                                            <li className='mb-sm-1 mb-md-2'>
                                                <a className="text-decoration-none text-light" href="/about">Our employees</a>
                                            </li>
                                            <li className='mb-sm-1 mb-md-2'>
                                                <a className="text-decoration-none text-light" href="/contact">Board of directors</a>
                                            </li>
                                            </ul>
                                        </div>
                                    </div>
                        </div>




                        <div className="col-sm-12 col-md-3 col-lg-4 col-xl-4 col-xxl-4 justify-content-center">
                        <div className="col-12 text-light">
                                    <h4>Subscribe Us</h4>
                            </div>

                            <div className="col-8 text-light mt-2 mb-4">
                                    <p>Get Business news, tip and solutions to your problems from our experts.</p>
                            </div>

                            <div className="col-12">
                                <input type="text" className='form-control' placeholder='Enter Your Email:' />
                            </div> 

                            <div className="col-12 mt-4">
                            <Link className='text-decoration-none' to={'/'}> <a className="text-decoration-none text-light" href="" className='btn subscribe-btn w-100'>Subscribe</a></Link>
                            </div>
                        </div>
                    </div>



                </div>            
        </footer>
    );
};

export default Footer;