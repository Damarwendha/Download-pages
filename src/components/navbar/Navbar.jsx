import "./navbar.css";

export default function Navbar() {
  return (
    <ul className="navbar">
      <li>
        <a
          style={
            window.location.pathname === "/ConfigFps" ||
            window.location.pathname === "/"
              ? {
                  textDecoration: "underline",
                  filter: "drop-shadow(0 0 0.3em #ffffffaa)",
                  color: "white",
                }
              : { opacity: "100%" }
          }
          href="/ConfigFps"
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
            window.location.pathname === "/MlLite"
              ? {
                  textDecoration: "underline",
                  filter: "drop-shadow(0 0 0.3em #ffffffaa)",
                  color: "white",
                }
              : { opacity: "100%" }
          }
          href="/MlLite"
          className="child"
        >
          ML Lite
        </a>
      </li>
    </ul>
  );
}
