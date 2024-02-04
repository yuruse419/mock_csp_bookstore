import React, { createContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const navigate = useNavigate()

  useEffect(() => {
    if(isLoggedIn) {
      navigate('/apparel')
    }
    else {
      navigate('/')
    }
  }, [isLoggedIn])

  return (
    <AuthContext.Provider value={ { username, setUsername, password, setPassword, isLoggedIn, setIsLoggedIn } }>{ children }</AuthContext.Provider>
  )
}

export default AuthContext