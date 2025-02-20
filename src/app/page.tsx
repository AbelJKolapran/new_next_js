import Image from "next/image";
// tailwind - help in styling
export default function Home() {
  return (
    <div>
      <h1 style={{fontWeight: "bold", fontSize: "36px" ,textAlign: "center" }}>App page</h1>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta eum id exercitationem laudantium dolorem reprehenderit magnam libero, ducimus impedit minus sit animi quod ab vitae in consectetur earum. Vel, incidunt!</p>
      <button  className="bg-red-500 text-white py-2 px-4 rounded">
        <a href ="/home">home</a></button>
    </div>
  )
    }
