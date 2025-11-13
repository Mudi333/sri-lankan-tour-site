


// function BackImage() {
//   return (
//     <div className="absolute inset-0">
//       <img
//         src="/images/sea2.jpg"
//         alt="beachBoat"
//         className="w-full h-full object-cover"
//       />

//     </div>
//   )
// }
// export default BackImage

// BackImage.jsx
export default function BackImage() {
  return (
    <div className="absolute inset-0">
      <img
        src="/images/sea2.jpg"  
        alt="beachBoat"
        className="w-full h-full object-cover"
      />
      {/* optional: comment out if you don't want any dark overlay */}
      <div className="absolute inset-0 bg-blue/20" />
    </div>
  )
}
