import {Product} from "@/app/lib/model/product";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

const url = process.env.MONGO;
export async function GET(){
      
    
      let data = []
      try{
         await mongoose.connect(url)
     data = await Product.find();
    console.log(data);

   }catch(e){
         console.log(e);
   }
   
    return NextResponse.json({result:data});
}
export async function POST(req){
      const payload =await req.json();
      await mongoose.connect(url);
      let product = new Product(payload);
      const res  = await product.save();

      return NextResponse.json({result:res,sucess:true});

}