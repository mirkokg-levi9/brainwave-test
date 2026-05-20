import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type Todo = { id: string; title: string; completed: boolean };

const todos: Todo[] = [
  { id: "1", title: "Draft the launch announcement", completed: false },
  { id: "2", title: "Review the design mockups", completed: true },
  { id: "3", title: "Schedule the team sync", completed: false },
];

export function TodoList() {
  return (
    <div className="flex flex-col gap-4">
      {todos.map((todo) => (
        <Card key={todo.id}>
          <CardHeader>
            <CardTitle className="flex items-center justify-between gap-2 text-sm">
              {todo.title}
              {todo.completed ? (
                <Badge variant="secondary">completed</Badge>
              ) : null}
            </CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-zinc-600">
            {todo.completed ? "Done" : "Pending"}
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
