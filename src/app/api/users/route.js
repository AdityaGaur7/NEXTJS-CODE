import { NextResponse } from "next/server";

export async function GET(request){
    return NextResponse.json({name:"aditya",age:"21",city:"noida"},{status:200});
}