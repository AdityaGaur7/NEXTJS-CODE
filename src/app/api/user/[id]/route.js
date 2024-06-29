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

export async function PUT(req,res){
    let payload = await req.json();
    let id = res.params.id;
    payload.id = id;
    console.log(payload);
    if(!payload.id || !payload.name || !payload.age ||!payload.email){
        return NextResponse.json({result:"required data not found ",success:false},{status:400})
    }
    return NextResponse.json({result:payload,success:true},{status:200})
}