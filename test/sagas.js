import test from 'tape';

import { put, call, take, fork, cancel } from 'redux-saga/effects'
import { fetchData, getData } from '../app/sagas'

test('fetchData success flow Saga test', (t) => {
  const generator = fetchData()
  const mockData = [{id:'test', name:'chiara', url:'http://chiara-yen.github.io/redux-saga-fetch-example/'}]

  t.deepEqual(
    generator.next().value,
    call(getData),
    'fetchData Saga must call getData'
  )

  t.deepEqual(
    generator.next(mockData).value,
    put({type: 'FETCH_SUCCEEDED', data: mockData}),
    'fetchData Saga must put FETCH_SUCCEEDED action'
  )

  t.deepEqual(
    generator.next(),
    { done: true, value: undefined },
    'fetchData Saga must be done'
  )

  t.end()
});

test('fetchData failure flow Saga test', (t) => {
  const generator = fetchData()
  const mockError = new Error('mock')

  t.deepEqual(
    generator.next().value,
    call(getData),
    'fetchData Saga must call getData'
  )

  t.deepEqual(
    generator.throw(mockError).value,
    put({type: 'FETCH_FAILED', error: mockError.toString()}),
    'fetchData Saga must put FETCH_FAILED action'
  )

  t.deepEqual(
    generator.next(),
    { done: true, value: undefined },
    'fetchData Saga must be done'
  )

  t.end()
});
