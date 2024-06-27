"use client"

import Link from "next/link"
export default function Studentlist(){
   
  return (
    <div>

    <div>student list </div>
    <br/>
    <ul>
        <li>
            <Link href="studentlist/1">anil</Link>
        </li>
        <li>
            <Link href="studentlist/2">aman</Link>
        </li>
        <li>
            <Link href="studentlist/3">ajay</Link>
        </li>
        <li>
            <Link href="studentlist/4">deelip</Link>
        </li>
    </ul>

    </div>
  )
}
