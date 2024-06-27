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
      <Link href="login">login</Link>
      <br />   <Link href="logout">logout</Link>
      <br />   <Link href="about">about</Link>
 <br />
      <button onClick={()=>navigate("/login")}>
        go to login
      </button>
      <button onClick={()=>navigate("/logout")}>
        go to logout
      </button>
      <br />
    </div>
  );
}
