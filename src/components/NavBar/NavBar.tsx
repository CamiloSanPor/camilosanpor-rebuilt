import styles from "./navbar.module.css";
import { useState } from "react";

function NavBar() {
  const [kitty, setKitty] = useState("default");

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <a
          className={styles.link}
          onMouseOver={() => setKitty("tongue")}
          onMouseOut={() => setKitty("default")}
          href=""
        >
          <img
            className={styles.icon}
            height="32px"
            width="32px"
            src={`/src/assets/images/favicon-64px-${kitty}.png`}
            alt=""
          />
          <p>Camilo Sanchez Porras</p>
        </a>
      </div>
      <a className={`${styles.menu} ${styles.link}`} href="">
        Projects
      </a>
      <a className={`${styles.menu} ${styles.link}`} href="">
        Resume
      </a>
    </nav>
  );
}

export default NavBar;
