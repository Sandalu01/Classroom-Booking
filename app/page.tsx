import AddTodo from "./components/add-todo";
import ListTodo from "./components/list-todo";

export const dynamic = "force-dynamic";

export default function Home() {
  return (
    <main>
      <div className="flex flex-col justify-start items-center w-full">
        <div className="sm:w-full max-w-[400px]">
          <AddTodo />
          <ListTodo />
        </div>
      </div>
    </main>
  );
}
