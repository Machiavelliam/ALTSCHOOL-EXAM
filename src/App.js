import React from 'react'
import { AuthProvider } from './auth'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import AboutUs from './AboutUs'
import Layout from "./Layout"
import Product from './pages/Product'
import NoPage from './NoPage'
import NewProducts from './NewProducts'
import FeaturedProducts from './FeaturedProducts'
import Profile from './Profile'
import User from './User'
import Login from './Login'



const App = () => {
  return (
    <AuthProvider>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="AboutUs" element={<AboutUs />} />
        <Route path="*" element={<NoPage/>} />
        <Route path="Product" element={<Product />} >
                <Route path='NewProducts' element={<NewProducts/>}/>
                <Route path='FeaturedProducts' element={<FeaturedProducts/>}/>
        </Route>
        <Route path="Profile" element={<Profile />} >
              <Route path='User' element={<User />}/>
            </Route>
        <Route path="Login" element={<Login />} />
      </Route>
    </Routes>
  </BrowserRouter>
  </AuthProvider>
  )
}

export default App