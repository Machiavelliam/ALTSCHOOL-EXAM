import React from 'react'
import { Link } from 'react-router-dom'

const AboutUs = () => {
  return (
    <div>
        <h1 className='text-info'> This is About Us</h1>
        <Link to="/" className='btn'>Bak Home</Link>
    </div>
  )
}

export default AboutUs