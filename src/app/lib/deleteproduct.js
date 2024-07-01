"use client"
import {useRouter} from 'next/navigation'


const Delete = (props) => {
    // console.log(props.id);
    
    const router = useRouter();
    const deleterecord = async()=>{

        let data =await fetch("http://localhost:3000/api/hello/"+props.id,{
            method:'delete'
        })
        data = await data.json();
        // console.log(data.success);
        if(data.success){
            alert("delete successfull");
        //  router.push("/products");
         router.refresh();
      
         

        }

    }
  return (
    <div>
        <button onClick={deleterecord}>
            Delete
        </button>
    </div>
  )
}

export default Delete