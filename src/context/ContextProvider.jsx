import React from 'react'
import { BooksProvider } from './BooksContext'

const ContextProvider = ({ children }) => {
  return (
    <BooksProvider>{ children }</BooksProvider>
  )
}

export default ContextProvider