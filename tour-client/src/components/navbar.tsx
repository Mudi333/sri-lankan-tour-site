import React from 'react'
import { NavLink } from 'react-router-dom'




export default function Navbar() {

  return (
 <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur">
      <div className="w-full mx-auto max-w-7xl px-4 h-16 flex items-center justify-between">
        
  <nav className="hidden md:flex gap-6 ">
          <NavLink to="/" className="hover:underline">Home</NavLink>
          <NavLink to="/tours" className="hover:underline">Tours</NavLink>
             {/* <NavLink to="/register" className="hover:underline">Register</NavLink>
                <NavLink to="/signin" className="hover:underline">Sign in</NavLink> */}
                   <NavLink to="/contact" className="hover:underline">Contact</NavLink>
                      <NavLink to="/gide" className="hover:underline">guide</NavLink>


        </nav>

        
       


      
{/* 
        <div className="flex gap-2">
          <Button variant="ghost" onClick={() => setOpenAuth('login')}>Sign in</Button>
          <Button onClick={() => setOpenAuth('register')}>Register</Button>
        </div> */}
      
    </div>
         {/* <AuthModel mode={openAuth} onOpenChange={setOpenAuth} /> */}
    </header>
 
  )
}



