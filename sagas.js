import { put, takeEvery, all } from 'redux-saga/effects'

const delay = ms => new Promise(res => setTimeout(res, ms))

function* helloSaga() {
  console.log('Hello Sagas 3!')
}

function* incrementAsync() {
  yield delay(1000)
  yield put({ type: 'INCREMENT' })
}

function* decrementAsync() {
  yield delay(1000)
  yield put({ type: 'DECREMENT' })
}

function* watchAsync() {
  yield takeEvery('INCREMENT_ASYNC', incrementAsync)
  yield takeEvery('DECREMENT_ASYNC', decrementAsync)
}

// notice how we now only export the rootSaga
// single entry point to start all Sagas at once
export default function* rootSaga() {
  yield all([
    helloSaga(),
    watchAsync()
  ])
}