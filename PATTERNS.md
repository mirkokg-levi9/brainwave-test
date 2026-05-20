# Patterns — copy these, do not invent your own

Two worked examples. Match them exactly. Imports use the `@/` alias.

## Pattern 1 — Form with a Server Action

Action goes in its own file with `"use server"`. The form is a Server
Component — no `"use client"`, no `useState`. Repeat the field block.

```tsx
// app/contact/actions.ts
"use server";

export async function submitContact(formData: FormData) {
  const name = String(formData.get("name") ?? "");
  console.log("contact submission:", { name });
}
```

```tsx
// app/contact/page.tsx
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { submitContact } from "./actions";

export default function ContactPage() {
  return (
    <main className="mx-auto max-w-md p-6">
      <h1 className="text-2xl font-semibold">Contact</h1>
      <form action={submitContact} className="mt-6 flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <Label htmlFor="name">Name</Label>
          <Input id="name" name="name" required />
        </div>
        <Button type="submit">Send</Button>
      </form>
    </main>
  );
}
```

## Pattern 2 — Data list with Card + map()

Type the data, map over it, give each element a stable `key`.

```tsx
// components/UserList.tsx
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type User = { id: string; name: string; role: string };

const users: User[] = [
  { id: "1", name: "Ada Lovelace", role: "Engineer" },
  { id: "2", name: "Alan Turing", role: "Researcher" },
];

export function UserList() {
  return (
    <div className="flex flex-col gap-4">
      {users.map((user) => (
        <Card key={user.id}>
          <CardHeader>
            <CardTitle className="text-sm">{user.name}</CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-zinc-600">
            {user.role}
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
```

## Anti-patterns — never do these

- No `useEffect` or client `fetch()` for data — use a Server Component.
- No custom CSS files and no `style={}` — Tailwind utilities only.
- No `any` — type every prop, array, and function parameter.
