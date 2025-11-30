import React from 'react'
import style from "./About.module.css"

function About() {
  return (
<section className={style.section_dark} id="why-us">
  <div className={style.div_container}>
    <h2 className={style.section_title}>Why us!</h2>
    <p className={style.section_text}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
      perferendis tenetur voluptatem? Impedit, atque tempore. Corporis nostrum
      officiis distinctio. Aliquid provident ullam doloremque...
    </p>
  </div>
</section>
  )
}

export default About

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