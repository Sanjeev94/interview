
import React, { useState } from 'react'

const StateManager = () => {
  const [count, setCount] = useState(0);
    const increment = () => {
        setCount(count + 1);
    }
  return (
    <div>
        <h1>{count}</h1>
        <button onClick={increment}>Increment the count</button>
    </div>
  )
}

export default StateManager