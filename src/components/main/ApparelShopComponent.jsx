import React, { useContext } from 'react'
import ApparelContext from '../../contexts/ApparelContext'
import CheckoutContext from '../../contexts/CheckoutContext'
import '../../css/main/ApparelShopComponent.css'

const ApparelShopComponent = () => {
  const { apparelItems, setSortedBy } = useContext(ApparelContext)
  const { setCart } = useContext(CheckoutContext)

  /* generateApparelItem helper functions */

  const handleAddToCartOnClick = (e) => {
    const idDelimiter = e.target.id.indexOf('-')
    const itemId = Number(e.target.id.substring(0, idDelimiter))

    setCart((oldCart) => {
      const newCart = { items: { ...oldCart.items }, totalPrice: oldCart.totalPrice, totalItems: oldCart.totalItems }

      if(newCart.items[`${itemId}-apparel`]) {
        newCart.items[`${itemId}-apparel`] = { ...newCart.items[`${itemId}-apparel`] }

        newCart.items[`${itemId}-apparel`].quantity++

        newCart.totalPrice += newCart.items[`${itemId}-apparel`].price
        newCart.totalItems += 1
      }
      else {
        for(let item of apparelItems) {
          if(item.id === itemId) {
            newCart.items[`${itemId}-apparel`] = { ...item, quantity: 1 }

            newCart.totalPrice += newCart.items[`${itemId}-apparel`].price
            newCart.totalItems += 1

            break
          }
        }
      }

      return newCart
    })
  }

  // generate a list item
  const generateApparelItem = (item) => {
    /*
      {
        brand,
        category,
        description,
        discountPercentage,
        id,
        images: [
          'product-image.jpg', 
          ...
        ],
        price,
        rating,
        stock,
        thumbnail,
        title
      }
    */

    return (
      <li key={ item.id } id={ item.id } className='apparel-item'>
        <figure className='apparel-item-figure'>
          <img src={ item.thumbnail }></img>

          <figcaption className='apparel-item-figcaption'>{ item.title }</figcaption>
        </figure>

        <section className='apparel-item-details-section'>
          <h2 hidden>{ item.title } Details</h2>

          <p className='apparel-item-description'>{ item.description }</p>

          <p className='apparel-item-price'>${ item.price }</p>
        </section>

        <section>
          <input id={ `${item.id}-apparel-item-add-to-cart-button` } className='apparel-item-add-to-cart-button' type='button' value='Add to Cart' onClick={ handleAddToCartOnClick }></input>
        </section>
      </li>
    )
  }

  // handle sort button onClick
  const handleSortOnClick = (e) => {
    setSortedBy((oldSortedBy) => {
      const delimiter = oldSortedBy.indexOf(' ')

      let property = oldSortedBy.substring(0, delimiter)
      let orientation = oldSortedBy.substring(delimiter + 1)

      // if sort button value is 'Title'
      if(e.target.value === 'Title') {
        if(property === 'title' && orientation === 'asc') {
          orientation = 'des'
        }
        else {
          property = 'title'
          orientation = 'asc'
        }
      }
      // else if sort button value is 'Price'
      else if(e.target.value === 'Price') {
        if(property === 'price' && orientation === 'asc') {
          orientation = 'des'
        }
        else {
          property = 'price'
          orientation = 'asc'
        }
      }

      return `${property} ${orientation}`
    })
  }

  return (
    // page main
    <main id='apparel-main'>
      {/* main head */}
      <header id='apparel-main-header'>
        <h2>Apparel</h2>
      </header>

      {/* sort section */}
      <section id='apparel-sort-section'>
        <h2 id='apparel-items-sort-h2'>Sort</h2>

        {/* title sort button */}
        <input id='apparel-title-sort-button' className='apparel-items-sort-button' type='button' value='Title' onClick={ handleSortOnClick }></input>

        {/* price sort button */}
        <input id='apparel-price-sort-button' className='apparel-items-sort-button' type='button' value='Price' onClick={ handleSortOnClick }></input>
      </section>

      {/* apparel-items list */}
      <ul id='apparel-items-list'>
        {/* generate list items */}
        { apparelItems.map((item) => generateApparelItem(item)) }
      </ul>
    </main>
  )
}

export default ApparelShopComponent