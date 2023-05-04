/* eslint-disable */

import { configureStore } from 'redux'
// import createWebStorage from 'redux-persist/es/storage/createWebStorage'

// import createReducer from './reducers'

export const store = configureStore({
  reducer: {
    user: userReducer,
  }
})

// export type RootState = ReturnType<typeof store.getState>
// export type AppDispatch = typeof store.dispatch