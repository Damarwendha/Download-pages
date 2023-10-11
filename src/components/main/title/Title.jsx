import PropTypes from "prop-types";
import "./title.css";

export default function Title({ emoji, text }) {
  return (
    <h3>
      <span>{emoji}</span>
      {text}
      <span>{emoji}</span>
    </h3>
  );
}

Title.propTypes = {
  emoji: PropTypes.string,
  text: PropTypes.string,
};
