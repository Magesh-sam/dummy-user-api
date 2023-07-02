import { database as db } from '@/firebase';
import { collection, getDocs,query ,orderBy} from "firebase/firestore";


import { NextResponse } from "next/server";

export async function GET() {
 
  try {
    const collectionRef = collection(db, "users")
    const querySnapshot = await getDocs(query(collectionRef,orderBy("id")));
    const userData = querySnapshot.docs.map((doc) => doc.data());
    return NextResponse.json(userData);
  } catch (error) {
    const err = {
      message: 'failed to fetch data, try again',
    }
    return NextResponse.json(err);
  }
}

export async function POST(request: Request) {
  const res = await request.json()
  const newUser = {
    data: res,
    id: Date.now(),
    message:'new user created successfully'
  }
  return NextResponse.json( newUser )
}

