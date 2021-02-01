import {call, all, put, takeLatest, fork} from 'redux-saga/effects'
import request from 'utils/request'
import {resultTodoList} from './actions'
import {GET_TODO_LIST} from './constants'

export function* getToDoList() {
  try {
    const req = yield call(
      request,
      `https://gist.githubusercontent.com/brunokrebs/f1cacbacd53be83940e1e85860b6c65b/raw/to-do-items.json`,
      {
        method: 'GET',
      }
    )

    yield put(resultTodoList(req))
  } catch (e) {
    console.error(new Error(e))
  }
}

export function* getToDoListSaga() {
  yield takeLatest(GET_TODO_LIST, getToDoList)
}

export function* toDoSaga() {
  yield all([fork(getToDoListSaga)])
}

// All sagas to be loaded
export default toDoSaga
