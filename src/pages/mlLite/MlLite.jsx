import { NavLink } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";

export default function MlLite({ type, id }) {
  return (
    <>
      <Navbar>
        <li>
          {type === "pw" ? (
            <NavLink to="/">Config</NavLink>
          ) : (
            <NavLink to={`/Config/${id}`}>Config</NavLink>
          )}
        </li>
        <img src="/images/channels4_profile.jpg" alt="logo" />
        <li>
          {type === "pw" ? (
            <NavLink to="/MlLite">ML Lite</NavLink>
          ) : (
            <NavLink to={`/MlLite/${id}`}>ML Lite</NavLink>
          )}
        </li>
      </Navbar>
      <h1>Coming Soon...</h1>
      <Footer />
    </>
  );
}
