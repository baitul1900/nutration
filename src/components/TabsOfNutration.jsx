import { useEffect, useState } from "react";
import CureAndPrevention from "./CureAndPrevention";
import axios from "axios";
import CurePreventionOtipusti from "./CurePreventionOtipusti";

const TabsOfNutration = () => {
    const [tabelData, setTableData] = useState([]);

    useEffect(()=> {
        axios.get('/data.json')
        .then(response => {
            setTableData(response.data.tableDataOtipusti)
        })
        .catch(error => {
            console.error('Error fetching data:', error)
        })
    }, [])
  
  return (
    <section className="abt-sec  about-container">
      <h3 className="text-center">
        {" "}
        <span>
          <img src="/lineicon-left.svg" className="img-fluid line-mark" alt="" />
        </span>{" "}
        পুষ্টির অবস্থা{" "}
        <span>
          <img src="/line-icon.svg" className="img-fluid line-mark" alt="" />
        </span>
      </h3>

      <div className="container text-center">
        

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
              পুষ্টি
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
              অতিপুষ্টি
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
              অপুষ্টি
            </button>
          </li>
        </ul>

        <div className="tab-content" id="pills-tabContent">
          <div
            className="tab-pane fade show active"
            id="pills-home"
            role="tabpanel"
            aria-labelledby="pills-home-tab"
          >
            <p className="tab-header-sub-pera mt-4 pt-5 pb-4">
              বিএমআই ১৮.৫ হতে ২৩.৯ এর মাঝে হলে স্বাভাবিক{" "}
            </p>

            <table className="table table-bordered table-responsive">
              <thead>
              
                <tr>
                  <th scope="col">বিএমআই শুরু </th>
                  <th scope="col">বিএমআই শেষ </th>
                  <th scope="col">অবস্থা </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td> ১৮.৫</td>
                  <td>২৪.৯৯</td>
                  <td>স্বাভাবিক </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div
            className="tab-pane fade"
            id="pills-profile"
            role="tabpanel"
            aria-labelledby="pills-profile-tab"
          >
            {" "}
            <p className="tab-header-sub-pera mt-4 pt-5 pb-4">
            বিএমআই  ২৫.০  বা  তার  বেশি  হলে  অতিপুষ্টি  বা  অজনাধিক্য  বা  স্থূলতা।  অতিপুষ্টি  বা  স্থূলতার  স্তর  ৪টি:  {" "}
            </p>

            <div className="row mt-2">
              <div className="col-sm-12 col-md-6 col-lg-4 col-xl-3 col-xxl-3">
                <p className="otipusti-tabel-head-point">১.স্বাভাবিকের থেকে বেশি </p>
              </div>
              <div className="col-sm-12 col-md-6 col-lg-4 col-xl-3 col-xxl-3">
              <p className="otipusti-tabel-head-point">২.স্থূলতা গ্রেড-১ (স্বল্প স্থূলতা) </p>
              </div>
              <div className="col-sm-12 col-md-6 col-lg-4 col-xl-3 col-xxl-3">
              <p className="otipusti-tabel-head-point">৩.স্থূলতা গ্রেড-২ (মাঝারী স্থূলতা)</p>
              </div>
              <div className="col-sm-12 col-md-6 col-lg-4 col-xl-3 col-xxl-3">
              <p className="otipusti-tabel-head-point">৪.স্থূলতা গ্রেড-৩ (মারাত্মক স্থূলতা)</p>
              </div>
            </div>



            <table className="table table-bordered table-responsive">
              <thead>
                <tr>
                  <th scope="col">বিএমআই শুরু </th>
                  <th scope="col">বিএমআই শেষ </th>
                  <th scope="">অবস্থা </th>
                </tr>
              </thead>
              <tbody>
                {
                   tabelData.map((item, i)=> (
                    <tr key={i}>
                      <td>{item.startBMI}</td>
                      <td>{item.endBMI}</td>
                      <td>{item.status}</td>
                    </tr>
                   )) 
                }
              </tbody>
            </table>

            <CurePreventionOtipusti/>
          </div>
          <div
            className="tab-pane fade"
            id="pills-contact"
            role="tabpanel"
            aria-labelledby="pills-contact-tab"
          >
            <p className="tab-header-sub-pera mt-4 pt-5 pb-4">
            বিএমআই  ১৮.৫  এর  কম  হলে  অপুষ্টি।   অপুষ্টির  স্তর  ৩টি:  {" "}</p>
            <table className="table table-bordered table-responsive">
              <thead>
              <tr className="border-0 tr-details">
                  <th scope="col" className="border-0 bg-transparent">১. স্বল্প মাত্রার অপুষ্টি  ১</th>
                  <th scope="col" className="border-0 bg-transparent">২. মাঝারি মাত্রার অপুষ্টি  ২</th>
                  <th scope="col" className="border-0 bg-transparent">৩. মারাত্মক মাত্রার অপুষ্টি  ৩</th>
                </tr>
                <tr>
                  <th scope="col">বিএমআই শুরু </th>
                  <th scope="col">বিএমআই শেষ </th>
                  <th scope="col">অবস্থা</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td> ০ </td>
                  <td>১৮.৯৯</td>
                  <td>অপুষ্টি</td>
                </tr>
              </tbody>
            </table>

            <CureAndPrevention />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TabsOfNutration;
