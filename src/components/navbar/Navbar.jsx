import "./navbar.css";

export default function Navbar() {
  return (
    <ul className="navbar">
      <li>
        <a
          style={
            window.location.pathname === "/Config" ||
            window.location.pathname === "/"
              ? {
                  textDecoration: "underline",
                  filter: "drop-shadow(0 0 0.3em #ffffffaa)",
                }
              : { opacity: "100%" }
          }
          href="/Config"
          className="child"
        >
          Config
        </a>
      </li>
      <img
        src="images/channels4_profile.jpg"
        alt="logo"
        className="logo child"
      />
      <li>
        <a
          style={
            window.location.pathname === "/MLBBLite"
              ? {
                  textDecoration: "underline",
                  filter: "drop-shadow(0 0 0.3em #ffffffaa)",
                }
              : { opacity: "100%" }
          }
          href="/MLBBLite"
          className="child"
        >
          ML Lite
        </a>
      </li>
    </ul>
  );
}
