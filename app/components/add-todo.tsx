"use client";

import React, { FormEvent, useState } from "react";

const AddTodo = () => {
  const [titleState, setTitleState] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const title = formData.get("title") as string;
    if (!title) return;

    const res = await fetch("/api/todo/add", {
      method: "POST",
      body: JSON.stringify({ title: title }),
    });

    if (res.ok) {
      alert("Record Added!");
      setTitleState("")
    } else {
      alert("Faild");
    }
  };

  return (
    <div className="w-[400px] border-2 border-gray-300 p-3 rounded-md mt-3">
      <form className="flex gap-1" onSubmit={handleSubmit}>
        <input
          className="w-4/5 border border-gray-300 p-2 rounded-md"
          type="text"
          name="title"
          placeholder="Title"
          onChange={(e) => setTitleState(e.target.value)}
          value={titleState}
        />
        <button
          className="w-1/5 bg-black text-white font-bold px-5 py-2 rounded-md"
          type="submit"
        >
          Add
        </button>
      </form>
    </div>
  );
};

export default AddTodo;
