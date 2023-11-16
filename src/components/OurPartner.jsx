import React from "react";

const OurPartner = () => {
  const OurPartner = [
    {
      imgSrc: "/src/assets/img/partership-with.jpg",
    },
    {
      imgSrc: "/src/assets/img/partership-with.jpg",
    },
    {
      imgSrc: "/src/assets/img/partership-with.jpg",
    },
    {
      imgSrc: "/src/assets/img/partership-with.jpg",
    },
    {
      imgSrc: "/src/assets/img/partership-with.jpg",
    },
    {
      imgSrc: "/src/assets/img/partership-with.jpg",
    },
    // Add more team members as needed
  ];

  return (
    <div className="container about-container mb-5 pb-4">
      <h3 className="text-center">
        <span>
          {" "}
          <img src="/src/assets/img/lineicon-left.svg" alt="" />{" "}
        </span>
        আমাদের অংশীদার
        <span>
          {" "}
          <img src="/src/assets/img/line-icon.svg" alt="" />{" "}
        </span>
      </h3>



      <div className="row">

        {
          OurPartner.map((item, i) => (
              <div key={i} className="col-sm-12 col-md-4 col-lg-2 col-xl-2 col-xxl-2">
                <img src={item.imgSrc} alt="" />
              </div>
          ))
        }

      </div>
    </div>
  );
};

export default OurPartner;
