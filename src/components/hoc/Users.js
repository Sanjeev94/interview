import React, { useEffect, useState } from 'react'
import HigherOrder from './HigherOrder';

function Users({data}) {
    
  return (
   <div>
    <h2>Hello from users</h2>
     {data.slice(0, 10).map((user) => {
        return <p>{user.name}</p>;
    })}
    
   </div>
  );
}

const UsersCom = HigherOrder("Users", Users, 'users');

export default UsersCom;