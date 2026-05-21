import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function UiTestPage() {
  return (
    <main className="mx-auto max-w-md p-6">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl font-semibold">UI Test</CardTitle>
        </CardHeader>
        <CardContent className="text-sm text-zinc-600">
          Created from the web UI
        </CardContent>
      </Card>
    </main>
  );
}
