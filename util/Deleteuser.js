"use client"
export default function Button(props) {

   const id = props.id;
   const deleteuser=async()=>{
        const res = await fetch(`http://localhost:3000/api/user/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        const data = await res.json();
        if (data.success) {
           alert("success delete")
        } else {
           alert("user not deleted")
        }
   }
    return (
        <div>
            <button  onClick={deleteuser}>Delete</button>
        </div>
    )
}