import PropTypes from "prop-types";
import "./link.css";

export default function Link({ url }) {
  return (
    <>
      <a className="link-download" href={url}>
        {url}
      </a>
    </>
  );
}

Link.propTypes = {
  link: PropTypes.string,
};
