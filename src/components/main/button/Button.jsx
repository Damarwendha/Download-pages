import PropTypes from "prop-types";
import "./button.css";

export default function Button({
  onClick,
  text,
  padding,
  width,
  margin,
  border,
  backgroundColor,
}) {
  return (
    <button
      onClick={onClick}
      className="button"
      style={{ padding, width, margin, border, backgroundColor }}
    >
      {text}
    </button>
  );
}

Button.propTypes = {
  onClick: PropTypes.func,
  text: PropTypes.string,
  padding: PropTypes.string,
  width: PropTypes.string,
  margin: PropTypes.string,
  border: PropTypes.string,
  backgroundColor: PropTypes.string,
};
