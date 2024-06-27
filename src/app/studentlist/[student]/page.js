"use client"
export default function Student({params}) {
    console.log(params)
    return (
        <div>
            <h2>
            student details
        </h2>
        <h3>
            name:{params.student}
        </h3>

        </div>
    )
};
