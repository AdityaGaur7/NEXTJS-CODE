"use client"

import { useDispatch, useSelector } from 'react-redux'
import { removeuser } from '../redux/slice';
export default function Display() {

    const userdata = useSelector((data) => data.reducer.users);
    const dispatch = useDispatch();
    console.log(userdata);
  
    return (
        <div>
            <hr />
            <h1>Display user</h1>
            <div>
                {
                    userdata.map((item, index) => (
                        <div style={{display:'flex'}}>

                            <h2>{item.name}</h2>
                            
                            <button onClick={()=> dispatch(removeuser(item.id))}>delete</button>

                        </div>
                    ))
                }
            </div>

        </div>
    )
}

