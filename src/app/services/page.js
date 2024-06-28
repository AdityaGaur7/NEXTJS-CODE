import Userdata from "./getusers.js"

import Link from "next/link"


export default async function Services() {

    const getuser = Userdata();
    const users = await getuser;
    // console.log(users);
    return (
        <div>
            <h1>
User data
            </h1>
            {
                users.map((user) => {
                    return (
                        <div key={user.id}>
                            <h2>
                                {user.name}
                            </h2>
                          
                            <Link href={`/services/${user.id}`}>
                           
                                    {user.name}
                                
                            </Link>
                        </div>
                    )
                })
            }
        </div>
    )
}

export async function generateStaticParams(){
    const getuser = Userdata();
    const users = await getuser;

    return users.map(user=>({
        useridhaiye:user.id.toString()
    }))
}