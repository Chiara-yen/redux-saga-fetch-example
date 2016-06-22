import { call, put, take, fork, cancel, race } from 'redux-saga/effects'
import { takeLatest } from 'redux-saga'
import fetch from 'isomorphic-fetch'

// this will fetch failed
// const URL = 'http://data.ntpc.gov.tw/api/v1/rest/datastore/382000000A-000357-001'

// this will fetch successed
const URL = 'https://api.github.com/users/mralexgray/repos'

export function getData() {
  return fetch(URL).then(response => response.json())
}

export function* fetchData() {
  try {
    const data = yield call(getData);
    yield put({type: 'FETCH_SUCCEEDED', data});
  } catch (error) {
    yield put({type: 'FETCH_FAILED', error: error.toString()});
  }
}

function* fetchDataSaga() {
  yield takeLatest('FETCH_ASYNC', fetchData)
}


export default function* root() {
  yield fetchDataSaga()
}