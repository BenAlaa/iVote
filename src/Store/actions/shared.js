import { receiveQuestions,  } from './questions'
import { receiveUsers } from './users'
import { getInitialMode } from './ui';
import { getInitialData } from '../../utils/api';
import {showLoading, hideLoading} from 'react-redux-loading';

export const handleInitialData = () => (dispatch) => {
  dispatch(showLoading());
  dispatch(getInitialMode())
  getInitialData().then (({questions, users}) => {
    dispatch(receiveQuestions(questions))
    dispatch(receiveUsers(users))
    dispatch(hideLoading())
  })
}