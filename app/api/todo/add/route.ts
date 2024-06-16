import { PrismaClient } from "@prisma/client";
import { error } from "console";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function POST(req: Request) {
  try {
    const { title } = await req.json();
    const rec = await prisma.todo.create({ data: { title: title } });

    if (rec) {
      return NextResponse.json({ message: "success" });
    } else {
      return NextResponse.json(
        { error: "Somthing went wrong!" },
        { status: 500 }
      );
    }
  } catch (e) {
    console.log(error);
    return NextResponse.json(
      { error: "Somthing went wrong!" },
      { status: 500 }
    );
  }
}
