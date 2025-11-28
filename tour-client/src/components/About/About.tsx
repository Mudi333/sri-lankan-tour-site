import React from 'react'
import style from "./About.module.css"

function About() {
  return (
<section className={style.section_section_dark} id="why-us">
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