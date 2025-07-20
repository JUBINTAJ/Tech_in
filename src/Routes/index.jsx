import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import Wishlist from '../Pages/Wishlist'
import Header from '../Components/Header'
import Footer from '../Components/Footer'

function index() {
  return (
    <div>
        <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/save' element={<Wishlist/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default index
