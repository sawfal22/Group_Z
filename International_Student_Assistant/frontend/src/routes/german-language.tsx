import { createFileRoute } from "@tanstack/react-router";
import { ExternalLink } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import {
  languageProviders,
  languageTests,
} from "@/lib/data/german-language";

export const Route = createFileRoute("/german-language")({
  head: () => ({
    meta: [
      {
        title: "German Language Tests & Courses — About International Student Assistant",
      },
      {
        name: "description",
        content:
          "TestDaF, DSH, telc, Goethe-Zertifikat, ÖSD — the German language tests recognised by universities, plus where to learn German online and in person.",
      },
    ],
  }),
  component: LanguagePage,
});

function LanguagePage() {
  return (
    <div className="container-page py-14">
      <div className="max-w-3xl">
        <div className="eyebrow mb-3">German language</div>

        <h1 className="font-serif text-4xl sm:text-5xl">
          Tests, levels, and where to learn
        </h1>

        <p className="mt-4 text-lg text-muted-foreground">
          German-taught programs require proof of language proficiency —
          usually TestDaF TDN 4 or DSH-2, equivalent to C1. English-taught
          programs do not require it for admission, but most students still
          want B1 to live comfortably.
        </p>
      </div>

      <section className="mt-14">
        <div className="eyebrow mb-2">Recognised tests</div>

        <h2 className="font-serif text-3xl">
          Which certificate do you need?
        </h2>

        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {languageTests.map((test) => (
            <article
              key={test.slug}
              className="rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-card)]"
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <div className="font-serif text-2xl">{test.name}</div>

                  <div className="text-xs text-muted-foreground">
                    {test.fullName}
                  </div>
                </div>

                <Badge className="bg-[#C4E64C] text-[#151827] hover:bg-[#C4E64C]">
                  {test.levels}
                </Badge>
              </div>

              <p className="mt-3 text-sm text-muted-foreground">
                {test.description}
              </p>

              <dl className="mt-5 space-y-2 text-sm">
                <div className="flex justify-between gap-3 border-t border-border pt-2">
                  <dt className="text-muted-foreground">Format</dt>
                  <dd className="text-right font-medium">{test.format}</dd>
                </div>

                <div className="flex justify-between gap-3 border-t border-border pt-2">
                  <dt className="text-muted-foreground">Cost</dt>
                  <dd className="text-right font-medium">{test.cost}</dd>
                </div>

                <div className="flex justify-between gap-3 border-t border-border pt-2">
                  <dt className="text-muted-foreground">Recognised for</dt>
                  <dd className="text-right font-medium">
                    {test.recognisedFor}
                  </dd>
                </div>
              </dl>

              <a
                href={test.url}
                target="_blank"
                rel="noreferrer"
                className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-[#e74515] hover:underline"
              >
                Register &amp; find test centres
                <ExternalLink className="h-3.5 w-3.5" />
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-16">
        <div className="eyebrow mb-2">Where to learn</div>

        <h2 className="font-serif text-3xl">Course providers</h2>

        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {languageProviders.map((provider) => (
            <a
              key={provider.name}
              href={provider.url}
              target="_blank"
              rel="noreferrer"
              className="group rounded-2xl border border-border bg-card p-6 transition hover:border-[#4725C6] hover:shadow-[var(--shadow-hover)]"
            >
              <div className="flex items-center justify-between gap-2">
                <div className="font-serif text-lg">{provider.name}</div>

                <Badge
                  variant="outline"
                  className="border-[#4725C6] text-[#4725C6]"
                >
                  {provider.scope}
                </Badge>
              </div>

              <p className="mt-3 text-sm text-muted-foreground">
                {provider.description}
              </p>

              <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-[#e74515]">
                Visit
                <ExternalLink className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
              </span>
            </a>
          ))}
        </div>
      </section>

      <section className="mt-16 rounded-2xl border border-[#C4E64C] bg-[#C4E64C] p-8 text-[#151827]">
        <h2 className="font-serif text-2xl text-[#151827]">
          CEFR levels — what they actually mean
        </h2>

        <div className="mt-6 grid gap-3 sm:grid-cols-2 md:grid-cols-3">
          {[
            ["A1", "Basic greetings, ordering food."],
            ["A2", "Simple conversations, everyday needs."],
            ["B1", "Everyday life, most bureaucracy, casual work."],
            ["B2", "University coursework, workplace fluency."],
            ["C1", "Academic writing, most Bachelor / Master programs."],
            ["C2", "Native-level fluency."],
          ].map(([level, description]) => (
            <div
              key={level}
              className="rounded-lg border border-[#4725C6]/20 bg-white/75 p-4"
            >
              <div className="font-serif text-xl font-semibold text-[#4725C6]">
                {level}
              </div>

              <div className="mt-1 text-sm text-[#151827]/75">
                {description}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}