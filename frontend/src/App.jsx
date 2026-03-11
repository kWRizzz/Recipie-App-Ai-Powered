import React from 'react'
import Register from './Components/Auth/Register'
import Login from './Components/Auth/Login'
import Home from './Components/Page/Home/Home'
import Recipie from './Components/Page/Recipie/Recipie'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Nav from './Components/Page/Nav/Nav'

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route
          path="/"
          element={<Home />}
        />
        <Route
          path="/Recipie"
          element={<Recipie />}
        />
        <Route
          path='/SignIn'
          element={<Register />}
        />
        <Route
          path='/LogIn'
          element={<Login/>}
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App