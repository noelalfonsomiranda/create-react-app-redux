import {createActions} from 'redux-actions'
import {ADD_TODO, GET_TODO_LIST, RESULT_TODO_LIST} from './constants'

const ReduxActions = createActions(
  {},
  ADD_TODO,
  GET_TODO_LIST,
  RESULT_TODO_LIST
)

export const {addTodo, getTodoList, resultTodoList} = {
  addTodo: ReduxActions['app/toDo/addTodo'],
  getTodoList: ReduxActions['app/toDo/getTodoList'],
  resultTodoList: ReduxActions['app/toDo/resultTodoList'],
}
