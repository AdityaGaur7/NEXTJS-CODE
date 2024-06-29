"use client"
import { useState } from "react"

export default function First() {


    const [name,setName]=useState("");
    const [age,setage]=useState("");
    const [email,setemail]=useState("");

    const adduser=async(e)=>{
     
           let res = await fetch("http://localhost:3000/api/user",{
            method:"Post",
            body:JSON.stringify({name,age,email})
           })

           const data = await res.json();
           if(data.success)alert("new user created");
           else alert("some error occured ");
        // console.log(data);
        
    }
    return(
        <div>
            <h1>
                Add user
            </h1>
            
                <input type="text" value={name} placeholder="name" name="name" onChange={(e)=>setName(e.target.value)}/><br/>
                <input type="number" placeholder="age"  value={age} name="age" onChange={(e)=>setage(e.target.value)}/><br/>
                <input type="email" placeholder="email"  value={email} name="email"onChange={(e)=>setemail(e.target.value)} /><br/>
                <button type="submit" onClick={adduser}>Submit</button>
          
        </div>
    )
}