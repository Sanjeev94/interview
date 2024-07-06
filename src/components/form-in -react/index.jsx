import React, { useState } from 'react'

const ForminReact = () => {
    const [objData, setObjData] = useState({});
    const getInputs = (value, name) => {
        let data = {[name] : value};
        
        setObjData({...objData, ...data});
    };
    const submit = (event) => {
        event.preventDefault();
        console.log(objData);
    };
  return (
    <div>
        <form onSubmit={submit}>
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
        <button type="submit">Submit</button>
        <button type="reset">Reset</button>
        </form>
    </div>
  )
}

export default ForminReact