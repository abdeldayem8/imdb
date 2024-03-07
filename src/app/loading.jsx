'use client'
import React from 'react'
import { RotatingTriangles } from 'react-loader-spinner'

export default function Loading() {
  return <>
  <div className='flex justify-center mt-10'>
  <RotatingTriangles
  visible={true}
  height="80"
  width="80"
  color="#4fa94d"
  ariaLabel="rotating-triangles-loading"
  wrapperStyle={{}}
  wrapperClass=""
  />
   </div>
  </>
}
