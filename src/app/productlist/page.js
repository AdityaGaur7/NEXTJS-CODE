"use client"
import{ useEffect, useState } from "react";

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
            <h2>Fetch data from API</h2>
            <h3>
                Product list
            </h3>
            {
                product.map((item,index)=>(
                    <div key={index}>
                        <p>Name:{item.title}</p>
                        <p>Price:{item.price}</p>
                        <p>Description{item.description}</p>
                    </div>
                ))
            }
        </div>
    );
}