// import { Link } from 'react-router-dom';
// import style from './Hero.module.css'

// function HeroSection() {
//   return (

//     <section className={style.hero_section}>
//       <div className={style.hero_content}>
//         <h1>Discover the Magic of Sri Lanka</h1>
//         <p>
//           Handcrafted journeys across golden shores, misty hills, and vibrant
//           cities. Travel with local experts who know every hidden corner.
//         </p>
//         <Link to="/register" className={style.primary_button}>
//         Register,It's free!
//         </Link>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;

import { Link } from "react-router-dom";
import styles from "./Hero.module.css";

function HeroSection() {
  return (
    <section className={styles.hero_section}>
      <div className={styles.hero_content}>
        <h1>Discover the Magic of Sri Lanka</h1>
        <p>
          Handcrafted journeys across golden shores, misty hills, and vibrant
          cities. Travel with local experts who know every hidden corner.
        </p>
        <Link to="/register" className={styles.primary_button}>
          Register, it's free!
        </Link>
      </div>
    </section>
  );
}

export default HeroSection;
