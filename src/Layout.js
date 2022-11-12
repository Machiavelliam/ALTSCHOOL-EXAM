import React from 'react'
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse'
import { Link, Outlet, NavLink } from 'react-router-dom'

const Layout = () => {
  return (
    <>
      <nav className='navbar'>
        <ul>
          <li>
            <NavLink to="/" >Home </NavLink>
          </li>
          <li>
            <NavLink to="/Product">Product</NavLink>
          </li>
          <li>
            <NavLink to="/AboutUs">About</NavLink>
          </li>
          <li>
            <NavLink to="/Profile">Profile</NavLink>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>



  )
}

export default Layout

