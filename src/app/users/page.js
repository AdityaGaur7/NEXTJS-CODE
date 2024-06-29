import Link from "next/link";
import Button from "../../../util/Deleteuser";

async function getusers() {
    let data = await fetch("http://localhost:3000/api/user");
    data = await data.json();
    return data;
}


export default async function First() {

    let users = await getusers();
    console.log(users);
    return (
        <div>
            <h1>Users</h1>
            {
                users.map((it,index)=>(<div style={{display:'flex',gap:'10px'}}>
                  
                  <p>  <Link href={`users/${it.id}`}>{it.name}</Link>
                  <Link href={`users/${it.id}/update`}>Edit</Link></p>
                 <Button id={it.id}/>
                </div>)


                )
            }
        </div>
    )
}