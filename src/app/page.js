"use client";

import { useState } from "react";

export default function Home() {
  let num = 1;
  const [ok,setok]=useState(0);
  const fruit = () => {
    // alert(item);
  num++;
  
    setok(num);
  };


  const Inner = ()=>{
    return <h1>inner</h1>
  }
  return (
    <div>
      <h1>events , function , state {ok}</h1>
      <button onClick={()=>fruit()}>click</button>
      <Inner/>
      {Inner()}
    </div>
  );
}
