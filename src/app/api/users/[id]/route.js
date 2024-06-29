import { NextResponse } from "next/server";
import { user } from "../../../../../util/db";


export async function GET(request,response){
    // console.log(response.params.id)
    const data = user;
    const userdata = data.filter((item)=>item.id == response.params.id);
    return NextResponse.json(userdata,{status:200});
  
//     return NextResponse.json(
//         userdata.length==0?(result:,success:"false"):(result:userdata,success:true),{status:200}
// );
}