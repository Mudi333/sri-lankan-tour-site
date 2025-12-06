// src/pages/Tours/Family/FamilyTourPage.tsx

import MapTours from "../../../../components/MapTours/MapTours";
import styles from "../../Toursnew.module.css";
import { Section } from "@/components/Layout/Section";

const FamilyTourPage: React.FC = () => {
  return (
    <Section>
      <div className={styles.detailPage}>
        
        {/* LEFT: TEXT BOX (same structure as Solo) */}
        <Section className={styles.detailText}>
          <h1 className={styles.detailTitle}>Family Discovery Trail</h1>
          <p className={styles.detailTag}>5 Days • Family • Kid friendly</p>

          <p>
            This is the perfect route for families who want a relaxed blend
            of wildlife, culture, and gentle adventure. Safe, easy-paced,
            and fun for all ages.
          </p>

          <h3>Highlights</h3>
          <ul className={styles.detailList}>
            <li>Kid-friendly wildlife encounters and nature spots.</li>
            <li>Cultural experiences in Kandy and Dambulla.</li>
            <li>Relaxing time on the south coast beaches.</li>
          </ul>

          <h3>Sample Itinerary</h3>
          <ul className={styles.detailList}>
            <li>Day 1: Colombo → Pinnawala → Kandy</li>
            <li>Day 2: Dambulla caves + Sigiriya climb (optional)</li>
            <li>Day 3: Cultural shows & lake walk</li>
            <li>Day 4: Kandy → South Coast, beach time</li>
            <li>Day 5: Free family day on the beach</li>
          </ul>
        </Section>

        {/* RIGHT: MAP BOX (same as Solo) */}
        <MapTours tourIds={["family_5d"]} />

      </div>
    </Section>
  );
};

export default FamilyTourPage;
