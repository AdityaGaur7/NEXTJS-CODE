"use client"
import Image from "next/image"
import { Roboto } from "next/font/google"
import { useSelector } from "react-redux";

const roboto = Roboto({
    weight: '100',
    subsets: ['latin'],
    display: 'swap'
})
export default function Login() {
    
    return (
        <div>


            <h1 className={roboto.className}>login</h1>
        
            <Image
                src="https://adgaurportfolio.vercel.app/images/programmer.webp"
                width={400}
                height={500}
                alt="ok"
            />
            <div>
            {/* {
                    userdata.map((item, index) => (
                        <div style={{display:'flex'}}>

                            <h2>{item.name}</h2>
                            
                            <button onClick={()=> dispatch(removeuser(item.id))}>delete</button>

                        </div>
                    ))
                } */}
            </div>
        </div>
    )
};


