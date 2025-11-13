// import React from 'react'
// import { Button } from "@/components/ui/button"

// function Hero() {
//   return (
//     <div className='flex flex-col items-center mx-56 gap-9'>
//         <h1 className='font-extrabold text-[50px]'><span className='text-[#190eb6]'>Discover Sri Lanka your way:</span> Personalized plan at your Finger tips.</h1>
//   <p className='text-xl text-gray-500 text-center'>From tea blanketed hills to palm laced shores—our specialists design private journeys that match your rhythm.Plan your perfect trip in seconds! your AI-powered travel companion that crafts personalized itineraries based on your preferences. Explore new destinations, activities, and accommodations tailored just for you. Say goodbye to hours of research and hello to effortless travel planning!
//   </p>
//   <Button>Register Now, it's free</Button>
//     </div>
//   )
// }

// export default Hero


import React from "react"
import { Button } from "@/components/ui/button"
import BackImage from "@/components/BackImage"

function Hero() {
  return (
    // Give the hero a fixed height and a stacking context
    <section className="relative min-h-[70vh] flex items-center">
      <BackImage />

      {/* content sits above the background */}
      <div className="relative z-10 mx-auto max-w-5xl px-4 text-center space-y-6">
        <h1 className="font-extrabold text-[42px] md:text-[56px] leading-tight">
          <span className="text-[#9e1241]">Discover Sri Lanka your way:</span>{" "}
          Personalized plan at your Finger tips.
        </h1>
        <p className="text-lg md:text-xl text-gray-500">
          From tea blanketed hills to palm laced shores—our specialists design private journeys that match your rhythm...
        </p>
        <Button>Register Now, it’s Free</Button>
      </div>
    </section>
  )
}
export default Hero
