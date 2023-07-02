import Link from 'next/link'
import React from 'react'

export const Navbar = () => {
  return (
      <nav className='bg-[#f1f1f150] sticky top-0 left-0 flex flex-row justify-between items-center px-[5%] h-[60px] rounded-b-3xl '>
          <p className='text-white font-bold text-xl sm:text-2xl md:text-3xl' >👨‍💻 Dummy User</p>
          <Link className='text-[#f1f1f1]  rounded border-2 p-1 text-md sm:text-lg md:text-xl ' href='/'>Docs 📄</Link>
    </nav>
  )
}
