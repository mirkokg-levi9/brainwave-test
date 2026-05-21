import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { menuItems } from "@/lib/menu";

export default function MenuPage() {
  return (
    <main className="mx-auto max-w-md p-6">
      <h1 className="text-2xl font-semibold">Menu</h1>
      <div className="mt-6 flex flex-col gap-4">
        {menuItems.map((item) => (
          <Link key={item.id} href={`/menu/${item.id}`} className="text-blue-600">
            <Card>
              <CardHeader>
                <CardTitle className="text-sm">{item.name}</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-zinc-600">
                {item.price}
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </main>
  );
}
