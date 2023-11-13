import React from 'react'
import Header from './components/Header'
import { Routes, Route, Outlet } from "react-router-dom"
import Home from './components/Home'
import Price from './components/Price'
import Features from './components/Features'
import "./App.css"
import Footer from './components/Footer'
import Login from './components/Login'
export default function App() {
  return (
    <>
      <div>
        <Routes>
          <Route path='/' element=
            {
              <>
                <Header /><Outlet /><Footer />
              </>
            }
          >
            <Route path='/' element={<Home />} />
            <Route path='/price' element={<Price />} />
            <Route path='/features' element={<Features />} />

          </Route>
          <Route path='/login' element={<Login />} />
        </Routes>
      </div>
    </>
  )
}
