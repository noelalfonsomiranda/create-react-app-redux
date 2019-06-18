import {fromJS} from 'immutable'
import {ADD_TODO, RENDER_TODO_LIST} from '../actions'

const initialState = {
  toDoList: [],
}

export default function stuff(state = initialState, action) {
  switch (action.type) {
    case RENDER_TODO_LIST:
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
