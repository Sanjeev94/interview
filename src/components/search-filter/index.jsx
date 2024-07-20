import React, { useEffect, useState } from 'react'
import "./style.css";
function SearchFilter() {
    const [users, setUsers] = useState([]);
    const [searchquery, setSearch] = useState("");
    const [searched, setSearched] = useState([]);
    const getData = () => {
        fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(json => setUsers(json))
    };
    useEffect(()=> {
        getData();
    }, []);

    useEffect(()=> {
        if(searchquery){
            const searched = setTimeout(() => {
                setSearched(
                    users.filter((user) => {
                        return Object.values(user)
                        .join('')
                        .toLowerCase().includes(searchquery.toLocaleLowerCase());
                    })
                   );
            }, 1000);
            return () => clearTimeout(searched);
            
            
        }
        else {
            setUsers(users);
        }
       
    }, [searchquery])
  return (
    <div className='main'>
        <input onChange={event => setSearch(event.target.value)}
        className='search' placeholder="Search user.." />
        <div className='grid-main'>
            {searchquery.length > 0 ? (
                  searched.map((search) => {
                    return (
                        <div className='grid-child'>
                          <h2>{search.name}</h2>
                          <p>{search.username}</p>
                        </div>
                    );
                  })
            ) : users.map((user) => {
                    return (
                        <div className='grid-child'>
                          <h2>{user.name}</h2>
                          <p>{user.username}</p>
                        </div>
                    );
                })
            }
        
        </div>
    </div>
  )
}

export default SearchFilter