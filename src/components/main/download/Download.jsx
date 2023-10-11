import PropTypes from "prop-types";
import './download.css'

export default function Download({ pw, link }) {
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