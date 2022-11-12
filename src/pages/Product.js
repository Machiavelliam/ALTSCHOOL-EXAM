import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Product = () => {
  return (
    <div>
        <h1 className='text-dark'> Hello Product </h1>
                <Link to="FeaturedProducts" className='btn'>Featured Product </Link>
                <Link to="NewProducts" className='btn'>New Product </Link>
                <Outlet/>
    </div>
  )
}

export default Product