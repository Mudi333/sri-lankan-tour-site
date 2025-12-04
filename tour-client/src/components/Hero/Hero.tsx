
import styles from "./Hero.module.css";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className={styles.hero_section}>
      <div className={styles.hero_inner}>
        <div className={styles.hero_content}>
          <h1>Discover Serendip Tours with us!</h1>  
            <h2><span className={styles.span}>        Tailor made journeys across       the magical island      from misty hills to sunny
            beaches for you!</span></h2>
      
          <Link to="/register" className={styles.primary_button}>
            Register, it's free!{" "}
          </Link>
        </div>
      </div>
    </section>
  );
}
