import {createAction} from 'redux-actions'
import {ADD_TODO, GET_TODO_LIST, RESULT_TODO_LIST} from './constants'

const addTodo = createAction(ADD_TODO)
const getTodoList = createAction(GET_TODO_LIST)
const resultTodoList = createAction(RESULT_TODO_LIST)

export {addTodo, getTodoList, resultTodoList}
