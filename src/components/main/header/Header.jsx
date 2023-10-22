import PropTypes from "prop-types";
import styles from "./header.module.css";

export default function Header({ emoji, text }) {
  return (
    <header className={styles.header}>
      <h3>
        <span>{emoji} </span>
        {text}
        <span> {emoji}</span>
      </h3>
    </header>
  );
}

Header.propTypes = {
  emoji: PropTypes.string,
  text: PropTypes.string,
};
