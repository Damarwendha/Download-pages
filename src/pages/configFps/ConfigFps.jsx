import { NavLink } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import Main from "../../components/main/Main";
import configFpsData from "./../../data/configFpsData.js";

export default function MLBBConfig() {
  return (
    <>
      <Navbar>
        <li>
          <NavLink to="/Config">Config</NavLink>
        </li>
        <img src="images/channels4_profile.jpg" alt="logo" />
        <li>
          <NavLink to="/MlLite">ML Lite</NavLink>
        </li>
      </Navbar>
      <Main data={configFpsData} />
      <Footer />
    </>
  );
}
