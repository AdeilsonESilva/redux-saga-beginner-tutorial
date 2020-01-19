/*eslint-disable no-unused-vars */
import React, { PropTypes } from 'react'

const Counter = ({ value, onDecrementAsync, onIncrementAsync }) =>
      <div>
        <button onClick={onIncrementAsync}>
          Increment
        </button>
        {' '}
        <button onClick={onDecrementAsync}>
          Decrement
        </button>
        <hr />
        <div>
          Clicked: {value} times
        </div>
      </div>

Counter.propTypes = {
  value: PropTypes.number.isRequired,
  onIncrementAsync: PropTypes.func.isRequired,
  onDecrementAsync: PropTypes.func.isRequired
}

export default Counter
