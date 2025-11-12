import React from 'react'
import { Outlet } from 'react-router-dom'

export default function layout() {
  return (
    <div>
      hello from layout
      <div className='min-h-svh flex flex-col'>
        <main>{<Outlet />}</main>
   <footer className="border-t text-sm py-6 text-center text-muted-foreground">
        © {new Date().getFullYear()} Sri Lankan Tours🌴
      </footer>
      </div>
    </div>
  )
}

