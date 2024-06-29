"use client"
export default function Lecture({params}) {
    console.log(params);
    return (
 <h3>
    hello there its day {params.lecture[0]}
    bsdk {params.lecture[1]}
 </h3>
    )
}