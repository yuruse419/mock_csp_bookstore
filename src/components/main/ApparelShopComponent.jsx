import React, { useContext } from 'react'
import ApparelContext from '../../contexts/ApparelContext'
import '../../css/main/ApparelShopComponent.css'

const ApparelShopComponent = () => {
  const { apparelItems, setSortedBy } = useContext(ApparelContext)

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
          <p>${ item.price }</p>
        </section>
      </li>
    )
  }

  // handle sort button onClick
  const handleSortOnClick = (e) => {
    setSortedBy((oldSortedBy) => {
      let newSortedBy

      // if sort button value is 'Title'
      if(e.target.value === 'Title') {
        // set sort by to 'title '
        newSortedBy = 'title '
      }
      // else if sort button value is 'Price'
      else if(e.target.value === 'Price') {
        // set sort by to 'price '
        newSortedBy = 'price '
      }

      // if previous sort orientation was ascending
      if(oldSortedBy.substring(oldSortedBy.length - 3) === 'asc') {
        // concatenate 'des' to sort by
        newSortedBy += 'des'
      }
      // else if previous sort orientation was descending
      else {
        // concatenate asc to sort by
        newSortedBy += 'asc'
      }

      // return the new sort-by value
      return newSortedBy
    })
  }

  return (
    // page main
    <main id='apparel-main'>
      {/* main head */}
      <header id='apparel-main-heading-section'>
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