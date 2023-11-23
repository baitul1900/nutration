import axios from "axios";
import React, { useEffect, useState } from "react";

const CurePreventionOtipusti = () => {
  const [issue, setIssues] = useState([]);

  const [resolve, setResolve] = useState([]);

  useEffect(() => {
    // Fetch data using Axios
    axios
      .get("/data.json")
      .then((response) => {
        setIssues(response.data.issueOtiPusti);
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
        setResolve(response.data.resolveOtipusti);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <section className="abt-sec  about-container pt-5">
      <h3 className="text-center">
        {" "}
        <span>
          <img
            src="img/lineicon-left.svg"
            className="img-fluid line-mark"
            alt=""
          />
        </span>{" "}
        অতিপুষ্টির কারণে সমস্যা ও করণীয় সমূহ{" "}
        <span>
          <img
            src="/line-icon.svg"
            className="img-fluid line-mark"
            alt=""
          />
        </span>
      </h3>

      <div className="container nutration-container">
        <div className="row gy-5 justify-content-center align-items-center">
          <div className="col-sm-12 col-md-12 col-lg-4 col-xl-4">
            <h5 className="text-start text-sm-start text-md-start text-lg-end text-xl-end problems"> সমস্যাসমূহ : </h5>
            <ul className="list-group text-end">
              {issue.map((issues, i) => (
                <ul
                  className="list-group list-group-horizontal justify-content-sm-end  justify-content-md-end justify-content-lg-end justify-content-xl-end justify-content-xxl-end justify-content-start"
                  key={i}
                >
                  <li className="list-group-item d-block d-md-none d-sm-none d-lg-none d-xl-none">
                    <img
                      src="/thik-mark.svg"
                      className="img-fluid svg-thik"
                      alt=""
                    />
                  </li>
                  <li className="list-group-item text-start text-sm-start text-md-start text-lg-end text-xl-end">{issues.content}</li>
                  <li className="list-group-item d-none d-md-block d-sm-block d-lg-block d-xl-block">
                    <img
                      src="/thik-mark.svg"
                      className="img-fluid svg-thik"
                      alt=""
                    />
                  </li>
                </ul>
              ))}
            </ul>
          </div>

          <div className="col-sm-12 col-md-12 col-lg-4 col-xl-4">
            <img
              src="/otipusty.png"
              className="img-fluid"
              alt="image"
            />
          </div>

          <div className="col-sm-12 col-md-12 col-lg-4 col-xl-4">
            <h5 className="text-start problems">পুষ্টিতে ফিরতে করণীয় : </h5>
            <ul className="list-group text-start">
              {resolve.map((issue, i) => (
                <ul
                  className="list-group list-group-horizontal justify-content-start"
                  key={i}
                >
                  <li className="list-group-item image-list">
                    <img
                      src="/thik-mark.svg"
                      className="img-fluid svg-thik"
                      alt=""
                    />
                  </li>
                  <li className="list-group-item ">{issue.content}</li>
                </ul>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CurePreventionOtipusti;
