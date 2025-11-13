// import React from 'react'
// import { Outlet } from 'react-router-dom'
// import Navbar from '@/components/navbar'
// import "./index.css"
// import Header from '@/components/Header'

// export default function layout() {
//   return (
//     <div className='text-gray-700 text-base  flex flex-col'>
//       hello from app
//       <div className='flex flex-col'>
//     <Header />
//         <Navbar />
       
//         <main className='flex-1'>
//             <Outlet />
//             </main>
//    <footer className="border-t text-sm py-6 text-center text-muted-foreground">
//         © {new Date().getFullYear()} Sri Lankan Tours🌴
//       </footer>
//       </div>
//     </div>
//   )
// }


// import React from 'react'
// import { Outlet } from 'react-router-dom'
// import Navbar from '@/components/navbar'
// import './index.css'
// import Header from '@/components/Header'
// import BackImage from '@/components/BackImage'


// export default function App() {
//   return (
//     // <div className="text-gray-700 text-base min-h-screen flex flex-col bcg-red-50">
//     <div>
        
        
//         <Header/>
//       {/* Header/Navbar */}
       
//       <Navbar />
//       <BackImage />

//       {/* Page content */}
//       <main className="flex-1">
//         <Outlet />
//       </main>

 
//     </div>
//   )
// }
import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '@/components/navbar'
import './index.css'
import Header from '@/components/Header'
import BackImage from '@/components/BackImage'

export default function App() {
 return (
   <div className="min-h-screen w-full flex flex-col text-base text-gray-700">
         <Header/>
         <Navbar />
         {/* <BackImage /> */}
 
         <main className="flex-1">
           <Outlet />
         </main>
     </div>
   )
}