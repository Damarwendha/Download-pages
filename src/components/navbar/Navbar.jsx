import "./navbar.css";

export default function Navbar() {
  return (
    <div className="navbar">
      <p className="channel-name child">
        <span className="kurung">{"> "}</span>LEDAC
      </p>
      <img
        src="images/channels4_profile.jpg"
        alt="logo"
        className="logo child"
      />
      <p className="channel-name child">
        OFFICIAL<span className="kurung2">{" <"}</span>
      </p>
    </div>
  );
}
