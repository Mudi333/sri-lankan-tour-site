
import React from "react";
import MapTours from "../../../../components/MapTours/MapTours";
import styles from "../../Tours.module.css";


function FamilyTourPage() {
  return (
   
    <div className={styles.detailPage}>
      <section className={styles.detailText}>
        <h1 className={styles.detailTitle}>Family Discovery Trail</h1>
        <p className={styles.detailTag}>5 Days • Family • Kid-friendly</p>
        <p>
          Designed with shorter travel days, kid-friendly stays, and plenty of
          time for snacks, naps, and pool breaks. Mix a bit of culture, nature,
          and easy wildlife experiences.
        </p>

        <h3>Highlights</h3>
        <ul className={styles.detailList}>
          <li>Easy temple visits and cultural shows in Kandy.</li>
          <li>Cooler climate in the hills around Nuwara Eliya.</li>
          <li>Gentle walks and scenic views that kids enjoy.</li>
        </ul>

        <h3>Sample Itinerary</h3>
        <ul className={styles.detailList}>
          <li>Day 1: Colombo → Kandy, evening cultural show.</li>
          <li>Day 2: Tea factory visit & train to Nuwara Eliya.</li>
          <li>Day 3: Family-friendly walk and picnic spots.</li>
          <li>Day 4: Nuwara Eliya → Ella → Mirissa coast.</li>
          <li>Day 5: Beach morning then drive back to Colombo.</li>
        </ul>
      </section>

      {/* <MapTours tourIds={["family_5d"]} /> */}
    </div>
  );
};

export default FamilyTourPage