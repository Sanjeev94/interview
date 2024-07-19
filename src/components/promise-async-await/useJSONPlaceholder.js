import { useEffect, useState } from "react";
// custom hook
function useData() {
    const [users, setUsers] = useState([]);
    const [posts, setPosts] = useState([]);
    const getUsers =  () => {
        fetch(`https:jsonplaceholder.typicode.com/users`)
        .then((response) => response.json())
        .then((json) => setUsers(json));
};
const getPosts =  () => {
    fetch(`https:jsonplaceholder.typicode.com/users`)
    .then((response) => response.json())
    .then((json) => setPosts(json));
};
useEffect(() => {
    getUsers();
    getPosts();
}, [])
return {users, posts};
}