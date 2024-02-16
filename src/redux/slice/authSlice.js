import { createSlice } from '@reduxjs/toolkit'

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    username: '',
    password: '',
    userId: '',
    serverMessage: 'Enter username and password.'
  },
  reducers: {
    setUsername: (state, action) => {
      const newUsername = action.payload
      
      state.username = newUsername
    }, 
    setPassword: (state, action) => {
      const newPassword = action.payload
      
      state.password = newPassword
    },
    register: (state, action) => {
      const { serverMessage, userId } = action.payload

      state.serverMessage = serverMessage || ''
      state.userId = userId || ''
    },
    login: (state, action) => {
      const { serverMessage, userId } = action.payload

      state.serverMessage = serverMessage || ''
      state.userId = userId || ''
    }
  }
})

// export actions
export const { setUsername, setPassword, register, login } = authSlice.actions

// export reducer
export default authSlice.reducer