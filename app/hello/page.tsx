import { Card, CardContent } from "@/components/ui/card";

export default function HelloPage() {
  return (
    <main className="flex min-h-screen items-center justify-center p-6">
      <Card className="w-full max-w-sm">
        <CardContent className="p-6 text-center">
          <p className="text-2xl font-semibold">Hello from brAInwave</p>
        </CardContent>
      </Card>
    </main>
  );
}
