import React, { useState } from 'react'
import "./style.css"
import  {v4 as uuidv4 } from 'uuid';
import List from "./List.js";


const TodoList = () => {
    const [text, setText] = useState('');
    const [todolist, setTodoList] = useState('');
    // console.log("Text", text);

    const addItem = () => {
       const newTodoItem = {
            id: uuidv4(),
            item: text,
            done: false,
        };
        setTodoList([...todolist, newTodoItem]);
        setText('');
    };
    // console.log("todolist: ", todolist);

    const handleToggle = (itemId) => {
        const newTodolist = todolist.map((listItem) => {
          if (listItem.id === itemId) {
            return { ...listItem, done: !listItem.done };
          }
          return listItem;
        });
        setTodoList(newTodolist);
      };
    
      const handleDelete = (itemId) => {
        const newTodolist = todolist.filter((listItem) => listItem.id !== itemId);
        setTodoList(newTodolist);
      };

  return (
    <div className="App">
        <h1>To do List</h1>
        <div className="adder">
            <input type="text" placeholder='Add items' value={text}
            onChange={(e) => setText(e.target.value)} />
            <span onClick={addItem}>+</span>
        </div>
        {todolist.length > 0 && (
        <List todolist={todolist}
        handleToggle={handleToggle}
        handleDelete={handleDelete} />
        )}
    </div>
  )
}

export default TodoList