import React, { useContext } from "react"
import AuthContext from "../../contexts/AuthContext"
import CheckoutContext from "../../contexts/CheckoutContext"
import { useNavigate } from "react-router-dom"
import '../../css/header/HeaderComponent.css'

const HeaderComponent = () => {
  const { setIsLoggedIn } = useContext(AuthContext)
  const { cart } = useContext(CheckoutContext)

  const navigate = useNavigate()

  const handleApparelNavigationButtonOnClick = (e) => {
    navigate('/apparel')
  }

  const handleCartOnClick = (e) => {
    navigate('/checkout')
  }

  const handleLogoutOnClick = (e) => {
    setIsLoggedIn(false)
  }

  return (
    <header id='page-header'>
      <h1 id='page-h1'>Mock Bookstore</h1>

      <nav>
        <input className='navigation-button' type='button' value='Apparel' onClick={ handleApparelNavigationButtonOnClick }></input>
      </nav>

      <form id='user-profile-form'>
        <fieldset id='cart-button-container' className='overlayed-button-container'>
          <input className='overlayed-button' type='button' onClick={ handleCartOnClick }></input>

          <img src='/cart-icon.svg'></img>

          { 
            cart.totalItems ? 
              <p>{ cart.totalItems }</p>
            :
              null
          }
        </fieldset>

        <fieldset>
          <p>Welcome, User</p>

          <input id='logout-button' type='button' value='Logout' onClick={ handleLogoutOnClick }></input>
        </fieldset>
      </form>
    </header>
  )
}

export default HeaderComponent