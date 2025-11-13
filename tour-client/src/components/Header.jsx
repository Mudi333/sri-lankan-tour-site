import React from 'react'
import { Button } from "@/components/ui/button"

function Header() {
  return (
    <div className='p-4 shadow-smflex justify-between items-center flex px-5'>
     
      <img src='/logo.svg' alt='logo' />
      <div>
      <Button>Sign In</Button>
   

      </div>
      
    </div>
   
  )
}

export default Header