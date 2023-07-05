import { database as db } from "@/firebase";
import { collection, getDocs, query, orderBy, where } from "firebase/firestore";

import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const first_name = searchParams.get("first_name");
  const last_name = searchParams.get("last_name");
  const city = searchParams.get("city");
  const country = searchParams.get("country");
  const ageGT = searchParams.get("ageGT");
  const ageLT = searchParams.get("ageLT");

  const collectionRef = collection(db, "users");

  if (first_name && last_name) {
    const querySnapshot = await getDocs(
      query(
        collectionRef,
        where("first_name", "==", first_name),
        where("last_name", "==", last_name)
      )
    );
    const userData = querySnapshot.docs.map((doc) => doc.data());
    if (userData.length <= 0) {
      const err = {
        message: `First name: ${first_name} and Last name: ${last_name} is not on the list`,
      };
      return NextResponse.json(err);
    }
    return NextResponse.json(userData);
  }
  if (first_name) {
    const querySnapshot = await getDocs(
      query(collectionRef, where("first_name", "==", first_name))
    );
    const userData = querySnapshot.docs.map((doc) => doc.data());
    if (userData.length <= 0) {
      const err = {
        message: `First name: ${first_name} is not on the list`,
      };
      return NextResponse.json(err);
    }
    return NextResponse.json(userData);
  }
  if (last_name) {
    const querySnapshot = await getDocs(
      query(collectionRef, where("last_name", "==", last_name))
    );
    const userData = querySnapshot.docs.map((doc) => doc.data());
    if (userData.length <= 0) {
      const err = {
        message: `Last name: ${last_name} is not on the list`,
      };
      return NextResponse.json(err);
    }
    return NextResponse.json(userData);
  }
  if (country && city) {
    const querySnapshot = await getDocs(
      query(
        collectionRef,
        where("location.country", "==", country),
        where("location.city", "==", city)
      )
    );
    const userData = querySnapshot.docs.map((doc) => doc.data());
    if (userData.length <= 0) {
      const err = {
        message: `Country: ${country} and City: ${city} is not on the list`,
      };
      return NextResponse.json(err);
    }
    return NextResponse.json(userData);
  }
  if (city) {
    const querySnapshot = await getDocs(
      query(collectionRef, where("location.city", "==", city))
    );
    const userData = querySnapshot.docs.map((doc) => doc.data());
    if (userData.length <= 0) {
      const err = {
        message: `City: ${city} is not on the list`,
      };
      return NextResponse.json(err);
    }
    return NextResponse.json(userData);
  }
  if (country) {
    const querySnapshot = await getDocs(
      query(collectionRef, where("location.country", "==", country))
    );
    const userData = querySnapshot.docs.map((doc) => doc.data());
    if (userData.length <= 0) {
      const err = {
        message: `Country: ${country} is not on the list`,
      };
      return NextResponse.json(err);
    }
    return NextResponse.json(userData);
  }
  if (ageGT && ageLT) {
    const querySnapshot = await getDocs(
      query(
        collectionRef,
        where("age", ">", Number(ageGT)),
        where("age", "<", Number(ageLT))
      )
    );
    const userData = querySnapshot.docs.map((doc) => doc.data());
    if (userData.length <= 0) {
      const err = {
        message: `User in this age range is not on the list`,
      };
      return NextResponse.json(err);
    }
    return NextResponse.json(userData);
  }
  if (ageGT) {
    const querySnapshot = await getDocs(
      query(collectionRef, where("age", ">", Number(ageGT)))
    );
    const userData = querySnapshot.docs.map((doc) => doc.data());
    if (userData.length <= 0) {
      const err = {
        message: `User greater than: ${ageGT} is not on the list`,
      };
      return NextResponse.json(err);
    }
    return NextResponse.json(userData);
  }
  if (ageLT) {
    const querySnapshot = await getDocs(
      query(collectionRef, where("age", "<", Number(ageLT)))
    );
    const userData = querySnapshot.docs.map((doc) => doc.data());
    if (userData.length <= 0) {
      const err = {
        message: `User Lesser than: ${ageLT} is not on the list`,
      };
      return NextResponse.json(err);
    }
    return NextResponse.json(userData);
  }

  return NextResponse.json({
    message: "only use the filters given in the Docs",
  });
}
