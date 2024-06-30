import { NextResponse } from "next/server";

export async function PUT(req,res){
    // const payload =await req.json();
    // await mongoose.connect(url);
    // let product = new Product(payload);
    // const res  = await product.save();
    console.log(res);

    return NextResponse.json({result:res,success:true});
}