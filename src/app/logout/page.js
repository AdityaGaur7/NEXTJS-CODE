
// import { redirect } from "next/navigation"
export default function Logout() {
    // redirect("/")
    return (<h1>logout</h1>)
};
export function generateMetadata(){
    return {
        title:"logout page",
        description:"logout page",
        keywords:"logout",
        image:"https://adgaurportfolio.vercel.app/images/programmer.webp"
    }
}