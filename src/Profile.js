import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import { useAuth } from './auth'
import { useNavigate } from 'react-router-dom'

const Profile = () => {
  const auth =  useAuth() 
  const navigate = useNavigate
  const handleLogOut = () =>{ 
    auth.logout()
    navigate("/")

  }
  return (
    <div>
      <>Welcome {auth.user}</>
        <Link to="User"> User 
        </Link>
        <Outlet/>
        <button onClick={handleLogOut}> LOG OUT </button>
    </div>
  )
}

export default Profile