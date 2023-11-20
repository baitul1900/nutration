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
import CounterSection from "../components/CounterSection";
import BlogSection from "../components/BlogSection";
import RecentCard from "../components/RecentCard";
// import CureAndPrevention from "../components/CureAndPrevention";

const HomePage = () => {
  return (
    <Fragment>
      <Navbar />
      <HeroContainer />
      <OurActivity />
      <CounterSection />
      <AboutUs />
      <div id="bmi-calc-section">
        <BmiCalc />
      </div>
      <TabsOfNutration />
      <TeamMember />
      <BlogSection />
      <OurPartner />
      <Footer />
    </Fragment>
  );
};

export default HomePage;
