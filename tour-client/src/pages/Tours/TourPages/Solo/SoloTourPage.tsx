// src/pages/SoloTour.tsx
import React from "react";
import MapTours from "../../../../components/MapTours/MapTours";
import styles from "../../Tours.module.css";


function SoloTourPage() {
  return (
    <div className={styles.detailPage}>
      <section className={styles.detailText}>
        <h1 className={styles.detailTitle}>Solo Explorer Route</h1>
        <p className={styles.detailTag}>5 Days • Budget friendly • Flexible</p>
        <p>
          This route is built for solo travelers who want a mix of safe,
          social, and scenic. Start in Colombo, move down the coastline, then
          up into the hills for cooler weather and slow train rides.
        </p>

        <h3>Highlights</h3>
        <ul className={styles.detailList}>
          <li>Stay in social hostels and guesthouses near the beach.</li>
          <li>Ride the train through the highlands between Ella and the coast.</li>
          <li>Plenty of cafés and co-working friendly spots along the way.</li>
        </ul>

        <h3>Sample Itinerary</h3>
        <ul className={styles.detailList}>
          <li>Day 1: Arrive in Colombo, explore local food markets.</li>
          <li>Day 2: Move to Galle, walk the fort and sunset by the ramparts.</li>
          <li>Day 3: Head to Matara or nearby surf spot.</li>
          <li>Day 4: Train to Ella, viewpoints & small hikes.</li>
          <li>Day 5: Return to Colombo for last-minute shopping.</li>
        </ul>
      </section>

      {/* map only showing the solo_5d route */}
      {/* <MapTours tourIds={["solo_5d"]} /> */}
    </div>
  );
};

export default SoloTourPage;
