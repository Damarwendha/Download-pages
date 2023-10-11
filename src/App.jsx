import "./App.css";
import PropTypes from "prop-types";

function App() {
  return (
    <>
      <Navbar />
      <Main />
      <Footer />
    </>
  );
}

function Navbar() {
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

function Main() {
  return (
    <div className="main">
      <Title>
        <>
          <span>🔧</span> CONFIG ML PATCH NOLAN <span>🔧</span>
        </>
      </Title>
      <Box>
        <>
          <Version v={3} />
          <span>{"👇 "}</span>
          <Download
            pw="Password di Video"
            link="https://sfile.mobi/6GMFi8AJr2V"
          />
        </>
      </Box>
    </div>
  );
}

function Title({ children }) {
  return <h3>{children}</h3>;
}

Title.propTypes = {
  children: PropTypes.object || PropTypes.string,
};

function Box({ children }) {
  return <div className="box">{children}</div>;
}

Box.propTypes = {
  children: PropTypes.object,
};

function Version({ v }) {
  return (
    <div className="version">
      <p>Versi {v}</p>
    </div>
  );
}

Version.propTypes = {
  v: PropTypes.number,
};

function Download({ pw, link }) {
  return (
    <>
      <p className="pw">{pw}:</p>
      <a className="link-download" href={link}>
        {link}
      </a>
    </>
  );
}

Download.propTypes = {
  pw: PropTypes.string,
  link: PropTypes.string,
};

function Footer() {
  return (
    <div className="footer">
      <a href="https://m.youtube.com/channel/UCyNj7Rfvk3N7thKppPnS3Jw">
        <img src="images/youtube-logo-png-46031.png" alt="youtube" />
      </a>
      <p>Copyright 2014 © Ledac Official</p>
    </div>
  );
}
export default App;
