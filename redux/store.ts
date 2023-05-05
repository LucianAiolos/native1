/* eslint-disable */

import { configureStore } from '@reduxjs/toolkit'
import { Store } from 'redux'
import { reducer } from './reducer'
// import createWebStorage from 'redux-persist/es/storage/createWebStorage'

// import createReducer from './reducers'

// export const store: Store<UserState, UserAction> & {
//   dispatch: DispatchType
// } = createStore(reducer)

// export const store: Store<UserState, UserAction> & {
//   dispatch: DispatchType
// } = configureStore(reducer)

// export const store: Store<UserState, UserAction>  = configureStore({
//   reducer: {
//     reducer: reducer,
//   }
// })

export const store = configureStore({
  reducer: reducer,
})

export type AppDispatch = typeof store.dispatch



// export type RootState = ReturnType<typeof store.getState>
// export type AppDispatch = typeof store.dispatch