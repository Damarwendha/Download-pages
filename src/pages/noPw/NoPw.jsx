import { NavLink } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import Main from "../../components/main/Main";
import configNoPwData from './../../data/configNoPwData.js';


function NoPw({ id }) {
  return (
    <>
      <Navbar>
        <li>
          <NavLink to={`/Config/${id}`}>Config</NavLink>
        </li>
        <img src="/images/channels4_profile.jpg" alt="logo" />
        <li>
          <NavLink to={`/MlLite/${id}`}>ML Lite</NavLink>
        </li>
      </Navbar>
      <Main data={configNoPwData} />
      <Footer />
    </>
  );
}

export default NoPw;
