import React, { useState } from 'react'

const ForminReact = () => {
    const [objData, setObjData] = useState({});
    const getInputs = (value, name) => {
        let data = {[name] : value};
        
        setObjData({...objData, ...data});
    };
    const submit = () => {
        console.log(objData);
    };
  return (
    <div>
        <input placeholder="write your name.." 
        name="name"
        type="text"
        onChange={(event) => getInputs(event.target.value, event.target.name)} />
        <input placeholder="write your age.."
        name="age"
        type="number"
         onChange={(event) => getInputs(event.target.value, event.target.name)} />
        <input placeholder="write your hobbies.."
        name="hobbies"
        type="text"
         onChange={(event) => getInputs(event.target.value, event.target.name)} />
        <input placeholder="write a date.."
        name="date"
        type="date"
         onChange={(event) => getInputs(event.target.value, event.target.name)} />
        <button onClick={submit}>Submit</button>
    </div>
  )
}

export default ForminReact