import React, { useContext } from 'react'
import CheckoutContext from '../../contexts/CheckoutContext'
import '../../css/main/CheckoutComponent.css'

const CheckoutComponent = () => {
  const { cart, setCart } = useContext(CheckoutContext)

  const generateCartItem = (itemKey) => {
    const handleCartItemDecrementOnClick = (e) => {
      if(cart.items[itemKey].quantity > 1) {
        setCart((oldCart) => {
          const newCart = { items: { ...oldCart.items }, totalPrice: oldCart.totalPrice, totalItems: oldCart.totalItems }

          newCart.items[itemKey] = { ...newCart.items[itemKey] }

          newCart.items[itemKey].quantity--

          newCart.totalPrice -= newCart.items[itemKey].price
          newCart.totalItems -= 1

          return newCart
        })
      }
    }

    const handleCartItemIncrementOnClick = (e) => {
      setCart((oldCart) => {
        const newCart = { items: { ...oldCart.items }, totalPrice: oldCart.totalPrice, totalItems: oldCart.totalItems }

        newCart.items[itemKey] = { ...newCart.items[itemKey] }

        newCart.items[itemKey].quantity++

        newCart.totalPrice += newCart.items[itemKey].price
        newCart.totalItems += 1

        return newCart
      })
    }

    const handleCartItemDeleteOnClick = (e) => {
      setCart((oldCart) => {
        const newCart = { items: { ...oldCart.items }, totalPrice: oldCart.totalPrice, totalItems: oldCart.totalItems }

        newCart.totalPrice -= newCart.items[itemKey].price * newCart.items[itemKey].quantity
        newCart.totalItems -= newCart.items[itemKey].quantity

        delete newCart.items[itemKey]

        return newCart
      })
    }

    return (
      <li key={ `${itemKey}-checkout-item` } id={ `${itemKey}-checkout-item` } className='checkout-item'>
        <img className='checkout-item-thumbnail' src={ cart.items[itemKey].thumbnail }></img>

        <p className='checkout-item-title'>{ cart.items[itemKey].title }</p>

        <form className='cart-item-quantity-controls-form'>
          <input className='cart-item-decrement-quantity-button' type='button' value='-' onClick={ handleCartItemDecrementOnClick }></input>

          <p className='checkout-item-quantity'>{ cart.items[itemKey].quantity }</p>

          <input className='cart-item-increment-quantity-button' type='button' value='+' onClick={ handleCartItemIncrementOnClick }></input>
        </form>

        <p className='checkout-item-price'>${ cart.items[itemKey].price * cart.items[itemKey].quantity }</p>

        <input className='checkout-item-delete-button' type='button' value='delete' onClick={ handleCartItemDeleteOnClick }></input>
      </li>
    )
  }

  return (
    <main id='checkout-main'>
      <header id='checkout-main-header'>
        <h2>Checkout</h2>
      </header>

      {
        Object.keys(cart.items).length ?
          <>
            <ul id='checkout-items-list'>
              { Object.keys(cart.items).map((itemKey) => generateCartItem(itemKey)) }
            </ul>
    
            <p id='checkout-total-price'>{ `Total: $${cart.totalPrice}` }</p>
          </> : 
          <h3>Empty</h3>
      }
    </main>
  )
}

export default CheckoutComponent