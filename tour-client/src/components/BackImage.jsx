// import React from 'react'

// function BackImage() {
//   return (
//     <div>
//       <img src="/../images/sea2.jpg" alt="beachBoat"    className="w-full h-full rounded-lg" />
//     </div>
//   )
// }

// export default BackImage
// If the file is in /public/images use: src="/images/sea2.jpg"
// If it's in src/assets, import it:  import sea2 from "@/assets/sea2.jpg"
function BackImage() {
  return (
    <div className="absolute inset-0">
      <img
        src="/images/sea2.jpg"
        alt="beachBoat"
        className="w-full h-full object-cover"
      />
      {/* If you had a dark overlay, remove it or keep it subtle */}
      {/* <div className="absolute inset-0 bg-black/20" /> */}
    </div>
  )
}
export default BackImage
