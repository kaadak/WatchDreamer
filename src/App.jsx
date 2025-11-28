import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './assets/components/Header.jsx'
import Home from './assets/pages/Home.jsx'
import About from './assets/pages/About.jsx'
import Service from './assets/pages/Service.jsx'
import Contact from './assets/pages/Contact.jsx'

const App = () => {
  return (
    <Router>
      <Header/>

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/service' element={<Service/>}/>
      </Routes>
    </Router>
  )
}

export default App
