import { Fragment } from "react";
import HeroContainer from "../components/HeroContainer";
import Navbar from "../components/Navbar";
import OurActivity from "../components/OurActivity";
import AboutUs from "../components/AboutUs";
import BmiCalc from "../components/BmiCalc";
import TabsOfNutration from "../components/TabsOfNutration";
// import CureAndPrevention from "../components/CureAndPrevention";

const HomePage = () => {
    return (
        <Fragment>
            <Navbar/>
            <HeroContainer/>
            <OurActivity/>
            <AboutUs/>
            <BmiCalc/>
            <TabsOfNutration/>
            {/* <CureAndPrevention/> */}
        </Fragment>
    );
};

export default HomePage;