import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { SiteFooter } from "@/components/SiteFooter";

export default function ContactPage() {
  return (
    <main className="mx-auto max-w-md p-6">
      <h1 className="text-2xl font-semibold text-zinc-900">Contact</h1>

      <div className="mt-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-sm text-zinc-900">
              Get in touch
            </CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-zinc-600">
            <p>
              Reach us at{" "}
              <a
                href="mailto:hello@brainwave.example"
                className="text-blue-600 hover:underline"
              >
                hello@brainwave.example
              </a>
            </p>
          </CardContent>
        </Card>
      </div>

      <SiteFooter />
    </main>
  );
}
