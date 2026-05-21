import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function GithubTestPage() {
  return (
    <main className="mx-auto max-w-md p-6">
      <h1 className="text-2xl font-semibold">GitHub Test</h1>
      <div className="mt-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-sm">Status</CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-zinc-600">
            Created from GitHub issue
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
