import Link from "next/link";
import { notFound } from "next/navigation";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { getMenuItem } from "@/lib/menu";

export default async function MenuItemPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const item = getMenuItem(id);

  if (!item) {
    notFound();
  }

  return (
    <main className="mx-auto max-w-md p-6">
      <Link href="/menu" className="text-sm text-blue-600 hover:underline">
        ← Back to menu
      </Link>
      <h1 className="mt-4 text-2xl font-semibold">{item.name}</h1>
      <Card className="mt-4">
        <CardHeader>
          <CardTitle className="text-sm">{item.name}</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col gap-2 text-sm text-zinc-600">
          <p className="font-semibold text-zinc-900">{item.price}</p>
          <p>{item.description}</p>
        </CardContent>
      </Card>
    </main>
  );
}
