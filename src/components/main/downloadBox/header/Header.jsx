import styles from './header.module.css'

export default function Header({ v, i }) {
  return (
    <div className={styles.header}>
      {i === 0 ? <h6>( Terbaru )</h6> : null}
      <h2>Versi {v}</h2>
    </div>
  );
}