
import MapTours from "../../../../components/MapTours/MapTours";
import styles from "../../Toursnew.module.css";
import { Section } from "@/components/Layout/Section";

function SoloTourPage() {
  return (
    <Section>
      <div className={styles.detailPage}>
        <Section className={styles.detailText}>
          <h1 className={styles.detailTitle}>Romantic Coastal Escape</h1>
          <p className={styles.detailTag}>
            {" "}
            • 3 Days • Couple • Luxury coastal stay
          </p>
          <p>
            Short and sweet — perfect if you only have a few days to pause by
            the ocean. Think sunset cruises, candlelit dinners, and slow
            mornings with sea views.
          </p>

          <h3>Highlights</h3>
          <ul className={styles.detailList}>
            <li>Stay in social hostels and guesthouses near the beach.</li>
            <li>
              Ride the train through the highlands between Ella and the coast.
            </li>
            <li>
              Plenty of cafés and co-working friendly spots along the way.
            </li>
          </ul>

          <h3>Sample Itinerary</h3>
          <ul className={styles.detailList}>
            <li>Day 1: Colombo → Galle, evening walk inside the fort.</li>{" "}
            <li>Day 2: Galle → Mirissa, beach time and sunset dinner.</li>
            <li>Day 3: Morning by the sea, drive back to Colombo.</li>
          </ul>
        </Section>

        {/* map only showing the solo_5d route */}
        <MapTours tourIds={["couple_3d"]} />
      </div>
    </Section>
  );
}

export default SoloTourPage;
