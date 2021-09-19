import { toast } from 'react-toastify';
import {showLoading, hideLoading} from 'react-redux-loading';
import { saveQuestion, saveQuestionAnswer } from '../../utils/api'


export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const ADD_QUESTION = 'ADD_QUESTION'
export const ANSWER_QUESTION = 'ANSWER_QUESTION'

export const receiveQuestions = (questions) => ({
  type: RECEIVE_QUESTIONS,
  payload: {
    questions
  }
})

const addQuestion = ({ id, timestamp, author, optionOne, optionTwo }) => ({
  type: ADD_QUESTION,
  payload: {
    id,
    timestamp,
    author,
    optionOne,
    optionTwo
  }
})

export const handleAddQuestion = ({optionOne, optionTwo}) => (dispatch, getState) => {
    const { authedUser } = getState()
    const questionInfo = {
      optionOne,
      optionTwo,
      author: authedUser
    }

    dispatch(showLoading());
    return saveQuestion(questionInfo)
      .then((question) =>  dispatch(addQuestion(question)))
      .then(() => dispatch(hideLoading()))
      .catch( (error) => toast.error(error))
  }


const addAnswer = ({ authedUser, qid, answer }) => ({
  type: ANSWER_QUESTION,
  payload: {
    authedUser, 
    qid, 
    answer
  }
})

export const handleAddAnswer = (info) => (dispatch) => {
  dispatch(addAnswer(info))

  return saveQuestionAnswer(info)
    .then(() => toast.success('Answer Saved'))
    .catch( (error) => {
      toast.error('Something error happened, Try again..');
    })
}