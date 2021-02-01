/**
 *
 * PlainCard
 *
 */

import React from 'react'
import PropTypes from 'prop-types'
import {toJS} from '../utils/immutable'

function ToDoItem({toDoList}) {
  return toDoList.length
    ? toDoList.map((toDo, index) => <li key={index}>{toDo.title}</li>)
    : ''
}

ToDoItem.propTypes = {
  toDoList: PropTypes.array.isRequired,
}

export default toJS(ToDoItem)
