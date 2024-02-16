import React, { useContext } from 'react'
import BooksContext from '../../context/BooksContext'
import { useDispatch } from 'react-redux'
import { createItem } from '../../redux/slice/checkoutSlice'
import '../../css/main/Books.css'

const Books = () => {
  const dispatch = useDispatch()

  const { bookItems, bookItemsSortedBy, setBookItemsSortedBy } = useContext(BooksContext)

  const handleAddToCartOnClick = (e) => {
    const idDelimiter = e.target.id.indexOf('-')
    const itemId = e.target.id.substring(0, idDelimiter)

    for(let bookItem of bookItems) {
      if(bookItem._id === itemId) {
        dispatch(createItem(bookItem))

        break
      }
    }
  }

  const generateBookItem = (item) => {
    /*
      {
        id
        title,
        description,
        author,
        publishDate,
        thumbnail,
        price
      }
    */

    return (
      <li key={ item._id } id={ item._id } className='book-item'>
        <figure className='book-item-figure'>
          <img src={ item.thumbnail }></img>

          <figcaption className='book-item-figcaption'>{ item.title }</figcaption>
        </figure>

        <section className='book-item-details-section'>
          <h2 hidden>{ item.title } Details</h2>

          <p className='book-item-description'>{ item.description }</p>

          <p className='book-item-price'>${ item.price }</p>
        </section>

        <section>
          <input id={ `${item._id}-book-item-add-to-cart-button` } className='book-item-add-to-cart-button' type='button' value='Add to Cart' onClick={ handleAddToCartOnClick }></input>
        </section>
      </li>
    )
  }

  const handleSortOnClick = (e) => {
    const delimiter = bookItemsSortedBy.indexOf(' ')

    let property = bookItemsSortedBy.substring(0, delimiter)
    let orientation = bookItemsSortedBy.substring(delimiter + 1)

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

    setBookItemsSortedBy(`${property} ${orientation}`)
  }

  return (
    <main id='book-main'>
      <h2 id='book-main-header'>Books</h2>

      {/* sort section */}
      <section id='book-sort-section'>
        <h3 id='book-items-sort-h3'>Sort</h3>

        {/* title sort button */}
        <input id='book-title-sort-button' className='book-items-sort-button' type='button' value='Title' onClick={ handleSortOnClick }></input>

        {/* price sort button */}
        <input id='book-price-sort-button' className='book-items-sort-button' type='button' value='Price' onClick={ handleSortOnClick }></input>
      </section>

      {/* book-items list */}
      <ul id='book-items-list'>
        {/* generate list items */}
        { bookItems.map((item) => generateBookItem(item)) }
      </ul>
    </main>
  )
}

export default Books