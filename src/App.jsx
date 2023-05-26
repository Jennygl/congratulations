// import { useState } from 'react'
// import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import HomeView from './pages/HomeView'
import GiftView from './pages/GiftView'

function App() {

  return (
    <>
    <div className="App">
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<HomeView/>}/>
            <Route path="/present" element={<GiftView/>}/>
        </Routes>
        </BrowserRouter>
    </div>
    </>
  )
}

export default App
