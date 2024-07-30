import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Home from '../pages/Home';
import About from '../pages/About';
import AllCompany from '../pages/AllCompany';
import ContactUs from '../pages/ContactUs';
import Login from '../pages/Login';
import AllJob from '../pages/AllJob';
import Register from '../pages/Register';

const Routers = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigate to='/home' />} />
      <Route path='/home' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/allcompany' element={<AllCompany/>}/>
      <Route path='/alljob' element={<AllJob/>}/>
      <Route path='/contactus' element={<ContactUs/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
    </Routes>
  )
}

export default Routers
