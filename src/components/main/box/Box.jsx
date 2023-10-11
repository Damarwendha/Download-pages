import PropTypes from "prop-types";
import './box.css'

export default function Box({ children, margin}) {
  return <div className="box" style={{margin: margin}}>{children}</div>;
}

Box.propTypes = {
  children: PropTypes.object,
  margin: PropTypes.string
};
