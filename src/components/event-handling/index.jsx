import React from 'react'

const EventHandling = () => {
    const getInput = (event) => {
        console.log(event.target.name);
    }
    const addNums = (num1, num2) => {
        console.log(num1 + num2);
    };
  return (
    <div>
        <input placeholder="Add something.." onChange={getInput}
        name="input" />
        <button onClick={() => addNums(2, 2)}>Add numbers</button>
    </div>
  )
}

export default EventHandling