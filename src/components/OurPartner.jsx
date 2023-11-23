import React from "react";

const OurPartner = () => {
  const OurPartner = [
    {
      imgSrc: "/partership-with.jpg",
    },
    {
      imgSrc: "/partership-with.jpg",
    },
    {
      imgSrc: "/partership-with.jpg",
    },
    {
      imgSrc: "/partership-with.jpg",
    },
    {
      imgSrc: "/partership-with.jpg",
    },
    {
      imgSrc: "/partership-with.jpg",
    },
    // Add more team members as needed
  ];

  return (
    <div className="container about-container mb-5 pb-4">
      <h3 className="text-center">
        <span>
          {" "}
          <img src="/lineicon-left.svg" className="img-fluid line-mark" alt="" />{" "}
        </span>
        আমাদের অংশীদার
        <span>
          {" "}
          <img src="/line-icon.svg" className="img-fluid line-mark" alt="" />{" "}
        </span>
      </h3>



      <div className="row g-3 ">

        {
          OurPartner.map((item, i) => (
              <div key={i} className="col-sm-12 col-md-4 col-lg-4 col-xl-2 col-xxl-2 d-flex justify-content-center">
                <img src={item.imgSrc} alt="" />
              </div>
          ))
        }

      </div>
    </div>
  );
};

export default OurPartner;
