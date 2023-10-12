import PropTypes from "prop-types";
import "./link.css";

export default function Link({ pw, link }) {
  return (
    <>
      <p className="pw">{pw}:</p>
      <a className="link-download" href={link}>
        {link}
      </a>
    </>
  );
}

Link.propTypes = {
  pw: PropTypes.string,
  link: PropTypes.string,
};
