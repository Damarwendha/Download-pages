import PropTypes from "prop-types";
import "./header.css";

export default function Header({ emoji, text }) {
  return (
    <h3 id='patch'>
      <span>{emoji} </span>
       {text} 
      <span> {emoji}</span>
    </h3>
  );
}

Header.propTypes = {
  emoji: PropTypes.string,
  text: PropTypes.string,
};
