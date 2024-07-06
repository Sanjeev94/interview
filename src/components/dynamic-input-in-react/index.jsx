import React, { useState } from 'react'

const DynamicinputinReact = () => {
    const [inputs, setInputs] = useState({});
    const getInputValues = (data) => {
        let {name, value} = data.target;
        let input = {[name] : value};
        setInputs({...inputs, ...input});
    };
    console.log(inputs);
  return (
    <div>
        <div>
            <input placeholder="Name" name="name" onChange={getInputValues} />
            <input placeholder="Age" name="age" onChange={getInputValues} />
            <input placeholder="Years of Experience" name="yoe" onChange={getInputValues} />
        </div>
        <button>Add new Group</button>
    </div>
  )
}

export default DynamicinputinReact