"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";

const ListItem = ({
  text,
  id,
  done,
}: {
  text: string;
  id: number;
  done: boolean;
}) => {
  const router = useRouter();
  const [doneState, setDoneState] = useState(done);
  const line = doneState ? "line-through" : "";

  const handleDone = async (e: boolean, id: number) => {
    setDoneState(e);
    const res = await fetch("/api/todo", {
      method: "PUT",
      body: JSON.stringify({ id: id, done: e }),
    });
  };

  const handleDelete = async (id: number) => {
    const res = await fetch("/api/todo", {
      method: "DELETE",
      body: JSON.stringify({ id: id }),
    });
    if (res.ok) {
      alert("Record Deleted");
      router.replace("/");
      router.refresh()
    }
  };

  return (
    <div className="flex w-full bg-gray-200 p-3 rounded-md mt-3">
      <div className="w-4/6">
        <p className={line}>{text}</p>
      </div>
      <div className="w-2/6 flex justify-center gap-3 px-2">
        <input
          type="checkbox"
          name="done"
          checked={doneState}
          onChange={(e) => handleDone(e.target.checked, id)}
        />
        <button
          className="bg-red-600 px-3 rounded-md text-white text-sm hover:bg-red-400"
          onClick={() => {
            handleDelete(id);
          }}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default ListItem;
