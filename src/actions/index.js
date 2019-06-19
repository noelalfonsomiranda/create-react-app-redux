import {ADD_TODO, GET_TODO_LIST, SET_TODO_LIST} from '../constants'

export function addToDo(title) {
  return {
    type: ADD_TODO,
    toDoItem: {
      _id: new Date().getTime().toString(),
      title,
    },
  }
}

export function getToDoList() {
  return {
    type: GET_TODO_LIST,
  }
}

export function setToDoList(payload) {
  return {
    type: SET_TODO_LIST,
    ...payload,
  }
}
