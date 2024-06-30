"use client"
import React, { useState } from 'react'
import { adduser } from '../redux/slice';
import { useDispatch } from 'react-redux';

const Adduser = () => {
     const [name,setname]=useState("");
  const dispatch = useDispatch();
  const usedispatch = ()=>{
    dispatch(adduser(name));
  }

    
  return (
    <div>
        <h1>
        Adduser
        </h1>
        <input type='text' placeholder='Add new user' value={name} onChange={(e)=>setname(e.target.value)}/>
        <button onClick={usedispatch}>Adduser</button>
    </div>
  )
}

export default Adduser