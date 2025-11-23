import React from 'react'
import "./HomeVideo.css";

function HomeVideo() {
  return (
    <div className='vedio-layout'>HomeVideo
    <video
        className="background-video"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/videos/ocean-waves.mp4" type="video/mp4" />
      </video>


    </div>
  )
}

export default HomeVideo