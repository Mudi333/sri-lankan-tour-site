import React from 'react'
import Tourcard from './Tourcard';
import "./TourPlan.css";


function TourPlan() {
  return (
    <section className="tours-section" id="tours">
      <h2>Find Your Perfect Journey</h2>
      <div className="tours-grid">
        <Tourcard
          title="Romantic Coastal Escape"
          description="Sunset cruises, candlelight dinners, and handpicked boutique stays along Sri Lanka's golden shores."
          tag="Couple • 5 Days"
          img1="/images/couple1.png"
          img2="/images/couple-2.jpg"
          to="/tours/couple"
        />
        <Tourcard
          title="Family Discovery Trail"
          description="Kid-friendly adventures with wildlife safaris, cultural experiences, and plenty of beach time."
          tag="Family • 7 Days"
          img1="/images/family1.png"
          img2="/images/family2.png"
          to="/tours/family"
        />
        <Tourcard
          title="Group Adventure Circuit"
          description="Epic hikes, waterfalls, and nights by the campfire—perfect for friends and groups ready to explore."
          tag="Group • 6 Days"
          img1="/images/group1.png"
          img2="/images/group-2.jpg"
          to="/tours/group"
        />
        <Tourcard
          title="Solo Explorer Journey"
          description="Safe, flexible itineraries with local hosts and guides who help you feel at home wherever you go."
          tag="Solo • 4 Days"
          img1="/images/solo1.png"
          img2="/images/solo-2.jpg"
          to="/tours/solo"
        />
      </div>
    </section>
  )
}

export default TourPlan