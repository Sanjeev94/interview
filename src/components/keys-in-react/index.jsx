import React from 'react'

const KeysinReact = () => {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const details = [
        {
            // id : 1,
            name: "Sanjeev",
            age: 26,
        },
        {
            // id : 2,
            name: "Shailesh",
            age: 29,
        },
        {
            // id : 3,
            name: "Shailesh",
            age: 29,
        },
        {
            // id : 4,
            name: "Rohit",
            age: 27,
        },
        {
            // id : 5,
            name: "Mohit",
            age: 25,
        },
    ];
  return (
    <div>
        <ul>
            {numbers.map((number) => {
                return <li key={number}>{number}</li>;
            })}
        </ul>
        <ul>
            {details.map((detail, index) => {
                return (
                    <div key={index}>
                    <li >{detail.name}</li>
                    <li >{detail.age}</li>
                    </div>
                );
            })}
        </ul>
    </div>
  )
}

export default KeysinReact