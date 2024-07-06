import React from 'react'

const Child = ({name, changeName}) => {
  return (
    <div>
        <h1>{name}</h1>
        <button onClick={changeName}>Change Name</button>
    </div>
  )
}

export default Child