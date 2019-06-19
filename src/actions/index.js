export const ADD_TODO = 'ADD_TODO'

export const GET_TODO_LIST = 'GET_TODO_LIST'
export const SET_TODO_LIST = 'SET_TODO_LIST'

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
