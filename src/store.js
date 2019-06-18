import {createStore, compose, applyMiddleware} from 'redux'
import createSagaMiddleware from 'redux-saga'
import promise from 'redux-promise-middleware'
import logger from 'redux-logger'
import rootReducer from './reducers'
import rootSaga from './sagas'

const sagaMiddleware = createSagaMiddleware()

let middlewares = applyMiddleware(promise, sagaMiddleware, logger)

const store = createStore(rootReducer, compose(middlewares))

sagaMiddleware.run(rootSaga)

export default store
