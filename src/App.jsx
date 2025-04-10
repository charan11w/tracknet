import './App.css'
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom'
import Header from './Components/common/Header'
import { useState } from 'react'

function App() {
  
  const[login,setLogin] =useState(false)

  

  return (
   <BrowserRouter>
   <Header login={login}/>
   <Routes>
    <Route path='/' />
   </Routes>
   </BrowserRouter>
  )
}

export default App
