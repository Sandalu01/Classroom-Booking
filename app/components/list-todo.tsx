import React from "react";
import ListItem from "./list-item";
import { PrismaClient, Todo } from "@prisma/client";

const prisma = new PrismaClient()

const ListTodo = async () => {
  let todos : Todo[] = []
  try{
    todos = await prisma.todo.findMany()
  }catch(e){
    console.log("Error: fetching faild\n",e)
  }

  return (
    <div className="w-[400px] border-2 border-gray-300 p-3 rounded-md mt-3 overflow-auto max-h-screen">
      {todos.map((element) => (
        <ListItem key={element.id} id={element.id as number} text={element.title as string} done={element.done} />
      ))}
    </div>
  );
};

export default ListTodo;
