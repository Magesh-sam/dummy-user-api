import axios from "axios"
import Image from "next/image";
import { FC } from "react";

interface ICard {
    id:number
}
type Data = {
    avatar: string;
    first_name: string;
    gender: string;
    age: number;
    location: {
        country: string;
    }
}
export const Card:FC<ICard> = async ({id}) => {
    
    const res=await axios.get(`https://dummyuser.vercel.app/users/${id}`)
 
    const data: Data = await res.data;
  return (
      <div className=" text-white  bg-gradient-to-r from-purple-600  to-pink-500 w-[280px] h-[400px] 
       rounded-lg flex flex-col items-center gap-3"  >
          <Image loading="lazy" priority src={data.avatar} alt="avatar" width={200} height={200} />
          <p>Name: {data.first_name}</p>
          <p>Gender: {data.gender}</p>
          <p>Age: { data.age}</p>
          <p>Location: { data.location.country}</p>
    </div>
  )
}
