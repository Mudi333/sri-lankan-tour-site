import React from "react";
import style from "./FindUs.module.css";



export default function FindUs() {
  return (
    <section className={style.section_dark} id="find-us">
      <div className={style.div_container}>
        <h2 className={style.section_title}>Find us!</h2>

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

