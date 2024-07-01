"use client";

import { use, useState } from "react";
import Link from "next/link";
import {useRouter} from 'next/navigation'
export default function Home() {

  const router = useRouter();
  const navigate=(params)=>{
    router.push(params)
  }
  return (
    <div>
      <h1>
        Basic routing
      </h1>
      <Link href="/addproduct">Addproduct</Link><br/>
      <Link href="/products">Listproduct</Link><br/>
      <Link href="/addusers">Listusers</Link><br/>
      <Link href="/apiusers">apiusers</Link><br/>
      <Link href="/comp">comp</Link><br/>
      <Link href="/image">images</Link><br/>
      <Link href="/ok">ok</Link><br/>
      <Link href="/products">products</Link><br/>
      <Link href="/todo">todo</Link><br/>
      <Link href="/users">users</Link><br/>


      <br />   <Link href="/tool/logout">logout</Link>
      <br />   <Link href="/tool/about">about</Link>
      <br />   <Link href="/tool/location">location</Link>
      <br />   <Link href="/tool/productcollection">productcollection</Link>
      <br />   <Link href="/tool/services">services</Link>
      <br />   <Link href="/tool/study">study</Link>
      <br />   <Link href="/tool/user">user</Link>
 <br />
      {/* <button onClick={()=>navigate("/login")}>
        go to login
      </button>
      <button onClick={()=>navigate("/logout")}>
        go to logout
      </button> */}
      <br />
    </div>
  );
}
