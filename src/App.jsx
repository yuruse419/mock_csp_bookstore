import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import ApparelShopPage from './pages/ApparelShopPage'
import { AuthProvider } from './contexts/AuthContext'
import { ApparelProvider } from './contexts/ApparelContext'

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <ApparelProvider>
          <Routes>
          <Route path='/' element={ <LoginPage /> } />
            <Route path='/category/apparel' element={ <ApparelShopPage /> } />
          </Routes>
        </ApparelProvider>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App
