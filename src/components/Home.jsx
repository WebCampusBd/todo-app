import React, { useState } from 'react'

import Todos from './Todos'
import NewTodo from './NewTodo';


const dummyTodos = [];

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
