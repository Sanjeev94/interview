import React, { useEffect, useRef, useState } from 'react'
import './style.css';

function TwoFactor()  {
    const emptyArr = ['', '', '', ''];
    const refs = [useRef(), useRef(), useRef(), useRef()];
    const [inputs, setInputs] = useState(emptyArr);
    const [missing, setMissing] = useState(emptyArr);
    const CODE = '1234';

     const handleSubmit = () => {
        const missed = inputs.map((item, i) => {
            if(item === '')
             return i;
        }).filter((item)=> (item || item === 0));
        console.log('missed', missed);
        setMissing(missed);
        if(missed.length) {
            return;
        }
        const userInput = inputs.join('');
        const isMatch = userInput === CODE;
        const msg = isMatch ? 'Code is Valid' : 'Invalid';
        alert(msg);
     }

    useEffect(() => {
          refs[0].current.focus();
    }, [])

    const handleInputChange = (e, index) => {
        const val = e.target.value;
        console.log(val, index);
        if(!Number(val))
            return;

            

            const copyinputs = [...inputs];
            copyinputs[index] = val;
            setInputs(copyinputs);

            if(index < inputs.length - 1){
                refs[index + 1].current.focus();
            }
    }
    console.log('input', inputs);

    const handleKeyDown = (e, index) => {
        console.log(e.keyCode, index);
        if(e.keyCode === 8){
            const copyinputs = [...inputs];
            copyinputs[index] = '';
            setInputs(copyinputs);
            
            if(index > 0){
                refs[index - 1].current.focus();
            }
        }
    }

    const handlePaste = (e) => {
        const data = e.clipboardData.getData('text');
        console.log('paste data', data);
        if(!Number(data) || data.length !== inputs.length)
         return;

         const pastCode = data.split('');
         setInputs(pastCode);
         refs[inputs.length - 1].current.focus();
    }

  return (
    <div className='TwoFactor'>
        <h1>Two factor code input</h1>
        <div>
            {
                 emptyArr.map((item, i) => {
                    return <input 
                    value={inputs[i]}
                    key={i}
                    ref={refs[i]}
                    type="text"
                    maxLength="1"
                    onPaste={handlePaste}
                    onChange={(e)=> handleInputChange(e, i)}
                    onKeyDown={(e)=> handleKeyDown(e, i)}
                    className={missing.includes(i) ? 'error' : ''} />
                 })
            }
        </div>
        <button
        onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default TwoFactor;

