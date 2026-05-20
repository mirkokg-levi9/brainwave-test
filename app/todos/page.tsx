import { TodoList } from "@/components/TodoList";

export default function TodosPage() {
  return (
    <main className="mx-auto max-w-md p-6">
      <h1 className="text-2xl font-semibold">Todos</h1>
      <div className="mt-6">
        <TodoList />
      </div>
    </main>
  );
}
