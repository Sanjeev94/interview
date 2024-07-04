import React, { useEffect, useState } from 'react'
import './style.css';
const MapFilter = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
        .then((response) => response.json())
        .then((json) => setUsers(json));
    }, []);

    const mapData = () => {
        let mappedArray = users.map((user) => user.id*2);
        console.log(mappedArray);
    }
  return (
    <div className='MapFilter'>
        <h1>Users</h1>
        <div className='card'>
            {users.map((user) => (
                <div className='card-inner'>
                <p>{user.name}</p>
                <p>{user.username}</p>
            </div>
            ))}
            
        </div>
        <button onClick={mapData}>See Mapped Array</button>
    </div>
  )
}

export default MapFilter;