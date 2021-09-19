import {showLoading, hideLoading} from 'react-redux-loading';
import {loginUser} from '../../utils/api';
import { toast } from 'react-toastify';



export const LOGIN_USER = 'LOGIN_USER'
export const LOGOUT_USER = 'LOGOUT_USER';
export const REGISTER_USER = 'REGISTER_USER';

export const registerUser = (user) => ({
  type: REGISTER_USER,
  payload: {
    user
  },
})

export const loginUserAction = (id) => ({
  type: LOGIN_USER,
  payload: {
    id
  },
})

export const logoutUser = () => ({
  type: LOGOUT_USER,
});


export const handleLoginUser = (user) => (dispatch, getState) => {
  dispatch(showLoading());
  return(loginUser(user))
    .then(user => dispatch(loginUserAction(user)))
    .then(() => dispatch(hideLoading()))
    .then(() => toast.success('You Logged in Successfully'))
    .catch( (error) => {
      dispatch(hideLoading())
      toast.error(error.message)
    })
}
