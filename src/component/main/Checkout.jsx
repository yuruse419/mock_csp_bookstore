import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { incrementItem, decrementItem, deleteItem } from '../../redux/slice/checkoutSlice'
import '../../css/main/Checkout.css'

const Checkout = () => {
  const dispatch = useDispatch()

  const { cart } = useSelector((state) => state.checkout)

  const generateCartItem = (itemKey) => {
    const handleCartItemDecrementOnClick = (e) => {
      dispatch(decrementItem(itemKey))
    }

    const handleCartItemIncrementOnClick = (e) => {
      dispatch(incrementItem(itemKey))
    }

    const handleCartItemDeleteOnClick = (e) => {
      dispatch(deleteItem(itemKey))
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

export default Checkout