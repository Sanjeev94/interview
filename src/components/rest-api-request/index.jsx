import React, { useEffect, useState } from 'react'
import axios from "axios";

const RestapiRequest = () => {
    const [name, setName] = useState("");
    const [users, setUsers] = useState([]);
    const postData = () => {
        axios.post('https://66894d330ea28ca88b8792e1.mockapi.io/users', {
            name: name,
            age: 26,
            hobbies: ['Poetry', 'Cooking', 'Traveling', 'Coding', 'Piano'],
        })
        .then((res) => {
            console.log(res.data);
        })
        .catch((err) => {
            console.log(err);
        })
    };

    const updateData = (id) => {
       console.log(id);
       axios.put(`https://66894d330ea28ca88b8792e1.mockapi.io/users/${id}`, {
        name: name,
        age: 27,
        hobbies: ['Poetry', 'Cooking', 'Traveling', 'Coding', 'Piano', 'Sleeping',],
    })
    .then((res) => {
        console.log(res.data);
    })
    .catch((err) => {
        console.log(err);
    })};

    const deleteData = (id) => {
        console.log(id);
        axios.delete(`https://66894d330ea28ca88b8792e1.mockapi.io/users/${id}`)
     .then((res) => {
        getData();
     })
     .catch((err) => {
         console.log(err);
     })};


     const getData = () => {
        axios.get('https://66894d330ea28ca88b8792e1.mockapi.io/users')
        .then((res) => {
            setUsers(res.data);
        })
        .catch((err) => {
            console.log(err);
        });
     };
    useEffect(() => {
       getData();
    }, [])
  return (
    <div>
        
        <input placeholder="Name"
        onChange={(event) => setName(event.target.value)} />
        <button onClick={postData}>Post Data</button>
        {users.map((user) => {
            return (
                <>
                <h2>{`${user.id}. ${user.name}`}</h2>
                <button onClick={()=> updateData(user.id)}>Update</button>
                <button onClick={()=> deleteData(user.id)}>Delete</button>
                </>
            );
        })}
    </div>
  )
}

export default RestapiRequest