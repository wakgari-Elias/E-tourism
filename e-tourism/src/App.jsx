import React from 'react'
import './App.css'
import {  Routes, Route } from 'react-router-dom'
import Home from './pages/Home'

import Header from './Components/Common/Header/Header'
import Footer from  './Components/Common/Footer/Footer'

const App = () => {
  return (
    <>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />


    </Routes>
    <Footer />
      
      </>
    
  )
}

export default App
