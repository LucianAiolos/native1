import * as actionTypes from './actionTypes'
// import uuid from 'react-native-uuid'
import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'

// const user = JSON.parse(localStorage.set)  ADD USER TO LOCAL STORAGE

const initialState: IUser = {
    // id: '',
    name: '',
    email: '',
    password: '',
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    reset: (state) => {
      console.log('reseting state')
    }, 
    createUser: (state, action: PayloadAction<IUser>) => {
      console.log(action.payload, 'in slice')
      state = action.payload
    },
  },
  // extraReducers: builder => {
  //   builder
      // .addCase(createUser.pending, (state) => {
      //   state.status = 'loading'
      // })
      // .addCase(createUser.fulfilled, (state, action: PayloadAction<IUser> ) => {
      //   state.user = action.payload
      // })
  // }
})



export const { reset, createUser } = userSlice.actions
export default userSlice.reducer