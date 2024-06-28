"use client"
import{ useEffect, useState } from "react";
import custom from "./custom.module.css"
import outside from "@/app/style/outside.module.css"
export default function Product() {
    const [product,setproduct]=useState([]);
    useEffect(() => {
        async function fetchData() {
            try{

                let response = await fetch("https://dummyjson.com/products");
                let data = await response.json();
                console.log(data.products);
                setproduct(data.products);
            }catch(err){
                console.log(err);
            }
        }
        fetchData();
    }, []);

    return (
        <div>
            <h2 className={custom.h1}>Fetch data from API in client component</h2>
            <h3 className={custom.h3}>
                Product list
            </h3>
            {
                product.map((item,index)=>(
                    <div key={index} className={outside.h2}>
                        <p>Name:{item.title}</p>
                        <p>Price:{item.price}</p>
                        <p>Description{item.description}</p>
                    </div>
                ))
            }
        </div>
    );
}