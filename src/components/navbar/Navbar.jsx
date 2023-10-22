import styles from "./navbar.module.css";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <ul className={styles.navbar}>
      <li>
        <NavLink to="/">Config</NavLink>
      </li>
      <img src="images/channels4_profile.jpg" alt="logo" />
      <li>
        <NavLink to="/MlLite">ML Lite</NavLink>
      </li>
    </ul>
  );
}
