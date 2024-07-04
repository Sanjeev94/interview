import React, { useEffect, useState } from 'react'
import './style.css';
const MapFilter = () => {
    const [users, setUsers] = useState([]);
    const [numbers, setNumbers] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
        .then((response) => response.json())
        .then((json) => setUsers(json));
    }, []);

    const mapData = () => {

        let numberLessThan5 = numbers.filter((number) => {
            return number <= 5;
        }).map((filtered) => {
            return filtered * filtered;
        });
        setNumbers(numberLessThan5);

        // let square = numbers.map((number) => {
        //     return number * number;
        // })
        // console.log(square);
        // let filteredData = users.filter((user) => {
        //     return user.id > 5;
        // });
        // setUsers(filteredData);
        // //console.log(filteredData);
    }
  return (
    <div className='MapFilter'>
        <h1>Numbers</h1>
        {/* <div className='card'>
            {users.map((user) => (
                <div className='card-inner'>
                <p>{user.name}</p>
                <p>{user.username}</p>
            </div>
            ))}
            
        </div> */}
        <div className='card'>
            {numbers.map((number) => {
                <div className='card-inner'>{number}</div>
            })}
        </div>
        <button onClick={mapData}>See Mapped Array</button>
    </div>
  )
}

export default MapFilter;