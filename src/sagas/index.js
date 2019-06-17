import { all, call, put, takeLatest } from 'redux-saga/effects';
import { request } from '../utils/request';
import { LOAD_TODO_LIST, RENDER_TODO_LIST } from '../actions';

export function* fetchToDoList() {
  try {
    const response = yield call(request, {
      url:
        'https://gist.githubusercontent.com/brunokrebs/f1cacbacd53be83940e1e85860b6c65b/raw/to-do-items.json',
      method: 'get'
    });
    yield put({ type: RENDER_TODO_LIST, toDoList: response });
  } catch (e) {
    console.error(new Error(e));
  }
}

export function* loadToDoList() {
  yield takeLatest(LOAD_TODO_LIST, fetchToDoList);
}

export default function* rootSaga() {
  yield all([loadToDoList()]);
}
