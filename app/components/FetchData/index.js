import React, { Component, PropTypes } from 'react'
import './styles.styl'

const FetchData = ({ data, error, onFetchAsync }) =>
      <div className='block'>
        <button className='Btn' onClick={onFetchAsync}>
          Fetch Data Async
        </button>
        <div className='msgBlock'>
          Data: {data ? data.map(renderItem) : 'no data'}
        </div>
        <div className='alertBlock'>
          {error ? `Exception: ${error}` : ''}
        </div>
      </div>

const renderItem = (el) =>
      <div key={el.id}>
        {el.name} :
        <br/>
        {el.url}
      </div>

FetchData.propTypes = {
  data: PropTypes.array,
  error: PropTypes.string,
  onFetchAsync: PropTypes.func.isRequired,
}

export default FetchData
