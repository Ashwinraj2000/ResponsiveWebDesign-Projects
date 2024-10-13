import { useState,useContext } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Navbar from './navbar'
import Store from './Pages/store'
import Success from './Pages/success'
import Cancel from './Pages/cancel'
import {CartProvider} from './cartContext'

function App() {
  return (
    <CartProvider>
     <div className="container">
        <Navbar></Navbar>
     </div>
        <BrowserRouter>
            <Routes>
              <Route index element={<Store/>}/>
              <Route path="Success" element={<Success/>}/>
              <Route path="Cancel" element={<Cancel/>}/>
            </Routes>
        </BrowserRouter>
    </CartProvider>
  )
}

export default App
