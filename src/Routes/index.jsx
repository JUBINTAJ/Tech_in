import React, { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import Wishlist from '../Pages/Wishlist'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import Loading from '../Components/Loding'

function index() {
   const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  
  if (isLoading) {
    return <Loading />;
  }
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
