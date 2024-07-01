"use client"
import React, { useState } from 'react'

const Image = () => {


    const [file,setfile]=useState();
    const onSubmit=async(e)=>{
e.preventDefault();
console.log(file);

const data = new FormData();
data.set('file',file);
let result = await fetch("api/upload",{
    method:"POST",
    body:data
})
result = await result.json();
console.log(result);
if(result.success)alert("file uploaded");
    }
  return (
    <div>
        <h3>Image upload</h3>
        <form onSubmit={onSubmit}>
         <input type="file" name="file" onChange={(e)=>setfile(e.target.files?.[0])}/>
         <button type='submit'>upload</button>
        </form>

    </div>
  )
}

export default Image