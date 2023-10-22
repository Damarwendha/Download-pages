import PropTypes from "prop-types";
import styles from "./box.module.css";

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
      className={`${styles.box} ${className}`}
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
  children: PropTypes.array,
  margin: PropTypes.string,
  border: PropTypes.string,
  bgColor: PropTypes.string,
  borR: PropTypes.string,
  padding: PropTypes.string,
  className: PropTypes.string,
};
