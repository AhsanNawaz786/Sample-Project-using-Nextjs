import styles from "./contact.module.css";
import Image from "next/image";

const Contact = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src="/contact.jpeg" alt="Contact Image" fill />
      </div>

      <div className={styles.formContainer}>
        <form action="" className={styles.form}>
          <input type="text" placeholder="Name or Surname" />
          <input type="text" placeholder="Email Address" />
          <input type="text" placeholder="Phone Number (optional)" />
          <textarea name="" id="" cols="38" placeholder="Message Here" />
          <button>Send</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
