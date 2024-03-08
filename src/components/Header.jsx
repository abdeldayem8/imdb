import React from 'react'
import Menuitem from './Menuitem'
import { MdHome } from "react-icons/md";
import { BsFillInfoCircleFill } from "react-icons/bs";
import Link from 'next/link';
import Darkmode from './Darkmode';

export default function Header() {
  return (
    <div className='flex justify-between itmes-center p-3 max-w-6xl mx-auto'>
     <div className='flex gap-4'>
        <Menuitem  title='home' address='/' Icon={MdHome} />
        <Menuitem  title='about' address='/about' Icon={BsFillInfoCircleFill} />
     </div>
     <div className='flex items-center gap-4' >
      <Darkmode/>
     <Link href={'/'} className='flex gap-1 items-center'>
      <span className='text-2xl font-bold bg-amber-500 py-1 px-2 rounded-lg'>IMDB</span>
      <span className='text-xl hidden sm:inline'>Clone</span>
     </Link> 
     </div>
    </div>
  )
}
