import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { ExternalLink, MapPin, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  universities,
  universityStates,
  universityFocus,
  universityOwnerships,
} from "@/lib/data/universities";

export const Route = createFileRoute("/universities")({
  head: () => ({
    meta: [
      { title: "German Universities Directory — Studieren.de" },
      {
        name: "description",
        content:
          "Search top German universities for international students. Filter by state, focus area and English-taught programs. Data curated from DAAD and uni-assist.",
      },
      {
        property: "og:title",
        content: "German Universities Directory",
      },
      {
        property: "og:description",
        content:
          "Compare German universities by state, focus and English programs.",
      },
    ],
  }),
  component: UniversitiesPage,
});

function UniversitiesPage() {
  const [q, setQ] = useState("");
  const [state, setState] = useState<string>("all");
  const [focus, setFocus] = useState<string>("all");
  const [ownership, setOwnership] = useState<string>("all");

  const filtered = useMemo(() => {
    return universities.filter((u) => {
      if (state !== "all" && u.state !== state) return false;
      if (focus !== "all" && !u.focus.includes(focus)) return false;
      if (ownership !== "all" && u.ownership !== ownership) return false;

      if (
        q &&
        !`${u.name} ${u.city}`.toLowerCase().includes(q.toLowerCase())
      ) {
        return false;
      }

      return true;
    });
  }, [q, state, focus, ownership]);

  return (
    <div className="container-page py-14">
      <div className="max-w-3xl">
        <div className="eyebrow mb-3">Universities</div>

        <h1 className="font-serif text-4xl sm:text-5xl">
          German universities for international students
        </h1>

        <p className="mt-4 text-lg text-muted-foreground">
          A curated set of Germany&apos;s leading universities. Public tuition
          is symbolic (€150–€350 semester fee) except in Baden-Württemberg and
          Bavaria, where some non-EU students may pay higher tuition. Always
          confirm details on the university&apos;s official page.
        </p>
      </div>

      <div className="mt-10 grid gap-3 md:grid-cols-[1fr_180px_180px_180px]">
        <div className="relative">
          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />

          <Input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search by name or city…"
            className="h-11 pl-9"
          />
        </div>

        <Select value={state} onValueChange={setState}>
          <SelectTrigger className="h-11">
            <SelectValue placeholder="State" />
          </SelectTrigger>

          <SelectContent>
            <SelectItem value="all">All states</SelectItem>

            {universityStates.map((s) => (
              <SelectItem key={s} value={s}>
                {s}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Select value={focus} onValueChange={setFocus}>
          <SelectTrigger className="h-11">
            <SelectValue placeholder="Focus" />
          </SelectTrigger>

          <SelectContent>
            <SelectItem value="all">All focus areas</SelectItem>

            {universityFocus.map((f) => (
              <SelectItem key={f} value={f}>
                {f}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Select value={ownership} onValueChange={setOwnership}>
          <SelectTrigger className="h-11">
            <SelectValue placeholder="Type" />
          </SelectTrigger>

          <SelectContent>
            <SelectItem value="all">Public & Private</SelectItem>

            {universityOwnerships.map((o) => (
              <SelectItem key={o} value={o}>
                {o}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="mt-4 text-sm text-muted-foreground">
        Showing{" "}
        <span className="font-medium text-foreground">{filtered.length}</span>{" "}
        of {universities.length}
      </div>

      <div className="mt-6 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {filtered.map((u) => (
          <article
            key={u.slug}
            className="flex flex-col rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-card)] transition hover:shadow-[var(--shadow-hover)]"
          >
            <div className="flex items-center gap-2 text-xs">
              <Badge variant="secondary">{u.type}</Badge>

              <span className="inline-flex items-center gap-1 text-muted-foreground">
                <MapPin className="h-3 w-3" />
                {u.city}, {u.state}
              </span>
            </div>

            <h2 className="mt-3 font-serif text-xl leading-snug">{u.name}</h2>

            <p className="mt-2 text-sm text-muted-foreground">
              {u.description}
            </p>

            <div className="mt-4 flex flex-wrap gap-1.5">
              {u.focus.map((f) => (
                <span
                  key={f}
                  className="rounded-full border border-[#4725C6] bg-[#4725C6] px-2 py-0.5 text-xs font-medium text-white"
                >
                  {f}
                </span>
              ))}
            </div>

            <dl className="mt-5 grid grid-cols-3 gap-3 border-t border-border pt-4 text-xs">
              <div>
                <dt className="text-muted-foreground">Semester fee</dt>
                <dd className="mt-0.5 font-semibold">
                  €{u.tuitionEur.toLocaleString()}
                </dd>
              </div>

              <div>
                <dt className="text-muted-foreground">English progs</dt>
                <dd className="mt-0.5 font-semibold">
                  {u.englishPrograms}+
                </dd>
              </div>

              <div>
                <dt className="text-muted-foreground">Ranking</dt>
                <dd className="mt-0.5 font-semibold">{u.ranking}</dd>
              </div>
            </dl>

            <div className="mt-5 flex gap-2">
              <Button
                asChild
                size="sm"
                variant="outline"
                className="flex-1"
              >
                <a href={u.website} target="_blank" rel="noreferrer">
                  Official site
                  <ExternalLink className="ml-1 h-3.5 w-3.5" />
                </a>
              </Button>

              <Button
                asChild
                size="sm"
                className="flex-1 bg-[#e74515] text-white hover:bg-[#e74515]/90"
              >
                <a
                  href={`https://www.daad.de/en/studying-in-germany/universities/all-degree-programmes/?q=${encodeURIComponent(
                    u.name,
                  )}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  DAAD programs
                </a>
              </Button>
            </div>
          </article>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="mt-16 rounded-xl border border-dashed border-border p-10 text-center text-muted-foreground">
          No universities match your filters.
        </div>
      )}

      <div className="mt-16 rounded-2xl border border-[#4725C6] bg-[#4725C6] p-8 text-white">
        <h2 className="font-serif text-2xl text-white">
          Need every university?
        </h2>

        <p className="mt-2 max-w-2xl text-sm text-white/80">
          This directory highlights well-known institutions. For the full
          selection of German universities and degree programmes, search
          DAAD&apos;s official database.
        </p>

        <div className="mt-4 flex flex-wrap gap-3">
          <Button
            asChild
            className="bg-[#e74515] text-white hover:bg-[#e74515]/90"
          >
            <a
              href="https://www.daad.de/en/studying-in-germany/universities/all-degree-programmes/"
              target="_blank"
              rel="noreferrer"
            >
              DAAD program search
              <ExternalLink className="ml-1 h-4 w-4" />
            </a>
          </Button>

          <Button
            asChild
            variant="outline"
            className="border-white bg-white text-[#4725C6] hover:bg-white/90 hover:text-[#4725C6]"
          >
            <a
              href="https://www.uni-assist.de/en/"
              target="_blank"
              rel="noreferrer"
            >
              uni-assist application portal
            </a>
          </Button>

          <Button
            asChild
            variant="ghost"
            className="text-white hover:bg-white/10 hover:text-[#C4E64C]"
          >
            <Link to="/guides">Read the visa & arrival guides</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}