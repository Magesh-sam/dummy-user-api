import { database as db } from '@/firebase';
import { collection, getDocs, query,where} from "firebase/firestore";

import { NextResponse } from "next/server";

export async function GET(req: Request, { params }: { params: { id: string } }) {
    const id = params?.id
    if (Number(id) > 100 || Number(id) < 1) {
        const err = {
            message: 'There are only 100 users available from id 1-100 ',
        }
        return NextResponse.json(err);
    }
    try {
        const collectionRef = collection(db, "users")
      const q= query(collectionRef,where("id","==",Number(id)));
    const querySnapshot = await getDocs(q);
      const userData = querySnapshot.docs.map((doc) => doc.data());
      console.log(userData[0]);
    return NextResponse.json(userData[0]);
  } catch (error) {
    const err = {
      message: 'failed to fetch data, try again',
    }
    return NextResponse.json(err);
  }
}


export async function DELETE() {
  
  return NextResponse.json({ message:'user deleted successfully' })
  
}


export async function PATCH(req: Request) {

  const data = await req.json();
  const updatedUser = {
    data,
    message:'user updated successfully' 
  }
  return NextResponse.json(updatedUser)

}

export async function PUT(req: Request) {
  const data = await req.json();
  
  const updatedUser = {
    data,
    message:'user updated successfully' 
  }
  return NextResponse.json(updatedUser)
}