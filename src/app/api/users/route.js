import { NextResponse } from "next/server";
import { user } from "../../../../util/db";

export async function GET(request){
    const data = user;
    return NextResponse.json(data,{status:200});
}