import { configureStore } from '@reduxjs/toolkit'
import authReducer from './slice/authSlice'
import apparelReducer from './slice/apparelSlice'
import checkoutReducer from './slice/checkoutSlice'

export default configureStore({ 
  reducer: {
    auth: authReducer,
    apparel: apparelReducer,
    checkout: checkoutReducer
} })