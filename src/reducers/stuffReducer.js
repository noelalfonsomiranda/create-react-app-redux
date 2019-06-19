import {fromJS} from 'immutable'
import {ADD_TODO, SET_TODO_LIST} from '../constants'

const initialState = {
  toDoList: [],
}

export default function stuff(state = initialState, action) {
  switch (action.type) {
    case SET_TODO_LIST:
      return {
        ...state,
        toDoList: fromJS(action.toDoList),
      }
    case ADD_TODO:
      let newToDoList = [
        ...state.toDoList,
        {
          ...action.toDoItem,
        },
      ]
      return {
        ...state,
        toDoList: fromJS(newToDoList),
      }
    default:
      return state
  }
}
