import { Link } from "react-router-dom";

const AboutUs = () => {
  const data = [
    {
      img: "/about-section.jpg",
      description:
        "জাতীয় পুষ্টিসেবা, জনস্বাস্থ্য পুষ্টি প্রতিষ্ঠান এবং মাধ্যমিক ও উচ্চ শিক্ষিত (মাউশি) অধিদপ্তর যৌথ উদ্যোগে এবং ইউনিসেফের কারিগরী ও আর্থিক সহায়তায় (এই কৈশোরকালীন পুষ্টি কার্যক্রম বাস্তবায়নের গাইডলাইন ২০২০) টি তৈরী করা হয়েছে। জাতীয় পুষ্টিসেবা, জনস্বাস্থ্য পুষ্টি প্রতিষ্ঠান এবং মাধ্যমিক ও উচ্চ শিক্ষিত (মাউশি) অধিদপ্তর যৌথ উদ্যোগে এবং ইউনিসেফের কারিগরী ও আর্থিক সহায়তায় (এই কৈশোরকালীন পুষ্টি কার্যক্রম বাস্তবায়নের গাইডলাইন ২০২০) টি তৈরী করা হয়েছে। ",
    },
  ];

  return (
    <section className="abt-sec">
      <div className="container about-container">
        <h3 className="text-center">
          {" "}
          <span>
            <img
              src="/src/assets/img/lineicon-left.svg"
              className="img-fluid line-mark"
              alt=""
            />
          </span>{" "}
          আমাদের সম্পর্কে জানুন{" "}
          <span>
            <img
              src="/src/assets/img/line-icon.svg"
              className="img-fluid line-mark"
              alt=""
            />
          </span>
        </h3>
        <div className="row g-0 d-flex justify-content-center align-items-center">
          {data.map((item, i) => {
            return (
              <>
                <div className="col-sm-12 col-md-12 col-lg-6 ">
                  <img src={item["img"]} className="img-fluid pos-one" alt="" />
                </div>
                <div className="col-sm-12 col-md-12 col-lg-6 ">
                  <div className="card border-0" key={i}>
                    <div className="card-body pos-two">
                      <p className="m-0 about-description">
                        {item["description"]}
                      </p>
                      <Link to={"/"} className="btn read-more">
                        {" "}
                        আরও পড়ুন{" "}
                      </Link>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
