import React from 'react'
import Todo from './Todo'

export default function Todos(props) {
  return (
    <div id="todos">
      {props.todos.map((todo, index)=>{
        return <Todo key={index} todoTitle={todo.title} todoDesc={todo.description}/>;
      })}
    </div>
  )
}
