import styles from "./footer.module.css";
import { useState } from "react";

function Footer() {
  const [gmail, setGmail] = useState("white");
  const [linkedIn, setLinkedIn] = useState("white");
  const [gitHub, setGitHub] = useState("white");

  return (
    <footer className={styles.footer}>
      <h1>Contact Me</h1>
      <div className={styles.contacts}>
        <a
          className={styles.link}
          href="mailto:camilosanpor@gmail.com"
          onMouseOver={() => setGmail("accent")}
          onMouseOut={() => setGmail("white")}
        >
          <img
            className={styles.icon}
            src={`src/assets/images/email-${gmail}.png`}
            alt="Gmail Icon"
          />
          camilosanpor@gmail.com
        </a>
        <a
          className={styles.link}
          href="https://linkedin.com/in/camilo-sanchez-porras"
          onMouseOver={() => setLinkedIn("accent")}
          onMouseOut={() => setLinkedIn("white")}
        >
          <img
            className={styles.icon}
            src={`src/assets/images/linkedin-${linkedIn}.png`}
            alt="LinkedIn Icon"
          />
          LinkedIn
        </a>
        <a
          className={styles.link}
          href="https://github.com/CamiloSanPor"
          onMouseOver={() => setGitHub("accent")}
          onMouseOut={() => setGitHub("white")}
        >
          <img
            className={styles.icon}
            src={`src/assets/images/github-${gitHub}.png`}
            alt="GitHub Icon"
          />
          GitHub
        </a>
        <p>Copyright &copy; 2024 Camilo Sanchez Porras</p>
      </div>
    </footer>
  );
}

export default Footer;
