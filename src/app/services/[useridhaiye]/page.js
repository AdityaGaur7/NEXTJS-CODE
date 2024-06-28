import Userdata from "../getusers"

export default async function Userid(props) {
    const getuser = Userdata();
    const users = await getuser;
    // console.log(props.params.useridhaiye);
    let x = props.params.useridhaiye;

    return (
        <div>
            <h1>
User data
            </h1>
            <h2>{users[x-1].name}</h2>
           <p>
                <strong>Username:</strong> {users[x-1].username}
            </p>
            <p>
                <strong>Email:</strong> {users[x-1].email}
            </p>
            <p>
                <strong>Address:</strong> {users[x-1].address.street}, {users[x-1].address.suite}, {users[x-1].address.city}, {users[x-1].address.zipcode}
            </p>
            <p>
                <strong>Phone:</strong> {users[x-1].phone}
            </p>
            <p>
                <strong>Website:</strong> {users[x-1].website}
            </p>
            <p>
                <strong>Company:</strong> {users[x-1].company.name}
            </p>



       
           
        </div >
    )
}