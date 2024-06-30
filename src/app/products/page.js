

const getproduct = async () => {
    const data = await fetch("http://localhost:3000/api/hello");
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
                    </tr>
                </thead>
            <tbody>
                {
                    data.map((item) => (
                        <tr>
                            <td>{item.name}</td>
                            <td>{item.price}</td>
                            <td>{item.color}</td>
                            <td>{item.company}</td>
                            <td>{item.category}</td>
                           
                        </tr>
                    ))
                }
            </tbody>
                </table>
        </div>
    )
}

export default Page