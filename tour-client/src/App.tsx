import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '@/components/navbar'
import "./index.css"

export default function layout() {
  return (
    <div className='text-gray-700 text-base min-h-svh flex flex-col'>
      hello from app
      <div className='min-h-svh flex flex-col'>
        <Navbar />
        <main className='flex-1'>
            <Outlet />
            </main>
   <footer className="border-t text-sm py-6 text-center text-muted-foreground">
        © {new Date().getFullYear()} Sri Lankan Tours🌴
      </footer>
      </div>
    </div>
  )
}

