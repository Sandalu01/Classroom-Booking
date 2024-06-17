import { PrismaClient } from "@prisma/client";
import { error } from "console";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

// export async function GET(req: Request) {
//   try {
//     console.log("Hello World");
//     return NextResponse.json({ message: "Done" });
//   } catch (e) {
//     console.log("Error: Update faild!\n", e);
//     return NextResponse.json({ error: "Update Faild!" }, { status: 500 });
//   }
// }

export async function POST(req: Request) {
  try {
    const { title } = await req.json();
    const rec = await prisma.todo.create({
      data: { title: title, done: false },
    });

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

export async function PUT(req: Request) {
  try {
    const { id, done } = await req.json();
    const rec = await prisma.todo.update({
      where: { id: id },
      data: { done: done },
    });
    console.log(rec);
    return NextResponse.json({ message: "Success" });
  } catch (e) {
    console.log("Error: Update faild!\n", e);
    return NextResponse.json({ error: "Update Faild!" }, { status: 500 });
  }
}

export async function DELETE(req: Request) {
  try {
    const { id } = await req.json();
    const rec = await prisma.todo.delete({ where: { id: id } });
    console.log(rec);
    return NextResponse.json({ message: "Success" });
  } catch (e) {
    console.log("Error: Update faild!\n", e);
    return NextResponse.json({ error: "Update Faild!" }, { status: 500 });
  }
}
