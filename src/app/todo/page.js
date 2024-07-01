"use client"
import React, { useState } from 'react'
import { addtodos } from '../redux/todoslice';
import { useDispatch, useSelector } from 'react-redux';

const Addtodo = () => {
     const [todo,settodo]=useState("");
     const tododata = useSelector((data)=>data.todosdata.todos);
     console.log(tododata);
  const dispatch = useDispatch();
  const usedispatch = ()=>{
    dispatch(addtodos(todo));
  }

 

    
  return (
    <div>
        <h1>
        Add Todos
        </h1>
        <input type='text' placeholder='Add new user' value={todo} onChange={(e)=>settodo(e.target.value)}/>
        <button onClick={usedispatch}>Add task</button>
       <div>
        {
            tododata.length && tododata.map((item)=>(
                <div>
                    <h1 key={item.id}>{item.name}</h1>
                </div>
            ))
        }
       </div>
    </div>
  )
}

export default Addtodo