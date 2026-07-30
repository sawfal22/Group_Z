import { createFileRoute, Link } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { ExternalLink, Home, Mail, MapPin, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { housingPlatforms, cityCostGuide } from "@/lib/data/accommodation";
import { supabase } from "@/integrations/supabase/client";

export const Route = createFileRoute("/accommodation")({
  head: () => ({
    meta: [
      { title: "Student Accommodation in Germany — International Student Assistant" },
      {
        name: "description",
        content:
          "Where international students actually find housing in Germany: Studierendenwerk dorms, WG-Gesucht, HousingAnywhere, plus community-posted rooms.",
      },
    ],
  }),
  component: AccommodationPage,
});

async function fetchListings() {
  const { data, error } = await supabase
    .from("room_listings")
    .select("id, title, city, district, price_eur, room_type, available_from, description, contact_email, created_at")
    .eq("is_active", true)
    .order("created_at", { ascending: false })
    .limit(24);
  if (error) throw error;
  return data ?? [];
}

function AccommodationPage() {
  const { data: listings = [], isLoading } = useQuery({
    queryKey: ["room_listings"],
    queryFn: fetchListings,
  });

  return (
    <div>
      <section className="container-page py-14">
        <div className="max-w-3xl">
          <div className="eyebrow mb-3">Accommodation</div>
          <h1 className="font-serif text-4xl sm:text-5xl">Finding a room in Germany</h1>
          <p className="mt-4 text-lg text-muted-foreground">
            There is no single "vacancy API" for German student housing. The market is fragmented
            across student services (Studierendenwerk), shared-flat marketplaces, and private
            portals. Here are the platforms that actually work — and community listings from
            students already on the ground.
          </p>
        </div>
      </section>

      {/* Community listings */}
      <section className="container-page">
        <div className="rounded-2xl border border-border bg-card p-6 md:p-8 shadow-[var(--shadow-card)]">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <div className="eyebrow mb-2">Community board</div>
              <h2 className="font-serif text-2xl">Rooms posted by other students</h2>
              <p className="mt-1 text-sm text-muted-foreground">
                Direct listings from students moving out. Free to browse, free to post.
              </p>
            </div>
            <Button asChild className="bg-brick text-brick-foreground hover:bg-brick/90">
              <Link to="/accommodation/post">
                <Plus className="mr-1 h-4 w-4" /> Post a room
              </Link>
            </Button>
          </div>

          <div className="mt-6">
            {isLoading ? (
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="h-40 animate-pulse rounded-lg bg-muted" />
                ))}
              </div>
            ) : listings.length === 0 ? (
              <div className="rounded-xl border border-dashed border-border p-10 text-center">
                <Home className="mx-auto h-8 w-8 text-muted-foreground" />
                <p className="mt-3 text-sm text-muted-foreground">
                  No community listings yet. Be the first to help someone find a room.
                </p>
                <Button asChild className="mt-4">
                  <Link to="/accommodation/post">Post the first room</Link>
                </Button>
              </div>
            ) : (
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {listings.map((l) => (
                  <article key={l.id} className="rounded-xl border border-border bg-background p-5">
                    <div className="flex items-center justify-between gap-2">
                      <Badge variant="secondary">{l.room_type}</Badge>
                      <span className="font-serif text-lg font-semibold">€{l.price_eur}<span className="text-xs font-normal text-muted-foreground">/mo</span></span>
                    </div>
                    <h3 className="mt-2 font-medium leading-snug">{l.title}</h3>
                    <div className="mt-1 text-xs text-muted-foreground inline-flex items-center gap-1">
                      <MapPin className="h-3 w-3" /> {l.city}{l.district ? `, ${l.district}` : ""}
                    </div>
                    <p className="mt-3 line-clamp-3 text-sm text-muted-foreground">{l.description}</p>
                    <div className="mt-4 flex items-center justify-between text-xs text-muted-foreground">
                      <span>From {new Date(l.available_from).toLocaleDateString()}</span>
                      <a href={`mailto:${l.contact_email}`} className="inline-flex items-center gap-1 text-brick hover:underline">
                        <Mail className="h-3 w-3" /> Contact
                      </a>
                    </div>
                  </article>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Platforms */}
      <section className="container-page mt-16">
        <div className="max-w-2xl">
          <div className="eyebrow mb-2">Official platforms</div>
          <h2 className="font-serif text-3xl">Where to search</h2>
        </div>
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {housingPlatforms.map((p) => (
            <a
              key={p.name}
              href={p.url}
              target="_blank"
              rel="noreferrer"
              className="group flex flex-col rounded-2xl border border-border bg-card p-6 transition hover:shadow-[var(--shadow-hover)]"
            >
              <div className="flex items-center justify-between gap-3">
                <h3 className="font-serif text-lg">{p.name}</h3>
                <Badge variant="outline">{p.kind}</Badge>
              </div>
              <p className="mt-3 text-sm text-muted-foreground">{p.description}</p>
              <div className="mt-4 text-xs text-muted-foreground">
                <span className="font-medium text-foreground">Best for:</span> {p.bestFor}
              </div>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-brick">
                Visit <ExternalLink className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
              </span>
            </a>
          ))}
        </div>
      </section>

      {/* City price guide */}
      <section className="container-page mt-16">
        <div className="max-w-2xl">
          <div className="eyebrow mb-2">Cost of housing</div>
          <h2 className="font-serif text-3xl">Monthly rent by city</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Ranges for a room in a shared flat or student dorm. Full apartments cost more.
          </p>
        </div>
        <div className="mt-6 overflow-hidden rounded-2xl border border-border">
          <table className="w-full text-sm">
            <thead className="bg-secondary/60 text-left">
              <tr>
                <th className="p-4 font-medium">City</th>
                <th className="p-4 font-medium">Typical monthly rent</th>
                <th className="p-4 font-medium hidden md:table-cell">Notes</th>
              </tr>
            </thead>
            <tbody>
              {cityCostGuide.map((c, i) => (
                <tr key={c.city} className={i % 2 ? "bg-card" : "bg-background"}>
                  <td className="p-4 font-medium">{c.city}</td>
                  <td className="p-4">{c.monthlyRent}</td>
                  <td className="p-4 text-muted-foreground hidden md:table-cell">{c.note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
