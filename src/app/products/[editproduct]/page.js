"use client"
import { useEffect, useState } from "react"
import {useRouter} from "next/navigation";

export default function First(props) {

    const router = useRouter();
    const [name,setName]=useState("");
    const [price,setprice]=useState("");
    const [category,setcategory]=useState("");
    const [color,setcolor]=useState("");
    const [company,setcompany]=useState("");
    
   

   
    useEffect(()=>{
        console.log(props.params.editproduct);
      const  id = props.params.editproduct;
        getsingleproduct(id)
    },[])
    const getsingleproduct = async()=>{
        const  id = props.params.editproduct;
        let res =await fetch(`http://localhost:3000/api/hello/${id}`);
        res =await res.json();
        let ans = res.result;
        console.log(ans);
        if(res.success){
           setName(ans.name);
           setprice(ans.price);
           setcategory(ans.category);
           setcolor(ans.color);
           setcompany(ans.company);
        }
    }
    const Update = async()=>{
        const  id = props.params.editproduct;
        let res = await fetch(`http://localhost:3000/api/hello/${id}`,{
            method:"PUT",
            body:JSON.stringify({name,price,category,color,company})
        })
         res =await res.json();
    console.log(res);
        if(res.success){
            alert("new product updated");
            router.push("/products")
        }
    }
 
    return (
        <div>
             <h1>
                Update product
            </h1>
            
                <input type="text" value={name} placeholder="name" name="name" onChange={(e)=>setName(e.target.value)}/><br/>
                <input type="text" placeholder="color"  value={color} name="age" onChange={(e)=>setcolor(e.target.value)}/><br/>
                <input type="text" placeholder="company"  value={company} name="text"onChange={(e)=>setcompany(e.target.value)} /><br/>
                <input type="text" placeholder="price"  value={price} name="text"onChange={(e)=>setprice(e.target.value)} /><br/>
                <input type="text" placeholder="category"  value={category} name="text"onChange={(e)=>setcategory(e.target.value)} /><br/>
                <button type="submit" onClick={Update}>update</button>
          
        </div>
    )
}