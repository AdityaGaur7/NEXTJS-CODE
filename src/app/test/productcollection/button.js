"use client"
export default function button(props) {
    console.log(props);
    return (
        <div>
            <button onClick={()=>alert(props.price)}>
                check price
            </button>
        </div>
    )
}