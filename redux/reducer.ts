import * as actionTypes from './actionTypes'
import uuid from 'react-native-uuid'

const initialState: UserState = {
  user: {
    id: '',
    name: ''
  }
}

const reducer = (
  state: UserState = initialState,
  action: UserAction
) : UserState => {
  switch (action.type) {
    case actionTypes.ADD_USER:
      const newUser: IUser = {
        name: action.user.name,
        id: action.user.id,
      }
      return {
        user: state.user
      }
    case actionTypes.DEFAULT_USER:
      const defaultUser: IUser = {
        name: 'default',
        id: '123'
      }
  }
  return state
}