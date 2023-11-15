import BBmiCalculator from "./BBmiCalculator";

const BmiCalc = () => {
    
    return (
        <section className='abt-sec  about-container'>
                 <h3 className='text-center'> <span><img src="/src/assets/img/lineicon-left.svg" alt="" /></span> বিএমআই এর সাহায্যে পুষ্টির অবস্থা  <span><img src="/src/assets/img/line-icon.svg" alt="" /></span></h3>
            <div className="container-fluid bg-white">
                
                 <div className="container">
                 <div className="row g-0 d-flex justify-content-center align-items-center">
                    <div className="col-sm-12 col-md-6 col-lg-4 col-xl-6 bmi-one-col">
                            <h4 className="mb-3">বিএমআই ক্যাটাগরি</h4>   
                            <p className="pera mb-5">জাতীয় পুষ্টিসেবা, জনস্বাস্থ্য পুষ্টি প্রতিষ্ঠান এবং মাধ্যমিক ও উচ্চ শিক্ষিত (মাউশি) অধিদপ্তর যৌথ উদ্যোগে এবং ইউনিসেফের কারিগরী ও আর্থিক সহায়তায়।</p> 

                            <p><span>অপুষ্টি  =  </span> <span className="span-two">১৮.৯৯</span>   </p>
                            <p><span>পুষ্টি =  </span> <span className="span-two">১৮.৫ - ২৪.৯</span>    </p>
                            <p><span>অতিপুষ্টি  =  </span> <span className="span-two">২৫ - ২৯.৯</span> </p>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-5 col-xl-5 justify-content-center">
                           <BBmiCalculator/> 
                    </div>
                </div>
                 </div>
                
            </div>
        </section>
    );
};

export default BmiCalc;