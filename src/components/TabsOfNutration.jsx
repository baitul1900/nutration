import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { useState } from "react";
import Box from "@mui/material/Box";
import CureAndPrevention from "./CureAndPrevention";

const TabsOfNutration = () => {
  const [value, setValue] = useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <section className="abt-sec  about-container">
      <h3 className="text-center">
        {" "}
        <span>
          <img src="/src/assets/img/lineicon-left.svg" alt="" />
        </span>{" "}
        পুষ্টির অবস্থা{" "}
        <span>
          <img src="/src/assets/img/line-icon.svg" alt="" />
        </span>
      </h3>

      <div className="container text-center">
        {/* <TabContext value={value}>
                   
                        <TabList onChange={handleChange}  aria-label="lab API tabs example" classNameName='d-flex justify-content-between'>
                            <Tab label="পুষ্টি" value="1" />
                            <Tab label="অপুষ্টি" value="2" />
                            <Tab label="অতিপুষ্টি" value="3" />
                        </TabList>
                       
                        <TabPanel value="1">
                            <p classNameName='tab-header-sub-pera'>বিএমআই   ১৮.৫   হতে   ২৩.৯   এর   মাঝে   হলে   স্বাভাবিক </p>
                        <table classNameName="table table-bordered table-responsive">
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
                        </TabPanel>
                        <TabPanel value="2">
                            <p classNameName='tab-header-sub-pera'>বিএমআই   0   হতে   ১৮.৯৯   এর   মাঝে   হলে   অপুষ্টি </p>
                        <table classNameName="table table-bordered table-responsive">
                            <thead>
                                <tr>
                                <th scope="col">বিএমআই শুরু </th>
                                <th scope="col">বিএমআই শেষ </th>
                                <th scope="col">অবস্থা </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                <td> ০ </td>
                                <td>১৮.৯৯</td>
                                <td>অপুষ্টি  </td>
                                </tr>
                            </tbody>
                        </table>
                        </TabPanel>
                        <TabPanel value="3">
                            <p className='tab-header-sub-pera'>বিএমআই   ২৫   হতে  ২৯.৯৯   এর   মাঝে   হলে   অতিপুষ্টি </p>
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
                                <td>২৫ </td>
                                <td>২৯.৯</td>
                                <td>অতিপুষ্টি </td>
                                </tr>
                            </tbody>
                        </table>
                        </TabPanel>
                    </TabContext> */}

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
            <p className="tab-header-sub-pera">
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

            <CureAndPrevention />
          </div>
          <div
            className="tab-pane fade"
            id="pills-profile"
            role="tabpanel"
            aria-labelledby="pills-profile-tab"
          >
            {" "}
            <p className="tab-header-sub-pera">
              বিএমআই ২৫ হতে ২৯.৯৯ এর মাঝে হলে অতিপুষ্টি{" "}
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
                  <td>২৫ </td>
                  <td>২৯.৯</td>
                  <td>অতিপুষ্টি </td>
                </tr>
              </tbody>
            </table>

            <CureAndPrevention />
          </div>
          <div
            className="tab-pane fade"
            id="pills-contact"
            role="tabpanel"
            aria-labelledby="pills-contact-tab"
          >
            <p className="tab-header-sub-pera">
              বিএমআই 0 হতে ১৮.৯৯ এর মাঝে হলে অপুষ্টি{" "}
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
                  <td> ০ </td>
                  <td>১৮.৯৯</td>
                  <td>অপুষ্টি </td>
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
