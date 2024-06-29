// import { NextResponse } from "next/server";

import { NextResponse } from "next/server";

export  async  function GET(req,res) {
    console.log(res.params.student);
    return NextResponse.json(res.params.student)
}