import PropTypes from "prop-types";
import './version.css'

export default function Version({ v }) {
  return (
    <div className="version">
      <p>Versi {v}</p>
    </div>
  );
}

Version.propTypes = {
  v: PropTypes.number,
};
