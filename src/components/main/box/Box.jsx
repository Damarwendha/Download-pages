import PropTypes from "prop-types";
import './box.css'

export default function Box({ children }) {
  return <div className="box">{children}</div>;
}

Box.propTypes = {
  children: PropTypes.object,
};
