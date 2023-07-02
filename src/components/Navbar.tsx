import Image from "next/image";
import Link from "next/link";
import React from "react";

export const Navbar = () => {
  return (
    <nav className="bg-[#f1f1f150] sticky top-0 left-0 flex flex-row justify-between items-center px-[5%] h-[60px] rounded-b-3xl ">
      <Link href='/' className="text-white font-bold text-lg sm:text-xl md:text-2xl xl:text-3xl">
        👨‍💻 Dummy User
      </Link>
      <Link className="flex  group"  href="/">
        <p
          className="text-[#f1f1f1]   text-sm xs:text-md sm:text-xl md:text-2xl"
         
        >
          Docs
        </p>
        <Image className="opacity-0 transition-all ease-in-out duration-300 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0" alt="docs logo" width={20} height={20} src={"/docs.svg"} />
      </Link>
    </nav>
  );
};
