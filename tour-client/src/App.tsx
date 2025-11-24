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
import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "@/components/Navbar/navbar";

// import BackVedio from "./components/BackVedio";
import Header from "./components/Header/Header";
import HomeVideo from "./HomeVideo/HomeVideo";


export default function App() {
  return (
    <div className="layout">
hello
      <HomeVideo />
      <Header />

      <Navbar />
      <main className="flex-1">
        <div className="relative w-full h-screen overflow-hidden">
          {/* Background Video */}
          {/* <BackVedio /> */}
          <Outlet />
        </div>
        {/* <Outlet /> */}
      </main>
    </div>
  );
}
