import './navbar.css'

export default function Navbar() {
  return (
    <div className="navbar">
      <p className="channel-name child">LEDAC</p>
      <img
        src="images/channels4_profile.jpg"
        alt="logo"
        className="logo child"
      />
      <p className="channel-name child">OFFICIAL</p>
    </div>
  );
}