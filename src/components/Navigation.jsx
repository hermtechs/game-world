import logo from "../assets/Logo/logo.webp";
import styles from "../styles/Navigation.module.css";

function Navigation() {
  return (
    <nav className={styles.nav}>
    <img src={logo} />
    <h1>GAME WORLD</h1>
  </nav>
  )
}

export default Navigation