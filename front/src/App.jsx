import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Main from './components/Main'
import Login from './components/Login'
import Regist from './components/Regist'
import Settings from './components/Settings'
import EditUser from './components/EditUser'
import DeleteUser from './components/DeleteUser'
import MainPage from './components/MainPage'

function App() {


  return (
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Main/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/regist' element={<Regist/>}/>
    <Route path='/mainpage' element={<MainPage/>}/>
    <Route path='/settings' element={<Settings/>}/>
    <Route path='/settings/edit' element={<EditUser/>}/>
    <Route path='/settings/delete' element={<DeleteUser/>}/>


    </Routes>
    </BrowserRouter>
  )
}

export default App
