import Link from "next/link";

export default function Home() {

  function generateRandomNumber(min:number, max:number) {
    // Generate a random number between min (inclusive) and max (inclusive)
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  
  // Generate a random number between 1 and 10
  const r1 = generateRandomNumber(1,20)
  const r2 = generateRandomNumber(21,40)
  const r3 = generateRandomNumber(41,60)
  const r4 = generateRandomNumber(61,80)
  const r5 = generateRandomNumber(81, 100)
  
  console.log(r1,r2,r3,r4,r5)
  

  return (
    <main className="h-screen flex flex-col pt-[10%] items-center gap-5">
      <section className="w-[70%]  flex flex-col gap-5 ">
        <div
          className="flex  items-center
           font-bold text-sm xs:text-lg sm:text-xl md:text-2xl lg:3xl xl:4xl  "
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
      <section>
        <Card id={r1} />
      </section>
    </main>
  );
}
