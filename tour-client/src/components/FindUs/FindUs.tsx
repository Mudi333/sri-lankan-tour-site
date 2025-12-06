import React from "react";
import { Box } from "@/components/Layout/Boxes";
import styles from "./FindUs.module.css";

function FindUs() {
  return (
    <div className={styles.findus_wrapper}>
      <h2 className={styles.title}>Find Us Online</h2>

      <p className={styles.description}>
        Stay connected with Serendib Tours across your favourite platforms.
      </p>

      <div className={styles.box_grid}>
        <Box className={styles.social_box}>
          <div className={styles.icon_row}>
            <img
              src="https://cdn.simpleicons.org/youtube"
              alt="YouTube"
              className={styles.icon}
            />
            <div>
              <h3>YouTube</h3>
              <p className={styles.handle}>@serendibtours</p>
            </div>
          </div>

          <p>
            Watch our Sri Lanka travel videos, itineraries and highlights.
          </p>

          <a
            href="https://www.youtube.com/watch?v=30HXgKxBSFQ"
            target="_blank"
            rel="noreferrer"
            className={styles.link}
          >
            Visit YouTube
          </a>
        </Box>

        <Box className={styles.social_box}>
          <div className={styles.icon_row}>
            <img
              src="https://cdn.simpleicons.org/instagram"
              alt="Instagram"
              className={styles.icon}
            />
            <div>
              <h3>Instagram</h3>
              <p className={styles.handle}>@serendibtours</p>
            </div>
          </div>

          <p>
            Follow our daily stories, reels and photos from around the island.
          </p>

          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noreferrer"
            className={styles.link}
          >
            Visit Instagram
          </a>
        </Box>

        <Box className={styles.social_box}>
          <div className={styles.icon_row}>
            <img
              src="https://cdn.simpleicons.org/x"
              alt="Twitter / X"
              className={styles.icon}
            />
            <div>
              <h3>Twitter / X</h3>
              <p className={styles.handle}>@serendibtours</p>
            </div>
          </div>

          <p>
            Get quick updates, travel tips and news in real time.
          </p>

          <a
            href="https://twitter.com/"
            target="_blank"
            rel="noreferrer"
            className={styles.link}
          >
            Visit Twitter/X
          </a>
        </Box>
      </div>
    </div>
  );
}

export default FindUs;
