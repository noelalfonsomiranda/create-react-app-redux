import {all, call, put, takeLatest} from 'redux-saga/effects'
import {request} from '../utils/request'
import {GET_TODO_LIST, SET_TODO_LIST} from '../actions'

export function* getToDoList() {
  try {
    const response = yield call(request, {
      url:
        'https://gist.githubusercontent.com/brunokrebs/f1cacbacd53be83940e1e85860b6c65b/raw/to-do-items.json',
      method: 'get',
    })
    yield put({type: SET_TODO_LIST, toDoList: response})
  } catch (e) {
    console.error(new Error(e))
  }
}

export function* getToDoListSaga() {
  yield takeLatest(GET_TODO_LIST, getToDoList)
}

export default function* rootSaga() {
  yield all([getToDoListSaga()])
}
