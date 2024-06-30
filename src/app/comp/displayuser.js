"use client"

import { useSelector } from 'react-redux'
export default function Display(){
    const userdata = useSelector((data)=>data.reducer.users);
    console.log(userdata);
  return (
    <div>
        <hr/>
        <h1>Display user</h1>
        <div>
            {
                userdata.map((item,index)=>(
                  <div>

                      {item.name}
                    
                  </div>
                ))
            }
        </div>

    </div>
  )
}

