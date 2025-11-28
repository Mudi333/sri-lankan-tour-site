import React from 'react'
import styles from "./HomeVideo.module.css";

function HomeVideo() {
  return (
     <div className={styles.layout}>
       <video
        className={styles.backgroundVideo}
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/videos/ocean-waves.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
    // <div className={style.video_layout}>
    // <video
    //     className={style.background_video}
    //     autoPlay
    //     loop
    //     muted
    //     playsInline
    //   >
    //     <source src="/videos/ocean-waves.mp4" type="video/mp4" />
    //   </video>


    // </div>
  )
}

export default HomeVideo