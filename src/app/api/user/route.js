import { NextResponse } from "next/server";
import { user } from "../../../../util/db";

export async function GET(request){
    const data = user;
    return NextResponse.json(data,{status:200});
}

export async function POST(req,res){
    
    let payload = await req.json();
    console.log(payload);
    if(!payload.name || !payload.age || !payload.email){
    return NextResponse.json({result:"require data not found",sucess:false},{status:404});
    }
    return NextResponse.json({name:"hello",success:true},{status:201});
}