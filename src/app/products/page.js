import Link from "next/link";

import Delete from "../lib/deleteproduct";
const getproduct = async () => {
    const data = await fetch("http://localhost:3000/api/hello",{cache:"no-cache"});
    let res = await data.json();

    console.log(res.result);
    return res.result;
}
const Page = async () => {

    
    let data = await getproduct();
    console.log(data);
    return (
        <div>
            <h1>
                Products lists
            </h1>
            <table border="1">
                <thead>
                    <tr>

                        <td>Name</td>
                        <td>Price</td>
                        <td>Color</td>
                        <td>Company</td>
                        <td>Category</td>
                        <td>Operation</td>
                    </tr>
                </thead>
            <tbody>
                {
                    data.map((item,index) => (
                        <tr><td>{index+1}</td>
                            <td>{item.name}</td>
                            <td>{item.price}</td>
                            <td>{item.color}</td>
                            <td>{item.company}</td>
                            <td>{item.category}</td>
                            <td><Link href={`/products/${item._id}`}>Update</Link></td>
                            <td><Delete id={item._id}/></td>
                           
                        </tr>
                    ))
                }
            </tbody>
                </table>
        </div>
    )
}

export default Page