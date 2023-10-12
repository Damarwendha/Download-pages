import PropTypes from "prop-types";
import "./box.css";

export default function Box({
  children,
  margin,
  border,
  borR,
  bgColor,
  padding,
  className,
}) {
  return (
    <div
      className={`box ${className}`}
      style={{
        margin: margin,
        border: border,
        backgroundColor: bgColor,
        borderRadius: borR,
        padding: padding,
      }}
    >
      {children}
    </div>
  );
}

Box.propTypes = {
  children: PropTypes.object,
  margin: PropTypes.string,
  border: PropTypes.string,
  bgColor: PropTypes.string,
  borR: PropTypes.string,
  padding: PropTypes.string,
  className: PropTypes.string,
};
