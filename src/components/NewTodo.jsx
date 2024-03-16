import React, { useState } from 'react'

export default function NewTodo(props) {
    const [newTodo, setNewTodo] = useState({
        title : "",
        description : ""
    });
    const changeValue = (e) =>{
        setNewTodo({...newTodo, [e.target.name] : e.target.value});
    };
    const submitValue = (e) =>{
        e.preventDefault();
        props.onReceive(newTodo);
        setNewTodo({title: "", description: ""});
    };
  return (
    <div id="add">
      <form onSubmit={submitValue}>
        <div>
            <label htmlFor="title">Title : </label>
            <input required type="text" name="title" value={newTodo.title} onChange={changeValue} id="title" placeholder='Add Title'/>
        </div>
        <div>
            <label htmlFor="description">Description : </label>
            <input required type="text" name="description" value={newTodo.description} onChange={changeValue} id="desc" placeholder='Add Description'/>
        </div>
        <button type="submit">Save</button>
      </form>
    </div>
  )
}
