import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ContextProvider from './context/ContextProvider'
import LoginPage from './page/LoginPage'
import ApparelPage from './page/ApparelPage'
import BooksPage from './page/BooksPage'
import CheckoutPage from './page/CheckoutPage'

function App() {
  return (
    <BrowserRouter>
      <ContextProvider>
        <Routes>
          <Route path='/' element={ <LoginPage /> } />
          <Route path='/apparel' element={ <ApparelPage /> } />
          <Route path='/books' element={ <BooksPage /> } />
          <Route path='/checkout' element={ <CheckoutPage /> }></Route>
        </Routes>
      </ContextProvider>
    </BrowserRouter>
  )
}

export default App
