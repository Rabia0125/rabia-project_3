import Link from 'next/link'
import React from 'react'

const AboutPage = () => {
  return (
    <div>
        <center>
        <Link href="/">Home</Link>
        <h1 className='bg-green-300 text-4xl h-screen'>Welcome to the About page</h1>
        </center>
    </div>
  )
}

export default AboutPage