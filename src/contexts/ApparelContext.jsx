import React, { createContext, useState, useEffect } from 'react'

const ApparelContext = createContext()

export const ApparelProvider = ({ children }) => {
  const [apparelItems, setApparelItems] = useState([])
  const [sortedBy, setSortedBy] = useState('title asc')

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
      /*
        format:
          {
            products: [
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
            ]
          }
      */
      const response = await fetch('https://dummyjson.com/products/category/tops')

      if(response.ok) {
        const data = await response.json()

        setApparelItems(sortApparelItems(data.products))
      }
    }

    fetchApparelItems()
  }, [])

  useEffect(() => {
    setApparelItems(sortApparelItems(apparelItems))
  }, [sortedBy])

  return (
    <ApparelContext.Provider value={ { apparelItems, setApparelItems, sortedBy, setSortedBy } }>{ children }</ApparelContext.Provider>
  )
}

export default ApparelContext