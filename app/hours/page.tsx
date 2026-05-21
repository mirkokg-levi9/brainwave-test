import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type DayHours = { day: string; hours: string };

const openingHours: DayHours[] = [
  { day: "Monday", hours: "8:00–18:00" },
  { day: "Tuesday", hours: "8:00–18:00" },
  { day: "Wednesday", hours: "8:00–18:00" },
  { day: "Thursday", hours: "8:00–18:00" },
  { day: "Friday", hours: "8:00–18:00" },
  { day: "Saturday", hours: "9:00–16:00" },
  { day: "Sunday", hours: "Closed" },
];

export default function HoursPage() {
  return (
    <main className="mx-auto max-w-md p-6">
      <h1 className="text-2xl font-semibold">Hours</h1>
      <Card className="mt-6">
        <CardHeader>
          <CardTitle>Opening hours</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col gap-1">
            {openingHours.map(({ day, hours }) => (
              <div key={day} className="flex justify-between text-sm">
                <span>{day}</span>
                <span className="text-zinc-600">{hours}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </main>
  );
}
