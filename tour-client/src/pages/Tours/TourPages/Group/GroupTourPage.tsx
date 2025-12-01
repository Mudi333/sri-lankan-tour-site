import React from 'react'
// import MapTours from "../../../../components/MapTours/MapTours";
import styles from "../../Tours.module.css";


function GroupTourPage() {
  return (
  <div className={styles.detailPage}>
      <section className={styles.detailText}>
        <h1 className={styles.detailTitle}>Friends & Group Adventure Circuit</h1>
        <p className={styles.detailTag}>5 Days • Friends / Groups • Active</p>
        <p>
          Bring your favourite people and share some big views together. This
          route balances activity, scenery, and relaxed evenings.
        </p>

        <h3>Highlights</h3>
        <ul className={styles.detailList}>
          <li>Climb Sigiriya or Pidurangala at sunrise for epic views.</li>
          <li>Temple caves of Dambulla and live culture in Kandy.</li>
          <li>End by the south coast for beach bars and chill nights.</li>
        </ul>

        <h3>Sample Itinerary</h3>
        <ul className={styles.detailList}>
          <li>Day 1: Negombo → Sigiriya, sunset viewpoint.</li>
          <li>Day 2: Sunrise hike + Dambulla caves.</li>
          <li>Day 3: Dambulla → Kandy, city & lake walk.</li>
          <li>Day 4: Kandy → South Coast, beach time.</li>
          <li>Day 5: Free day, optionally add a surf lesson.</li>
        </ul>
      </section>
      </div>);}

  

export default GroupTourPage