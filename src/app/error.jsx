'use client'

import { useEffect } from "react"

export default function Error({error,reset}) {
    useEffect(()=>{
        console.log(error);
    },[error])
  return <>
  <div className="text-center mt-10">
    <h1>SomeThing Went Wrong. Please Try Again Later. </h1>
    <button className={` text-white dark:text-gray-800 bg-gray-800 dark:bg-white   py-2 px-4 rounded-lg focus:outline-none  `} onClick={()=>reset()}>Try Again</button>
  </div>
  </>
}
