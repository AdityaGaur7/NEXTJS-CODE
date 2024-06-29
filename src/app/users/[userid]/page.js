async function getusers(id) {
    let data = await fetch(`http://localhost:3000/api/user/${id}`);
    data = await data.json();
    return data[0];
}


export default async function First(props) {
    let id = props.params.userid;
    console.log(id);
    const userdetail =await getusers(id);
    console.log(userdetail);


    return(
        <div>
           <p>
           {userdetail.name}
            </p> 
            <p>  {userdetail.age} </p>
            <p>{userdetail.email}</p> 
        </div>
    )
}