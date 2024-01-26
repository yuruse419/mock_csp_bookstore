import React from "react"
import { useNavigate } from "react-router-dom"
import '../../css/header/HeaderComponent.css'

const HeaderComponent = () => {
  const navigate = useNavigate()

  const handleLogoutOnClick = (e) => {
    navigate('/')
  }

  return (
    <header id='page-header'>
      <h1 id='page-h1'>Mock Bookstore</h1>

      <details>
        <summary>Welcome, User</summary>

        <input id='logout-button' type='button' value='Logout' onClick={ handleLogoutOnClick }></input>
      </details>
    </header>
  )
}

export default HeaderComponent