import React from 'react'
import Navbaritem from './Navbaritem'
import { Suspense } from 'react'
export default function Navbar() {
  return <>
  <div className='flex justify-center gap-6 p-4 dark:bg-gray-600 bg-amber-100 lg:text-lg'>
    <Suspense>
   <Navbaritem  title='Trending' param='fetchTrending' />
   <Navbaritem  title='Top Rated'param='fetchTopRated'  />
   </Suspense>
   </div>
  </>
}
