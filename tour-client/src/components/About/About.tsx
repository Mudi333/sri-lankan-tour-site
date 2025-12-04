import React from "react";
import { Section } from "@/components/Layout/Section";
import { Box } from "@/components/Layout/Boxes";
import styles from "./About.module.css";

function About() {
  return (
    <Section id="why-us">
      <div className={styles.about_wrapper}>
        <h2 className={styles.title}>Why Choose Us</h2>

        <p className={styles.description}>
          From sunrise safaris to sunset sails, our team curates authentic Sri
          Lankan experiences for every kind of traveler.  
          Enjoy comfortable stays, local cuisine, and guides who treat you like family.
        </p>

        <div className={styles.box_grid}>
          <Box>
            <h3>🌴 Authentic Experiences</h3>
            <p>
              Travel like a local with insider access to hidden gems and cultural
              traditions.
            </p>
          </Box>

          <Box>
            <h3>🚗 Comfortable Journeys</h3>
            <p>
              Modern vehicles, handpicked stays, and seamless planning from start
              to finish.
            </p>
          </Box>

          <Box>
            <h3>🤝 Trusted Guides</h3>
            <p>
              Friendly, certified guides who share stories, history, and real Sri
              Lankan hospitality.
            </p>
          </Box>
        </div>
      </div>
    </Section>
  );
}

export default About;


// import React from "react";
// import style from "./About.module.css"

// function About() {
//   return (
//     <section className={style.section_luxury} id="why-us">
//       <div className={style.section_card}>
//         <h2 className={style.section_title_luxury}>Why Choose Us?</h2>

//         <p className={style.section_text_luxury}>
//           We bring you the finest travel experiences across Sri Lanka — from
//           pristine beaches and lush tropical forests to ancient cultural
//           wonders. Our dedicated team ensures that your journey is safe,
//           memorable, and designed with passion.
//         </p>
//       </div>
//     </section>
//   );
// }

// export default About;
