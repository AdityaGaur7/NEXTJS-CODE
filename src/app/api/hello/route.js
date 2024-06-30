import {Product} from "@/app/lib/model/product";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

const url = "mongodb://localhost:27017/databasedb";
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