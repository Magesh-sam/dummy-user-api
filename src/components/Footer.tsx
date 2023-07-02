import Link from 'next/link'
import React from 'react'



export const Footer = () => {
    const d = new Date().getFullYear( )
  return (
    <footer className='bg-[#f1f1f150] sticky top-0 left-0 flex flex-row justify-end items-center px-[5%] min-h-[60px] rounded-t-3xl '>
      <p className='text-white text-xs xs:text-sm md:text-lg lg:text-xl '> Designed & Developed with ❤️ by <Link className='underline underline-offset-4' href='https://github.com/magesh-sam' target='_blank' rel='noreferrer' >Mageshkannan 👨‍💻</Link>  © {d} </p>
    </footer>
  )
}
