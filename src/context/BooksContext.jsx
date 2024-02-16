import React, { createContext, useState, useEffect } from 'react'
import FetchUrl from '../FetchUrl'

const BooksContext = createContext()

export const BooksProvider = ({ children }) => {
  const [bookItems, setBookItems] = useState([])
  const [bookItemsSortedBy, setBookItemsSortedBy] = useState('title asc')

  const sortBookItems = (items) => {
    const property = bookItemsSortedBy.substring(0, bookItemsSortedBy.length - 4)
    const orientation = bookItemsSortedBy.substring(bookItemsSortedBy.length - 3)
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

  useEffect(() => {
    const handlefetchBookItems = async () => {
      const response = await fetch(`${FetchUrl}/book`)

      if(response.ok) {
        const data = await response.json()

        setBookItems(sortBookItems(data))
      }
    }

    handlefetchBookItems()
  }, [])

  useEffect(() => {
    setBookItems(sortBookItems(bookItems))
  }, [bookItemsSortedBy])

  return (
    <BooksContext.Provider value={ { bookItems, setBookItems, bookItemsSortedBy, setBookItemsSortedBy, sortBookItems } }>{ children }</BooksContext.Provider>
  )
}

export default BooksContext