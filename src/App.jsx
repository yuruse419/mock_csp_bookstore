import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import ApparelShopPage from './pages/ApparelShopPage'
import CheckoutPage from './pages/CheckoutPage'
import { AuthProvider } from './contexts/AuthContext'
import { CheckoutProvider } from './contexts/CheckoutContext'
import { ApparelProvider } from './contexts/ApparelContext'

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <CheckoutProvider>
          <ApparelProvider>
            <Routes>
              <Route path='/' element={ <LoginPage /> } />
              <Route path='/apparel' element={ <ApparelShopPage /> } />
              <Route path='/checkout' element={ <CheckoutPage /> }></Route>
            </Routes>
          </ApparelProvider>
        </CheckoutProvider>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App
