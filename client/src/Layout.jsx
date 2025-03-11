import React from 'react'
import Header from './components/Header'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from "./pages/Home"
import Newregistration from './pages/Newregistration'

const Layout = () => {
  return (
    <div>
    <Header/>
    <BrowserRouter>
      <Routes>
            <Route path="/" element={<Home />}/>
            <Route path='/home' element={<Home />} />
            <Route path='/register' element={<Newregistration/>} />
      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default Layout