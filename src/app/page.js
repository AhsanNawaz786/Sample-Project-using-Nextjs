import styles from "./home.module.css";
import Image from "next/image";

const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h1 className={styles.title}> Create Thought Agency</h1>
        <p className={styles.desc}>
          {" "}
          lorem ipsum dolor sit amet jahv kja jhd hfhl kash dhdkk kdd
        </p>

        <div className={styles.buttons}>
          <button className={styles.button}>Learn More</button>
          <button className={styles.button}>Contact</button>
        </div>

        <div className={styles.brand}>
          <Image
            src="/brands.jpeg" /** Edit brands image here */
            className={styles.brandImg}
            alt="Brand"
            fill
          />
        </div>
      </div>

      <div className={styles.imageContainer}>
        <Image src="/hero.jpeg" alt="Hero" fill className={styles.heroImage} />
      </div>
    </div>
  );
};

export default Home;
