import logo from "../assets/Logo/logo.webp";
import styles from "../styles/Navigation.module.css";
import ColorModeSwitch from "./ColorModeSwitch";

function Navigation() {
  return (
    <nav className={styles.nav}>
    <img src={logo} />
    <ColorModeSwitch/>

  </nav>
  )
}

export default Navigation