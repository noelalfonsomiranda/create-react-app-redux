import {handleActions} from 'redux-actions'
import {ADD_TODO, GET_TODO_LIST, RESULT_TODO_LIST} from './constants'

export const initialState = {
  toDoList: [],
  toDoListLoading: false,
  toDoListSuccess: false,
  toDoListError: false,
}

const toDoReducer = handleActions(
  {
    [GET_TODO_LIST]: state => ({
      ...state,
      toDoListLoading: true,
      toDoListSuccess: false,
      toDoListError: false,
    }),

    [RESULT_TODO_LIST]: {
      next: (state, action) => ({
        ...state,
        toDoList: action.payload,
        toDoListLoading: false,
        toDoListSuccess: true,
        toDoListError: false,
      }),
      throw: (state, action) => ({
        ...state,
        toDoList: action.payload,
        toDoListLoading: false,
        toDoListSuccess: false,
        toDoListError: true,
      }),
    },

    [ADD_TODO]: {
      next: (state, action) => ({
        ...state,
        toDoList: [...state.toDoList, {title: action.payload}],
        toDoListLoading: false,
        toDoListSuccess: true,
        toDoListError: false,
      }),
      throw: (state, action) => ({
        ...state,
        toDoList: action.payload,
        toDoListLoading: false,
        toDoListSuccess: false,
        toDoListError: true,
      }),
    },
  },
  initialState
)

export default toDoReducer
