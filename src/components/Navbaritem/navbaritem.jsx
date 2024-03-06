'use client'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import React from 'react'

export default function Navbaritem({title,param}) {
   const searchparams =  useSearchParams();
   const genre = searchparams.get('genre');
  return <>
     <div>
        <Link className={`hover:text-amber-500 font-semibold ${genre === param ?'underline underline-offset-8 decoration-4 decoration-amber-500 rounded-lg' :''}`} href={`/?genre=${param}`}>
          {title}
        </Link>
     </div>
  </>
}
