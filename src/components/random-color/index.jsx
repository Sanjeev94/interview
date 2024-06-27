import React, { useEffect, useState } from 'react'

const RandomColor = () => {
    const [typeofColor, setTypeofColor] = useState('hex');
    const [color, setColor] = useState("#000000");
    function randomColorUtility(length){
        return Math.floor(Math.random()*length);
    }
    function handleCreateHexRandomColor() {
        const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
        let hexColor = "#";
        for(let i=0; i<6; i++){
            hexColor += hex[randomColorUtility(hex.length)];
            
        }
        console.log(hexColor);
        setColor(hexColor);
    }
    function handleCreateRGBColor() {
    const r = randomColorUtility(256);
    const g = randomColorUtility(256);
    const b = randomColorUtility(256);
    setColor(`rgb(${r},${g}, ${b})`);

    }
    useEffect(() => {
        if (typeofColor === "rgb") handleCreateRGBColor();
        else handleCreateHexRandomColor();
      }, [typeofColor]);
    
  return (
    <div 
    style={{
        width: "100vw",
        height: "100vh",
        background: color,
      }}
    >
        <button onClick={()=> setTypeofColor('hex')}> Generate HEX color</button>
        <button onClick={()=> setTypeofColor('rgb')}> Generate RGB color</button>
        <button onClick={typeofColor === 'hex' ? handleCreateHexRandomColor : handleCreateRGBColor}> Generate Random color</button>
        <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "#fff",
          fontSize: "40px",
          marginTop: "30px",
          flexDirection  :'column',
          gap :'10px'
        }}
      >
        <h3>{typeofColor === "rgb" ? "RGB Color" : "HEX Color"}</h3>
        <h1>{color}</h1>
      </div>
    </div>
  );
}

export default RandomColor