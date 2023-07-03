import { Card } from "@/components/Card";
import Link from "next/link";

export default function Home() {



  return (
    <main className="min-h-screen mb-5 flex flex-col pt-[10%] items-center gap-5">
      <section className="w-[70%]  flex flex-col gap-5 ">
        <div
          className="flex  items-center
           font-bold text-lg xs:text-2xl sm:text-4xl md:text-5xl lg:6xl xl:10xl  "
        >
          <h1 className="w-max bg-clip-text  text-transparent bg-gradient-to-r from-purple-600  to-pink-500">
            Generate Random users
          </h1>
          <span> 👨‍🚀</span>
        </div>
        <p className="text-[#A1A1A1]  text-sm sm:text-lg  md:text-xl lg:text-2xl lg:w-[75%] ">
          Our API can quickly produce a variety of profiles for your
          application, giving it a boost with actual user data and providing a
          lively and interesting user experience while saving you time.
        </p>
        <p className="text-[#A1A1A1]  text-sm sm:text-lg  md:text-xl lg:text-2xl  ">Designed in <span className="w-max font-bold bg-clip-text  text-transparent bg-gradient-to-r  from-pink-500 to-purple-600 ">Figma</span> Build with <span className="w-max font-bold bg-clip-text  text-transparent bg-gradient-to-r  from-pink-500 to-purple-600 ">NEXT.JS</span> </p>
      <Link className=" text-sm sm:text-lg  md:text-xl lg:text-2xl" href='https://github.com/magesh-sam'> <span className="w-max font-bold bg-clip-text  text-transparent bg-gradient-to-r  from-pink-500 to-purple-600 ">Source:</span> https://github.com/magesh-sam</Link>
      </section>
      <section className="w-full h-full grid grid-cols-[repeat(1,280px)] md:grid-cols-[repeat(2,280px)] lg:grid-cols-[repeat(3,280px)] xl:grid-cols-[repeat(4,280px)] 2xl:grid-cols-[repeat(5,280px)] justify-center gap-3 mt-10 " >
        {[1,2,3,4,5].map((id,index) => (
         <Card  key={index} id={id} />
       ))}
      </section>
    </main>
  );
}
