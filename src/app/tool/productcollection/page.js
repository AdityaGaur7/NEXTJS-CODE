import Button from "./button.js"

async function fetchData() {
    

        let response = await fetch("https://dummyjson.com/products");
        let data = await response.json();

       return data.products;
}

export default async function Productcollection() {
  
   let products = await fetchData();
//    console.log( products);

    return (
        <div>
            <h2>Fetch data from API in server component</h2>
            <h3>
                Product list
            </h3>
            
            {
                products.map((item) => (
                    <div>
                        <h3>
                            Name: {item.title}
                        </h3>
                      <Button price={item.price}/>
                    </div>
                ))
            }
           
        </div>
    );
}