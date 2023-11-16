import { Fragment } from "react";
import HeroContainer from "../components/HeroContainer";
import Navbar from "../components/Navbar";
import OurActivity from "../components/OurActivity";
import AboutUs from "../components/AboutUs";
import BmiCalc from "../components/BmiCalc";
import TabsOfNutration from "../components/TabsOfNutration";
import TeamMember from "../components/TeamMember";
import Footer from "../components/Footer";
import OurPartner from "../components/OurPartner";
// import CureAndPrevention from "../components/CureAndPrevention";

const HomePage = () => {
  return (
    <Fragment>
      <div id="hero-container">
        <Navbar />
        <HeroContainer />
      </div>
      <div id="our-activity">
        <OurActivity />
      </div>
      <div id="about-us">
        <AboutUs />
      </div>
      <div id="bmi-calc">
        <BmiCalc />
      </div>
      <div id="tabs-nutration">
        <TabsOfNutration />
      </div>

      <TeamMember/>
      <OurPartner/>
      <Footer/>
    </Fragment>
  );
};

export default HomePage;
