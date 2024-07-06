import Image from "next/image";
import styles from "./about.module.css";

const About = () => {
  return <div className={styles.container}>
    <div className={styles.textContainer}>
      
      <h2 className={styles.subtitle}> About Agency </h2>
      
      <h1 className={styles.title}> 
        We create digital ideas that are bigger, 
        bolder, braver, and better.
      </h1>

      <p className={styles.desc}>
        We create digital ideas that are bigger,
        bolder, braver, and better. We belive in good ideas 
        and flexibilty and prescison them. We have best teams for
        development and solution development.
      </p>

      <div className={styles.boxes}>
        
        <div className={styles.box}>
          <h1> 10 K+</h1>
          <p> Year of Experience.</p> 
        </div>
 
        <div className={styles.box}>
          <h1> 10 K+</h1>
          <p> Year of Experience.</p> 
        </div>

        <div className={styles.box}>
          <h1> 10 K+</h1>
          <p> Year of Experience.</p> 
        </div>

        
      </div>

    </div>

    <div className={styles.imgContainer}>
    <Image 
      src = "/about.jpeg"
      alt = "About Image"
      fill
      className={styles.img}
      /> 

    </div>
    
  </div>;
};

export default About;
