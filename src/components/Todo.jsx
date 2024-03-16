import React from 'react'
import { MdAutoDelete    } from "react-icons/md";

export default function Todo(props) {
    const {todoTitle, todoDesc} = props;
    const deleteTodo = (e) =>{
        e.target.parentElement.parentElement.style.display = "none";
        const popup = document.getElementById("popup");
        popup.style.display = "block";
        setTimeout(()=>{
            popup.style.display = "none";
        }, 1000);
    }
  return (
    <div id="todo">
        <div>
            <h3>{todoTitle}</h3>
            <p>{todoDesc}</p>
        </div>
        <MdAutoDelete   onClick={deleteTodo} id="delete" />
    </div>
  )
}
