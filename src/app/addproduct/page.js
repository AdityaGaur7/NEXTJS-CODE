"use client"
import { useEffect, useState } from "react"


export default function First(props) {
    const [name,setName]=useState("");
    const [price,setprice]=useState("");
    const [category,setcategory]=useState("");
    const [color,setcolor]=useState("");
    const [company,setcompany]=useState("");

    const addproduct = async()=>{
        // console.log(name,price,category,color,company)
        let res = await fetch("http://localhost:3000/api/hello",{
            method:"POST",
            body:JSON.stringify({name,price,category,color,company})
        })
         res =await res.json();
    console.log(res.success);
        if(res.success)alert("new product added");
    }
 
    return (
        <div>
             <h1>
                Add product
            </h1>
            
                <input type="text" value={name} placeholder="name" name="name" onChange={(e)=>setName(e.target.value)}/><br/>
                <input type="text" placeholder="color"  value={color} name="age" onChange={(e)=>setcolor(e.target.value)}/><br/>
                <input type="text" placeholder="company"  value={company} name="text"onChange={(e)=>setcompany(e.target.value)} /><br/>
                <input type="text" placeholder="price"  value={price} name="text"onChange={(e)=>setprice(e.target.value)} /><br/>
                <input type="text" placeholder="category"  value={category} name="text"onChange={(e)=>setcategory(e.target.value)} /><br/>
                <button type="submit" onClick={addproduct}>Submit</button>
          
        </div>
    )
}