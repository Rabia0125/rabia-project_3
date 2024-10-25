"use client"
import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

const Home = () => {
  const route = useRouter()
  return (
    <div className='bg-blue-400 flex justify-between items-center'>
      <h1 className='text-4xl '>Navbar</h1>
      {/* <button onClick={()=>route.push("/about")}>About</button>
      <button onClick={()=>route.push("/contact")}>Contact</button>
      <button onClick={()=>route.push("/footer")}>Footer</button> */}
      <Link className='text-2xl hover:text-white' href="/about">About</Link>
      <Link className='text-2xl hover:text-white' href="/contact">Contact</Link>
      <Link className='text-2xl hover:text-white' href="/footer">Footer</Link>
    </div>
  )
}

export default Home