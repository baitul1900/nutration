import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const BlogTabs = () => {
  const [data, setData] = useState([]);
  const [dataNews, setDataNews] = useState([]);
  const [dataActivity, setDataActivity] = useState([]);

  useEffect(() => {
    // Fetch data using Axios
    axios
      .get("/data.json")
      .then((response) => {
        setData(response.data.blogPost);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  useEffect(() => {
    // Fetch data using Axios
    axios
      .get("/data.json")
      .then((response) => {
        setDataNews(response.data.blogPostNews);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  useEffect(() => {
    // Fetch data using Axios
    axios
      .get("/data.json")
      .then((response) => {
        setDataActivity(response.data.blogPostActivity);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);




  return (
    <div className="container mt-5 pt-5 about-container">
      <div className="row mb-5 mt-5 pt-5">
        <div className="col-sm-12 col-md-4 col-lg-6 col-xl-6 col-xxl-6">
          <h1>
            আমাদের পুষ্টিকর প্রচেষ্টা এবং <br /> সর্বশেষ স্বাস্থ্য উদ্যোগ
            সম্পর্কে <br /> আপডেট থাকুন
          </h1>
        </div>
        <div className="col-sm-12 col-md-4 col-lg-6 col-xl-6 col-xxl-6 justify-content-end">
          <p>
            আমাদের সংবাদ এবং ক্রিয়াকলাপ বিভাগের সাথে পুষ্টির সর্বশেষতম আবিষ্কার
            করুন। আপনার সুস্থতা বাড়ানোর জন্য যুগান্তকারী গবেষণা, খাদ্যতালিকাগত
            প্রবণতা এবং স্বাস্থ্য টিপস সম্পর্কে অবগত থাকুন। পুষ্টিকে মজাদার এবং
            অ্যাক্সেসযোগ্য করার জন্য ডিজাইন করা ভার্চুয়াল রান্নার ক্লাস থেকে
            সুস্থতার চ্যালেঞ্জ পর্যন্ত আমাদের আকর্ষক কার্যকলাপগুলি অন্বেষণ করুন৷
            আমরা মূল্যবান অন্তর্দৃষ্টি ভাগ করে নেওয়ার জন্য প্রতিশ্রুতিবদ্ধ,
            আপনাকে একটি স্বাস্থ্যকর জীবনধারার জন্য জ্ঞাত পছন্দ করার ক্ষমতা
            দিয়ে। পুষ্টির বিবর্তিত বিশ্বের সাথে সংযুক্ত থাকার জন্য আমাদের ব্লগ
            পোস্ট, ইভেন্ট হাইলাইট এবং সম্প্রদায়ের উদ্যোগগুলিতে ডুব দিন। উন্নত
            স্বাস্থ্য এবং পুষ্টি, একটি সময়ে একটি সংবাদ আপডেট এবং কার্যকলাপের
            দিকে যাত্রায় আমাদের সাথে যোগ দিন!
          </p>
        </div>
      </div>

      
<div className="container  row
justify-content-start mt-5">
        
<div className="col-sm-12 col-md-5 col-lg-5 col-xl-5">
<ul
          className="nav nav-pills mb-3 d-flex justify-content-around"
          id="pills-tab"
          role="tablist"
        >
          <li className="nav-item" role="presentation">
            <button
              className="nav-link active"
              id="pills-home-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-home"
              type="button"
              role="tab"
              aria-controls="pills-home"
              aria-selected="true"
            >
              ব্লগ 
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link"
              id="pills-profile-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-profile"
              type="button"
              role="tab"
              aria-controls="pills-profile"
              aria-selected="false"
            >
              নিউজ
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link"
              id="pills-contact-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-contact"
              type="button"
              role="tab"
              aria-controls="pills-contact"
              aria-selected="false"
            >
              {" "}
              কার্যক্রম
            </button>
          </li>
        </ul>
</div>
       

        <div className="tab-content" id="pills-tabContent">
          <div
            className="tab-pane fade show active"
            id="pills-home"
            role="tabpanel"
            aria-labelledby="pills-home-tab"
          >
             <div className="row mt-2 gy-5">
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
          <div
            className="tab-pane fade"
            id="pills-profile"
            role="tabpanel"
            aria-labelledby="pills-profile-tab"
          >
            <div className="row mt-2 gy-5">
                    {
                       dataNews.map((item, id)=> {
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
          <div
            className="tab-pane fade"
            id="pills-contact"
            role="tabpanel"
            aria-labelledby="pills-contact-tab"
          >
            
            <div className="row mt-2 gy-5">
                    {
                       dataActivity.map((item, id)=> {
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
        </div>
      </div>












    </div>
  );
};

export default BlogTabs;
