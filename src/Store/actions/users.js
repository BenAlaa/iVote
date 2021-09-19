import {showLoading, hideLoading} from 'react-redux-loading';
import { toast } from 'react-toastify';
import {addNewUser} from '../../utils/api';
import {loginUserAction} from '../actions/authedUser';



export const RECEIVE_USERS = 'RECEIVE_USERS'
export const ADD_USER = 'ADD_USER'

export function receiveUsers(users) {
  return {
    type: RECEIVE_USERS,
    payload: {
      users
    },
  }
}


export function addUser(user) {
  return {
    type: ADD_USER,
    payload: {
      user
    },
  }
}

export const handleAddUser = (user) => (dispatch, getState) => {
  dispatch(showLoading());
  return(addNewUser(user))
    .then(user => dispatch(addUser(user)))
    .then(({payload: {user}}) => dispatch(loginUserAction(user.id)))
    .then(() => dispatch(hideLoading()))
    .then(() => toast.success('Your Account Created Successfully'))
    .catch( (error) => {
      dispatch(hideLoading())
      toast.error(error.message)
    })
}