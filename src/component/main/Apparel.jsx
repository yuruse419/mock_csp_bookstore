import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { createItem } from '../../redux/slice/checkoutSlice'
import { setApparelItems, setSortedBy } from '../../redux/slice/apparelSlice'
import '../../css/main/Apparel.css'

const Apparel = () => {
  const dispatch = useDispatch()

  const { apparelItems, sortedBy } = useSelector((state) => state.apparel)

  const sortApparelItems = (items) => {
    const property = sortedBy.substring(0, sortedBy.length - 4)
    const orientation = sortedBy.substring(sortedBy.length - 3)
    const orientationMultiple = orientation === 'asc' ? 1 : -1

    const sortedItems = items.toSorted((a, b) => {
      let aValue = a[property]
      let bValue = b[property]

      if(typeof a[property] === 'string') {
        aValue = aValue.toLowerCase()
        bValue = bValue.toLowerCase()
      }

      if(aValue < bValue) {
        return -1 * orientationMultiple
      }
      else if(aValue > bValue) {
        return 1 * orientationMultiple
      }
      else {
        return 0
      }
    })

    return sortedItems
  }

  // called only on the initial render
  useEffect(() => {
    const fetchApparelItems = async () => {
      const response = await fetch('https://dummyjson.com/products/category/tops')

      if(response.ok) {
        const data = await response.json()

        dispatch(setApparelItems(sortApparelItems(data.products)))
      }
    }

    fetchApparelItems()
  }, [])

  useEffect(() => {
    dispatch(setApparelItems(sortApparelItems(apparelItems)))
  }, [sortedBy])

  /* generateApparelItem helper functions */

  const handleAddToCartOnClick = (e) => {
    const idDelimiter = e.target.id.indexOf('-')
    const itemId = Number(e.target.id.substring(0, idDelimiter))

    for(let apparelItem of apparelItems) {
      if(apparelItem.id === itemId) {
        dispatch(createItem(apparelItem))

        break
      }
    }
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
    const delimiter = sortedBy.indexOf(' ')

    let property = sortedBy.substring(0, delimiter)
    let orientation = sortedBy.substring(delimiter + 1)

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

    dispatch(setSortedBy(`${property} ${orientation}`))
  }

  return (
    // page main
    <main id='apparel-main'>
      {/* main head */}
      <h2 id='apparel-main-header'>Apparel</h2>

      {/* sort section */}
      <section id='apparel-sort-section'>
        <h3 id='apparel-items-sort-h3'>Sort</h3>

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

export default Apparel