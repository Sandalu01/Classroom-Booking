import { PrismaClient } from "@prisma/client";
import { error } from "console";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function GET(req: Request) {
  try {
    const rec = await prisma.todo.findMany();
    console.log(rec);
    return NextResponse.json({ message: "success" });
  } catch (e) {
    console.log(error);
    return NextResponse.json(
      { error: "Somthing went wrong!" },
      { status: 500 }
    );
  }
}
