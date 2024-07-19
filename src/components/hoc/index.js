import React from 'react'
import Users from "./Users.js";
import Posts from './Posts.js';


function HighrOrderComponent() {
  return (
    <div>
        <Users />
        <hr />
        <Posts />
    </div>
  )
}

export default HighrOrderComponent;