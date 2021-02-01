import {createSelector} from 'reselect'
import {initialState} from './reducer'

const selectToDoDomain = state => state.toDoList || initialState

const makeSelectToDo = () =>
  createSelector(
    selectToDoDomain,
    subState => subState.toDoList
  )

export {makeSelectToDo}
