"use client"
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchapiusers } from '../redux/slice'
const Api = () => {
  const dispatch = useDispatch();
  const apiuserdata = useSelector((data)=>data.usersdata.usersapidata)
  console.log(apiuserdata);
  useEffect(()=>{
    dispatch(fetchapiusers());
  },[])
  return (
    <div>
        <h2>
        Api call in redux
        </h2>
        
        <div>
          {
           apiuserdata.length && apiuserdata.map((item)=>(
              <h5>{item.name}</h5>
            ))
          }
        </div>
    </div>
  )
}

export default Api