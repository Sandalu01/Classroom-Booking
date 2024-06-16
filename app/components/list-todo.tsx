import React from "react";
import ListItem from "./list-item";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const ListTodo = async () => {
  const todos = await prisma.todo.findMany();

  console.log(todos);

  return (
    <div className="w-[400px] border-2 border-gray-300 p-3 rounded-md mt-3 overflow-auto max-h-screen">
      {todos.map((element) => (
        <ListItem key={element.id} text={element.title as string} />
      ))}
    </div>
  );
};

export default ListTodo;
