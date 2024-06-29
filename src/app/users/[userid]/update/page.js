"use client"
import { useEffect, useState } from "react"


export default function First(props) {
    const [name,setName]=useState("");
    const [age,setage]=useState("");
    const [email,setemail]=useState("");
    let id = props.params.userid;
    console.log(id);
    
   const updateuser=async()=>{
// console.log(name,age,email);
   let data = await fetch("http://localhost:3000/api/user/"+id, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({name,age,email}),
        })
     data =await data.json();
     console.log(data);
     if(data.success)alert("user updated");
     else alert("plese try with valid input");


  }
  useEffect(()=>{
    getuserdetail();
  },[])

  async function getuserdetail(){
    let data = await fetch("http://localhost:3000/api/user/"+id);
    data = await data.json();
   console.log(data[0]);
    // return data;
    setName(data[0].name);
    setage(data[0].age);
    setemail(data[0].email);
  }
    return (
        <div>
             <h1>
                update user
            </h1>
            
                <input type="text" value={name} placeholder="name" name="name" onChange={(e)=>setName(e.target.value)}/><br/>
                <input type="number" placeholder="age"  value={age} name="age" onChange={(e)=>setage(e.target.value)}/><br/>
                <input type="email" placeholder="email"  value={email} name="email"onChange={(e)=>setemail(e.target.value)} /><br/>
                <button type="submit" onClick={updateuser}>Submit</button>
          
        </div>
    )
}