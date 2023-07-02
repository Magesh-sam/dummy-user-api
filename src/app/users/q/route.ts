import { database as db } from "@/firebase";
import { collection, getDocs, query, orderBy, where } from "firebase/firestore";

import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
    const name = searchParams.get("name");

  console.log(name);
    if (name) {
        
        const collectionRef = collection(db, "users");
        const querySnapshot = await getDocs(
            query(collectionRef, where("first_name", "==", name))
        );
        const userData = querySnapshot.docs.map((doc) => doc.data());
        if (userData.length <= 0) {
            const err = {
                message:`${name} is not on the list`
            }
            return NextResponse.json(err);
        }
        return NextResponse.json(userData);
    }
  
    return NextResponse.json({
        message:'only use the filters given in the Docs'
    });
    
}
