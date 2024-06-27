import Image from "next/image";

export default function Home() {
  return (
   <h1>
    <User name="Adi"/>
    <User name="bhumi"/>
    <User name="alok"/>
    home
   </h1>
  );
}

const User=(props)=>{
  return (
    <h2>
      hello there {props.name}
    </h2>
  )
};

