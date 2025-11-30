import React from "react";
import style from "./About.module.css";

function About() {
  return (
    <section className={style.section_dark} id="why-us">
      <div className={style.div_container}>
        <h2 className={style.section_title}>Why us!</h2>

        <p className={style.section_text}>
          Why Travel with Serendip Shores? From sunrise safaris to sunset sails,
          our team curates authentic Sri Lankan experiences for every kind of
          traveler. Enjoy comfortable stays, local cuisine, and guides who treat
          you like family.
        </p>
      </div>
    </section>
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
