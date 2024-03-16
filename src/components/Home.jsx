import React, { useState } from 'react'

import Todos from './Todos'
import NewTodo from './NewTodo';


const dummyTodos = [
    {
        title : "routine",
        description : "this is my routine"
    },
    {
        title : "tiffin",
        description : "this is my tiffin time"
    }
]

export default function Home() {
    const [todos, setTodos] = useState(dummyTodos);
    const receiveTodo = (newTodo) =>{
        setTodos([...todos, newTodo]);
    }
    return (
        <div id="main">
            <div id="popup">
                <p>Deleted successfully !</p>
            </div>
            <h1>Todo App</h1>
            <NewTodo onReceive={receiveTodo}/>
            <Todos todos={todos}/>
        </div>
    );
};
