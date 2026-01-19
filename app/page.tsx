import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex items-center min-h-screen justify-center  from-[rgb(20,20,20)] to-[rgb(30,30,30)] bg-linear-to-br">
      <div className="flex-col text-center text-white font-mono m-5 ">
      <h1 className="text-5xl m-3 text-white font-extrabold">Inventory <span className="text-white font-extrabold">Management</span></h1>
      <p className="text-white text-xl w-2xl">Easy to Use Management, Manage everything to make your life feels easier</p>
      <div className="flex flex-row items-center justify-center gap-15 m-6">
        
        <Link href={'/sign-in'} className=" w-40 p-4 
        rounded-2xl bg-linear-to-br from-[rgb(32,30,30)] to-[rgb(30,30,30)] border border-  text-white font-semibold shadow-lg  hover:scale-105 transition-all duration-200 ease-in-out ">Sign In</Link>
        <Link href='#'  className=" p-4 w-40 bg-[rgb(245,237,237)] border-solid border-white border-3 rounded-2xl  text-black cursor-pointer hover:scale-105 transition-all duration-200 ease-in-out ">Learn More</Link>
      </div>
      </div>

    </div>
  );
}