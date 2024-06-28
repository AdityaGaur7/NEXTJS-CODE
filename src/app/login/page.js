"use client"
import Image from "next/image"
import Profile from "../../../public/vercel.svg"
import { Roboto } from "next/font/google"

const roboto = Roboto({
    weight:'100',
    subsets:['latin'],
    display:'swap'
})
export default function Login() {
    console.log(Profile)
    return (
<div>


        <h1 className={roboto.className}>login</h1>
<Image
src={Profile}

/>
<Image
src="https://adgaurportfolio.vercel.app/images/programmer.webp"
width={400}
height={500}
/>
</div>
)
};
