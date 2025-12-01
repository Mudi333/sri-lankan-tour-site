
import React from "react";
import MapTours from "../../../../components/MapTours/MapTours";
import styles from "../../Tours.module.css";

function CoupleTourPage() {
  return (
 
    <div className={styles.detailPage}>
      <section className={styles.detailText}>
        <h1 className={styles.detailTitle}>Romantic Coastal Escape</h1>
        <p className={styles.detailTag}>3 Days • Couple • Luxury coastal stay</p>
        <p>
          Short and sweet — perfect if you only have a few days to pause by
          the ocean. Think sunset cruises, candlelit dinners, and slow mornings
          with sea views.
        </p>

        <h3>Highlights</h3>
        <ul className={styles.detailList}>
          <li>Handpicked boutique hotels with ocean views.</li>
          <li>Optional whale-watching or private boat trip near Mirissa.</li>
          <li>Plenty of free time to relax, swim, and wander.</li>
        </ul>

        <h3>Sample Itinerary</h3>
        <ul className={styles.detailList}>
          <li>Day 1: Colombo → Galle, evening walk inside the fort.</li>
          <li>Day 2: Galle → Mirissa, beach time and sunset dinner.</li>
          <li>Day 3: Morning by the sea, drive back to Colombo.</li>
        </ul>
      </section>

      <MapTours tourIds={["couple_3d"]} />
    </div>
  );
};

export default CoupleTourPage;