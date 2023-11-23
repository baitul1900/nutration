import { Fragment } from "react";
import HeroContainer from "../components/HeroContainer";
import Navbar from "../components/Navbar";
import OurActivity from "../components/OurActivity";
import AboutUs from "../components/AboutUs";
import BmiCalc from "../components/BmiCalc";
import TabsOfNutration from "../components/TabsOfNutration";
import Footer from "../components/Footer";
import OurPartner from "../components/OurPartner";
import CounterSection from "../components/CounterSection";
import BlogSection from "../components/BlogSection";
import Speech from "../components/Speech";
// import CureAndPrevention from "../components/CureAndPrevention";

const HomePage = () => {
  return (
    <Fragment>
      <Navbar />
      <HeroContainer />
      <OurActivity />
      <CounterSection />
      <Speech />
      <AboutUs />
      <BmiCalc />
      <TabsOfNutration />
      <BlogSection />
      <OurPartner />
      <Footer />
    </Fragment>
  );
};

export default HomePage;
