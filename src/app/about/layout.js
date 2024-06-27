import Link from "next/link";

export default function Layout({ children }) {
    return (
        <div>

            <h1>About</h1>
            <Link href="student">student</Link>
            <Link href="teacher">teacher</Link>

           <h2>
            
            {children}
            </h2> 
        </div>
    )
};
