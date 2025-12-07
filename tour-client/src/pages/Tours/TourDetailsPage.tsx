import styles from "./Tours.module.css";
import { Link } from "react-router-dom";
import MapTours from "../../components/MapTours/MapTours";
import { Section } from "@/components/Layout/Section";

function TourDetailsPage() {
  return (
    <Section id="TourDeatails">
      {/* <div className={styles.tourPage}> */}
      <div className={styles.tourLayout}>
        {/* LEFT: TEXT BOX */}
        <div className={styles.tourTextBox}>
          <header className={styles.tourHeader}>
            <h1 className={styles.tourTitle}>Browse Our Signature Routes</h1>
            <p className={styles.tourSubtitle}>
              Whether you’re travelling solo, as a couple, with family, or a
              group of friends, these curated routes give you a starting point
              to discover Sri Lanka. Click into a tour type to see more details
              and a focused map of that route.
            </p>
          </header>

          <section className={styles.tourGrid}>
            <Link
              to="/tours/couple"
              className={`${styles.tourCard} ${styles.couple}`}
            >
              <h2 className={styles.tourCardTitle}>Romantic Coastal Escape</h2>
              <p className={styles.tourTag}>
                Couples • 3 days • Golden sunsets
              </p>
              <p className={styles.tourDesc}>
                Relax in charming boutique stays along Sri Lanka’s south coast —
                perfect for honeymoons or anniversary getaways.
              </p>
            </Link>

            <Link
              to="/tours/family"
              className={`${styles.tourCard} ${styles.family}`}
            >
              <h2 className={styles.tourCardTitle}>Family Discovery Trail</h2>
              <p className={styles.tourTag}>Family • 5 days • Kid friendly</p>
              <p className={styles.tourDesc}>
                Wildlife, easy hikes, and cultural highlights designed so
                parents can enjoy the trip without stress.
              </p>
            </Link>

            <Link
              to="/tours/group"
              className={`${styles.tourCard} ${styles.group}`}
            >
              <h2 className={styles.tourCardTitle}>
                Friends & Group Adventure
              </h2>
              <p className={styles.tourTag}>Friends • 5 days • Active</p>
              <p className={styles.tourDesc}>
                Think sunrise hikes, waterfalls, and laid-back nights by the
                campfire — made for small groups.
              </p>
            </Link>

            <Link
              to="/tours/solo"
              className={`${styles.tourCard} ${styles.solo}`}
            >
              <h2 className={styles.tourCardTitle}>Solo Explorer Route</h2>
              <p className={styles.tourTag}>Solo • 5 days • Flexible</p>
              <p className={styles.tourDesc}>
                Safe and flexible path that connects social hostels, scenic
                train rides, and coastal town stops.
              </p>
            </Link>
          </section>
        </div>

        {/* RIGHT: MAP BOX */}
        <div className={styles.tourMapBox}>
          <div className={styles.mapWrapper}>
            {/* <MapTours /> */}
            <MapTours  />
          </div>
        </div>
      </div>
      {/* </div> */}
    </Section>
  );
}

export default TourDetailsPage;
