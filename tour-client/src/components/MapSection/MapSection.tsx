import React from 'react'
import  style from "./MapSection.module.css"

const MapSection = () => {
  return (
   
       <section className={style.section_dark} id="why-us">
        <div className={style.map_section}>
<div className={style.div_container}>
<div className="map_text">
        <h2>Explore Sri Lanka</h2>
        <p>
          From the cultural triangle in the heart of the island to the
          tranquil southern beaches, choose from a diverse set of destinations
          tailored to your style of travel.
        </p>
        <ul>
          <li>Culture & heritage in Kandy and Anuradhapura</li>
          <li>Golden beaches along the southern coast</li>
          <li>Tea country escapes in Ella and Nuwara Eliya</li>
          <li>Wildlife adventures at Yala & Udawalawe</li>
        </ul>
      </div>
      <div className="map_container">
        <iframe
          title="Sri Lanka Map"
          className="map_iframe"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          // This is a sample embed URL – you can replace it with your own
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6362623.032042824!2d76.2760075!3d7.6080146!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae165e40c9416d3%3A0xdea5d06bbc664eca!2sSri%20Lanka!5e0!3m2!1sen!2slk!4v1700000000000"
        ></iframe>
      </div>
      </div>


        </div>
      


     
    </section>
 
    




  )
}

export default MapSection

