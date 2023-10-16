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
  isDisabled = false,
  className,
}) {
  return (
    <button
      disabled={isDisabled}
      onClick={onClick}
      className={`button ${className}`}
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
  className: PropTypes.string,
  isDisabled: PropTypes.bool,
};
