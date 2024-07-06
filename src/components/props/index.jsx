import React, { useState } from 'react'
import Child from './child.jsx'

const PropsinReact = () => {
    const [name, setName] = useState("Sanjeev");
    const changeName = (value) => {
        console.log(value);
        setName(value);
    }
  return (
    <div>
        <Child name={name} changeName={changeName} />
        {/* <button onClick={()=> setName("Dubey")}>Change Name</button> */}
    </div>
  )
}

export default PropsinReact