import { useState } from 'react'
import Navbar from './components/navbar'
import Hero from './components/Hero'
import Analytics from './components/Analytics'
import NewsLetter from './components/NewsLetter'
import Cards from './components/Cards'
import Footer from './components/Footer'

function App() {
  return (
    <div>
        <Navbar></Navbar>
        <Hero></Hero>
        <Analytics></Analytics>
        <NewsLetter></NewsLetter>
        <Cards></Cards>
        <Footer></Footer>
    </div>
  )
}

export default App
