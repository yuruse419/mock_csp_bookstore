import { createSlice } from '@reduxjs/toolkit'

export const apparelSlice = createSlice({
  name: 'apparel',
  initialState: {
    apparelItems: [],
    sortedBy: 'title asc'
  },
  reducers: {
    setApparelItems: (state, action) => {
      const newApparelItems = action.payload

      state.apparelItems = newApparelItems
    },
    setSortedBy: (state, action) => {
      const newSortedBy = action.payload

      state.sortedBy = newSortedBy
    }
  }
})

// export actions
export const { setApparelItems, setSortedBy } = apparelSlice.actions

// export reducer
export default apparelSlice.reducer