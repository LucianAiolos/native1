import * as actionTypes from './actionTypes'
// import uuid from 'react-native-uuid'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

// const user = JSON.parse(localStorage.set)  ADD USER TO LOCAL STORAGE

const initialState: UserState = {
  user: {
    // id: '',
    name: '',
    email: '',
    password: '',
  },
  // isError: false,
  // isSuccess: false,
  // isLoading: false,
  // message: "",
}

// export const reducer = (
//   state: UserState = initialState,
//   action: UserAction
// ) : UserState => {
//   switch (action.type) {
//     case actionTypes.ADD_USER:
//       const newUser: IUser = {
//         name: action.user.name,
//         email: action.user.email,
//         password: action.user.password,
//         // id: action.user.id,
//       }
//       return {
//         user: state.user
//       }
//     case actionTypes.DEFAULT_USER:
//       const defaultUser: IUser = {
//         name: 'default name',
//         email: 'default email',
//         password: 'default password'
//         // id: '123'
//       }
//   }
//   return state
// }
export const createUser = createAsyncThunk(
    'create_user',
    async(userData: IUser) =>  {
    return userData
  }
)

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    reset: (state) => {
      console.log('reseting state')
    }
  },
  extraReducers: builder => {
    builder
      // .addCase(createUser.pending, (state) => {
      //   state.status = 'loading'
      // })
      .addCase(createUser.fulfilled, (state, action ) => {
        state.user = action.payload
      })
  }
})



export const { reset } = userSlice.actions
export default userSlice.reducer