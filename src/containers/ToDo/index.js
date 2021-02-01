import React, {memo, useEffect} from 'react'
import {connect} from 'react-redux'
import {compose} from 'redux'
import {createStructuredSelector} from 'reselect'

import {useInjectReducer} from 'utils/injectReducer'
import {useInjectSaga} from 'utils/injectSaga'

import ToDoItem from 'components/ToDoItem'
import {getTodoList as getTodoListAction} from './actions'
import {makeSelectToDo} from './selectors'

import AddToDo from './AddToDo'

import reducer from './reducer'
import saga from './saga'

export function ToDo({getToDoList, toDoList}) {
  useInjectReducer({key: 'toDoList', reducer})
  useInjectSaga({key: 'toDoList ', saga})

  useEffect(() => {
    getToDoList()
  }, [getToDoList])

  return (
    <div>
      <AddToDo />
      <ul>
        <ToDoItem toDoList={toDoList} />
      </ul>
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  toDoList: makeSelectToDo(),
})

const mapDispatchToProps = dispatch => {
  return {
    getToDoList: () => dispatch(getTodoListAction()),
  }
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
)

export default compose(
  withConnect,
  memo
)(ToDo)
