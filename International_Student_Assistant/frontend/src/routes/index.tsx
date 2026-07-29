import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Building2,
  BookOpen,
  Languages,
  Home as HomeIcon,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

import heroImg from "@/assets/hero-germany.jpg";
import { Button } from "@/components/ui/button";
import { universities } from "@/lib/data/universities";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Study in Germany — Studieren.de" },
      {
        name: "description",
        content:
          "The friendliest starting point for international students in Germany. Universities, housing, visa help and German language, one clean directory.",
      },
    ],
  }),
  component: Home,
});

const sections = [
  {
    to: "/universities",
    icon: Building2,
    title: "Universities",
    body: "Compare 400+ public and applied-sciences universities across the 16 states.",
  },
  {
    to: "/accommodation",
    icon: HomeIcon,
    title: "Accommodation",
    body: "Dorms, WGs and private flats — with community listings from other students.",
  },
  {
    to: "/guides",
    icon: BookOpen,
    title: "Student guides",
    body: "Visa, Anmeldung, bank account, health insurance and 18-month post-study permit.",
  },
  {
    to: "/german-language",
    icon: Languages,
    title: "German language",
    body: "TestDaF, DSH, Goethe C1 — where to learn, where to test, how much it costs.",
  },
];

function Home() {
  const featured = universities.slice(0, 3);

  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border/60">
        <div className="container-page grid gap-10 py-14 md:py-20 lg:grid-cols-2 lg:items-center lg:gap-14">
          <div>
            <div className="eyebrow mb-4">
              Germany · International Student Assistance
            </div>

            <h1 className="font-serif text-4xl leading-[1.05] tracking-tight sm:text-5xl md:text-6xl">
              Study in Germany{" "}
              <span className="text-brick">without the guesswork.</span>
            </h1>

            <p className="mt-5 max-w-xl text-lg text-muted-foreground">
              A calm, honest starting point for international students. Real
              university data, accommodation platforms that actually work,
              visa steps in plain English, and the language paths that lead to
              admission.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button
                asChild
                size="lg"
                className="bg-brick text-brick-foreground hover:bg-brick/90"
              >
                <Link to="/universities">
                  Explore universities
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>

              <Button asChild size="lg" variant="outline">
                <Link to="/guides">Read student guides</Link>
              </Button>
            </div>

            <div className="mt-10 flex flex-wrap gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-brick" />
                Sourced from DAAD, uni-assist, BAMF
              </div>

              <div className="flex items-center gap-2">
                <Sparkles className="h-4 w-4 text-gold" />
                Free &amp; independent
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 -z-10 rounded-3xl bg-gradient-to-br from-gold/30 via-transparent to-brick/20 blur-2xl" />

            <div className="overflow-hidden rounded-2xl border border-border shadow-[var(--shadow-card)]">
              <img
                src={heroImg}
                alt="A grand German university building in warm autumn light"
                width={1600}
                height={1000}
                className="h-full w-full object-cover"
              />
            </div>

            <div className="absolute -bottom-6 -left-6 hidden rounded-xl border border-border bg-card p-4 shadow-[var(--shadow-card)] md:block">
              <div className="text-xs uppercase tracking-wider text-muted-foreground">
                Public tuition
              </div>

              <div className="mt-1 font-serif text-2xl font-semibold">
                ≈ €0 – €1,500
              </div>

              <div className="text-xs text-muted-foreground">
                per semester at most public unis
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sections grid */}
      <section className="container-page py-20">
        <div className="max-w-2xl">
          <div className="eyebrow mb-3">Where to start</div>

          <h2 className="font-serif text-3xl sm:text-4xl">
            Four pillars of a smooth start
          </h2>

          <p className="mt-3 text-muted-foreground">
            Follow them in order the first time, then come back to whichever one
            you need. Every page links to the official source so you can always
            verify.
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {sections.map((section) => {
            const Icon = section.icon;

            return (
              <Link
                key={section.to}
                to={section.to}
                className="group relative flex flex-col rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-hover)]"
              >
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-border bg-white text-[#4725C6]">
                  <Icon className="h-5 w-5" />
                </span>

                <h3 className="mt-5 font-serif text-xl">{section.title}</h3>

                <p className="mt-2 text-sm text-muted-foreground">
                  {section.body}
                </p>

                <span className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-brick">
                  Open
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </span>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Featured universities */}
      <section className="border-y border-border/60 bg-secondary/40">
        <div className="container-page py-20">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <div className="eyebrow mb-3">Featured</div>

              <h2 className="font-serif text-3xl sm:text-4xl">
                A few universities to know
              </h2>
            </div>

            <Button asChild variant="ghost">
              <Link to="/universities">
                Browse all
                <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {featured.map((university) => (
              <article
                key={university.slug}
                className="rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-card)]"
              >
                <div className="text-xs font-medium uppercase tracking-wider text-brick">
                  {university.type} · {university.state}
                </div>

                <h3 className="mt-2 font-serif text-xl leading-snug">
                  {university.name}
                </h3>

                <p className="mt-2 text-sm text-muted-foreground">
                  {university.description}
                </p>

                <dl className="mt-4 grid grid-cols-2 gap-3 text-sm">
                  <div>
                    <dt className="text-muted-foreground">City</dt>
                    <dd className="font-medium">{university.city}</dd>
                  </div>

                  <div>
                    <dt className="text-muted-foreground">
                      English programs
                    </dt>
                    <dd className="font-medium">
                      {university.englishPrograms}+
                    </dd>
                  </div>
                </dl>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container-page py-20">
        <div className="rounded-3xl bg-primary p-10 text-primary-foreground md:p-14">
          <div className="grid gap-8 lg:grid-cols-[1.4fr_1fr] lg:items-center">
            <div>
              <h2 className="font-serif text-3xl md:text-4xl">
                Save your shortlist. Post rooms. Help future students.
              </h2>

              <p className="mt-3 max-w-xl text-primary-foreground/80">
                Create a free account to bookmark universities and guides, and
                post available rooms for the international students coming
                after you.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 lg:justify-end">
              <Button
                asChild
                size="lg"
                className="bg-gold text-gold-foreground hover:bg-gold/90"
              >
                <Link to="/auth">Create an account</Link>
              </Button>

              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10"
              >
                <Link to="/accommodation">See accommodation</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}