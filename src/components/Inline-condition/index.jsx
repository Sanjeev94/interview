import React, { useEffect } from 'react'

const InlineCondition = () => {
    let age = 26;
        let name = "Sanjeev";
    useEffect(()=> {
        let age = 26;
        let name = "Sanjeev";
        // if (age > 26) {
        //     console.log("old");
        // }
        // else if (name === "Sanjeev" && age === 26) {
        //     console.log("I am 26 years old");
        // }
        // else {
        //     console.log("Sanjeev not my name");
        //     console.log("I am less than 26")
        // }

        age > 26 ? (
            console.log("You are now old")
        ) : name === "Sanjeev" && age ===26 ? (
            <>
            {console.log("I am 26 years old")}
            {console.log("Sanjeev is my name")}
            </>
        ) : (
            <>
            {console.log("I am less than 26 years old")}
            {console.log("Sanjeev is not my name")}
            </>
        );
    }, []);
  return (
    <div>
      {
        age > 26 ? (
            <h1>You are now old</h1>
        ) : name === "Sanjeev" && age ===26 ? (
            <>
            <h1>I am 26 years old</h1>
            <h1>Sanjeev is my name</h1>
            </>
        ) : (
            <>
            <h1>I am less than 26 years old</h1>
            <h1>Sanjeev is not my name</h1>
            </>
        )
      }
    </div>
  )
}

export default InlineCondition