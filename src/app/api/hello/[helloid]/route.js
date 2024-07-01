import { Product } from "@/app/lib/model/product";
import { NextResponse } from "next/server";
import mongoose from "mongoose";
const url = process.env.MONGO;
export async function PUT(req,res){
  
    
    const index = res.params.helloid;
    const filter ={_id:index};
    const payload = await req.json();
    console.log(payload);
    await mongoose.connect(url);
    const data = await Product.findOneAndUpdate(filter,payload);

    return NextResponse.json({result:data,success:true});
}