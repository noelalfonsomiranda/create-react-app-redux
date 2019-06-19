import {call, all, put, takeLatest} from 'redux-saga/effects'
import {request} from '../utils/request'
import {setToDoList} from '../actions'
import {GET_TODO_LIST} from '../constants'

export function* getToDoList() {
  try {
    const response = yield call(request, {
      url:
        'https://gist.githubusercontent.com/brunokrebs/f1cacbacd53be83940e1e85860b6c65b/raw/to-do-items.json',
      method: 'get',
    })
    yield put(setToDoList({toDoList: response}))
  } catch (e) {
    console.error(new Error(e))
  }
}

export function* getToDoListSaga() {
  yield takeLatest(GET_TODO_LIST, getToDoList)
}

export function* rootSaga() {
  yield all([getToDoListSaga()])
}

// All sagas to be loaded
export default rootSaga
