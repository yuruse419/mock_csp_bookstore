import React from "react"
import { useNavigate } from "react-router-dom"
import { useSelector } from "react-redux"
import '../../css/header/Header.css'

const Header = () => {
  const navigate = useNavigate()

  const { username } = useSelector((state) => state.auth)
  const { cart } = useSelector((state) => state.checkout)

  const handleNavigationButtonOnClick = (e) => {
    if(e.target.value === 'Cart') {
      navigate('/checkout')
    }
    else if(e.target.value === 'Apparel') {
      navigate('/apparel')
    }
    else if(e.target.value === 'Books') {
      navigate('/books')
    }
  }

  const handleLogoutOnClick = (e) => {
    navigate('/')
  }

  return (
    <header id='page-header'>
      <h1 id='page-h1'>Mock Bookstore</h1>

      <nav>
        <input className='navigation-button' type='button' value='Apparel' onClick={ handleNavigationButtonOnClick }></input>
        |
        <input className='navigation-button' type='button' value='Books' onClick={ handleNavigationButtonOnClick }></input>
      </nav>

      <form id='user-profile-form'>
        <fieldset id='cart-button-container' className='overlayed-button-container'>
          <input className='overlayed-button' type='button' value='Cart' onClick={ handleNavigationButtonOnClick }></input>

          <img src='/cart-icon.svg'></img>

          { 
            cart.totalItems ? 
              <p>{ cart.totalItems }</p>
            :
              null
          }
        </fieldset>

        <fieldset>
          <p>Welcome, { username }</p>

          <input id='logout-button' type='button' value='Logout' onClick={ handleLogoutOnClick }></input>
        </fieldset>
      </form>
    </header>
  )
}

export default Header