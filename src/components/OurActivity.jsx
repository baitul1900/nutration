import React from 'react';

const OurActivity = () => {
    const data = [
        {   
            id : "01",
            icon : "/healthy-food.png",
            description: "স্বাস্থ্যকর খাদ্যভাস উন্নয়নের পুষ্টি শিক্ষা "
        },
        {   
            id : "02",
            icon : "/weight-management.png",
            description: " ওজন, উচ্চতা এবং বিএমআই মনিটরিং   "
        },

        {   
            id : "03",
            icon : "/truck.png",
            description: "সাপ্তাহিক আয়রণ ফলিক এসিড ট্যাবলেট সরবরাহ (WIFA) "
        },
        
        {   
            id : "04",
            icon : "/workout-machine.png",
            description: " শরীরচর্চা কার্যক্রম প্রচার "
        },
        {   
            id : "05",
            icon : "/qa1.png",
            description: " কৃমি নিয়ন্ত্রণ কার্যক্রম"
        },
        {   
            id : "06",
            icon : "/qa1.png",
            description: " বিদ্যালয় ও স্বাস্থ্যকেন্দ্রের মধ্যে রেফারাল পদ্ধতি স্থাপন "
        },
    ]


    return (
        <section className='our-activity-sec'>
            <div className="container our-activity-container">
                 <h3 className='text-center'> <span><img src="/lineicon-left.svg" className="img-fluid line-mark" alt="" /></span> আমাদের কার্যক্রম <span><img src="/line-icon.svg" className="img-fluid line-mark" alt="" /></span></h3>
                <div className="row d-flex justify-content-center align-items-center">
                    {
                        data.map((item, i)=> {
                            return (
                                // eslint-disable-next-line react/jsx-key
                                <div className="col-lg-4 col-sm-12 col-md-6">
                                    <div className="card activity-card" key={i.toString()}>
                                        <div className="row g-2 mb-4">
                                            <div className="col-2 align-self-center">
                                                <img src={item['icon']} className='img-fluid' alt="icons" />
                                            </div>
                                            <div className="col-8 align-self-center">
                                                <p className='m-0 ps-3'>{item['description']}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    );


};

export default OurActivity;