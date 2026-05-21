import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type CityWeather = { id: string; city: string; country: string; temperatureC: number };

const cities: CityWeather[] = [
  { id: "1", city: "Belgrade", country: "Serbia", temperatureC: 22 },
  { id: "2", city: "Tokyo", country: "Japan", temperatureC: 28 },
  { id: "3", city: "Oslo", country: "Norway", temperatureC: 9 },
];

export default function WeatherPage() {
  return (
    <main className="mx-auto max-w-md p-6">
      <h1 className="text-2xl font-semibold">Weather</h1>
      <div className="mt-6 flex flex-col gap-4">
        {cities.map((entry) => (
          <Card key={entry.id}>
            <CardHeader>
              <CardTitle className="text-sm">
                {entry.city}, {entry.country}
              </CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-zinc-600">
              {entry.temperatureC}°C
            </CardContent>
          </Card>
        ))}
      </div>
    </main>
  );
}
