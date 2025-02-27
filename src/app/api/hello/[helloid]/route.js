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
export async function GET(req,res){
  
    
    const productid = res.params.helloid;
    const filter ={_id:productid};
    await mongoose.connect(url);
    const data = await Product.findById(filter);

    return NextResponse.json({result:data,success:true});
}
export async function DELETE(req,res){
  
    
    const productid = res.params.helloid;
    const filter ={_id:productid};
    await mongoose.connect(url);
    const data = await Product.deleteOne(filter);

    return NextResponse.json({result:data,success:true});
}