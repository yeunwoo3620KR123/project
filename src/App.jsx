import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Main from './components/Main'
import Login from './components/Login'
import Regist from './components/Regist'

function App() {


  return (
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Main/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/regist' element={<Regist/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
