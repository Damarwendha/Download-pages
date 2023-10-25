import styles from "./navbar.module.css";

export default function Navbar({children}) {
  return (
    <ul className={styles.navbar}>
      {children}
    </ul>
  );
}
