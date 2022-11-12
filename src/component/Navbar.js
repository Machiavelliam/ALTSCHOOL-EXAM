import React from 'react'
import { Nav } from 'react-bootstrap'
import { Link, Outlet, NavLink } from 'react-router-dom'
import { authProvider, useAuth } from '../auth'
import Login from '../Login'

const Navbar = () => {

  const navLinkStyles = ({ isActive}) => { 
return{ 
  fontWeight: isActive? "bold" : "normal",
  textDecoration : isActive? "none": "underline",
}

  }
  const auth = useAuth()
  return (


    <nav className='navbar'>
        <NavLink style={navLinkStyles} to="/"> Home </NavLink>
        <NavLink style={navLinkStyles} to="/About"> About </NavLink>
        <NavLink style={navLinkStyles} to="/Product"> Product </NavLink>
         {!auth.user &&  <NavLink style={navLinkStyles} to="/Login"> Login </NavLink>
         }
    </nav>
  )
}

export default Navbar