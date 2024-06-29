import Link from "next/link";

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
                users.map((it,index)=>(<div>
                    <h3>

                        {it.name}
                    </h3>
                    <Link href={`users/${it.id}`}>{it.name}</Link>
                </div>)


                )
            }
        </div>
    )
}