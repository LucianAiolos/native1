import * as actionTypes from './actionTypes'

export function addUser(user: IUser) {
  const action: UserAction = {
    type: actionTypes.ADD_USER,
    user,
  }
  return action
}

export function defaultUser(user: IUser) {
  const action: UserAction = {
    type: actionTypes.DEFAULT_USER,
    user,
  }
}