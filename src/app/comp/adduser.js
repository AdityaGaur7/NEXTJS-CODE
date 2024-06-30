"use client"
import React, { useState } from 'react'
import { adduser } from '../redux/slice';
import { useDispatch } from 'react-redux';
import Link from 'next/link';
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
        <Link href="/ok">display</Link>
    </div>
  )
}

export default Adduser