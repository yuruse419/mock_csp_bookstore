import { createSlice } from '@reduxjs/toolkit'

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    username: '',
    password: ''
  },
  reducers: {
    setUsername: (state, action) => {
      const newUsername = action.payload
      
      state.username = newUsername
    }, 
    setPassword: (state, action) => {
      const newPassword = action.payload
      
      state.password = newPassword
    }
  }
})

// export actions
export const { setUsername, setPassword } = authSlice.actions

// export reducer
export default authSlice.reducer