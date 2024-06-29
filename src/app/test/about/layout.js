"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
export default function Layout({ children }) {

    const path = usePathname();
    console.log(path);
    return (
        <div>
    
            { path!="/about/student"?
            <div>


                
                <h2>About</h2>
            <Link href="student">student</Link>
            <Link href="teacher">teacher</Link>

            </div>:null

            }
            <h2>

                {children}
            </h2>
        </div >
    )
};
