import React from 'react'
import HigherOrder from './HigherOrder';

const Posts = ({data}) => {
  return (
    <div>
        
    <h2>Hello from posts</h2>
    {data.slice(0, 10).map((user) => {
        return <p>{user.title}</p>;
    })}
       
    </div>
  )
}

const PostsCom = HigherOrder("Posts", Posts, 'posts');

export default PostsCom;