import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Olá, Eu sou Henrique</h1>
        <p className={styles.description}>
          Sou um estudante apaixonado por programação, busco uma oportunidade
          para o meu crescimento. Curioso em relação a tudo que envolva
          tecnologia e inovação.
        </p>
        <a href="mailto:henriquewood3@gmail.com" className={styles.contactBtn}>
          Contato
        </a>
      </div>
      <img
        src={getImageUrl("hero/hero.png")}
        alt="Avatar"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
    </section>
  );
};
