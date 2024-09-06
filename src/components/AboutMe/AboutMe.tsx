import styles from "./aboutme.module.css";

function AboutMe() {
  return (
    <section className={styles.section}>
      <article className={styles.article}>
        <h1>About Me</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim eum
          perspiciatis ipsam in dolor eius et, ex repudiandae eveniet veniam
          expedita magni aperiam adipisci laboriosam inventore ad itaque
          repellendus cumque.
        </p>
      </article>
      {/* HEADSHOT HERE */}
      <img
        className={styles.headshot}
        src="https://www.state.gov/wp-content/uploads/2022/09/placeholder-headshot.png"
        alt="Picture of Camilo Sanchez Porras"
      />
    </section>
  );
}

export default AboutMe;
