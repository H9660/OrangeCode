import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../slices/auth/authSlice'
import goalReducer from '../slices/goals/goalSlice'
import problemReducer from '../slices/problem/problemSlice'
// This store stores the states of all the components and hence it is not dependent anywhere on the UI
export const store = configureStore({
  // This is handling the events
  reducer: {
    auth: authReducer,  // So we are referring to the authSlice.reducer here   // This has a function will we reset the states like isloading is error etc
    goals: goalReducer,
    problems: problemReducer
  }, 
})
