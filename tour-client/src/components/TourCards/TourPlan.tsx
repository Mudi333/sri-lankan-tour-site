import React from 'react'
import Tourcard from './Tourcard';
import style from "./TourPlan.module.css";


function TourPlan() {
  return (

    <section className={style.tour_section_dark} id="tours">
      <h2>Find Your Perfect Journey</h2>
      <div className={style.tours_grid}>
        <Tourcard
          title="Romantic Coastal Escape"
          description="Sunset cruises, candlelight dinners, and handpicked boutique stays along Sri Lanka's golden shores."
          tag="Couple • 5 Days"
          img1="/images/couple-2.jpg"
          img2="/images/map-1.png"
          to="/tours/couple"
        />
        <Tourcard
          title="Family Discovery Trail"
          description="Kid-friendly adventures with wildlife safaris, cultural experiences, and plenty of beach time."
          tag="Family • 7 Days"
          img1="/images/family-1.png"
          img2="/images/map-1.png"
          to="/tours/family"
        />
        <Tourcard
          title="Group Adventure Circuit"
          description="Epic hikes, waterfalls, and nights by the campfire—perfect for friends and groups ready to explore."
          tag="Group • 6 Days"
          img1="/images/group-1.png"
          img2="/images/map-1.png"
          to="/tours/group"
        />
        <Tourcard
          title="Solo Explorer Journey"
          description="Safe, flexible itineraries with local hosts and guides who help you feel at home wherever you go."
          tag="Solo • 4 Days"
          img1="/images/solo-1.png"
          img2="/images/map-1.png"
          to="/tours/solo"
        />
      </div>
    </section>
  )
}

export default TourPlan