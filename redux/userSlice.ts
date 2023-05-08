import * as actionTypes from './actionTypes'
// import uuid from 'react-native-uuid'
import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'

// const user = JSON.parse(localStorage.set)  ADD USER TO LOCAL STORAGE

const initialState = {
  user: {
    name: '',
    email: '',
    password: ''
  }
}

// export const createUser = createAsyncThunk(
//   'create_user',
//   async(data, thunkAPI)=> {
//     try{
//       console.log(data, 'inside create user thunk')

//     } catch (err) {
//       console.log(err)
//     }
//   }
// )

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    reset: (state) => {
      console.log('reseting state')
    }, 
    createUser: (state, action: PayloadAction<IUser>) => {
      console.log(action.payload, 'in slice')
      state.user = action.payload
    },
  },
  // extraReducers: (builder) => {
  //   builder
  //     // .addCase(createUser.pending, (state) => {
  //     //   state.status = 'loading'
  //     // })
  //     .addCase(createUser.fulfilled, (state, action: PayloadAction<IUser> ) => {
  //       state.user = action.payload
  //     })
  // },
})



export const { reset } = userSlice.actions
export default userSlice.reducer