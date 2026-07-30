import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { ArrowRight, BookOpen, ExternalLink } from "lucide-react";

import { Button } from "@/components/ui/button";
import { guides, guideCategories } from "@/lib/data/guides";

export const Route = createFileRoute("/guides")({
  head: () => ({
    meta: [
      {
        title: "Student Guides for Germany — International Student Assistant",
      },
      {
        name: "description",
        content:
          "Plain-English step-by-step guides: student visa, Anmeldung, bank account, health insurance, residence permit extension, and part-time work rules.",
      },
    ],
  }),
  component: GuidesPage,
});

function GuidesPage() {
  const [category, setCategory] = useState<string>("all");

  const filtered = useMemo(() => {
    if (category === "all") {
      return guides;
    }

    return guides.filter((guide) => guide.category === category);
  }, [category]);

  return (
    <div className="container-page py-14">
      <div className="max-w-3xl">
        <div className="eyebrow mb-3">Student guides</div>

        <h1 className="font-serif text-4xl sm:text-5xl">
          Everything you have to do — in order
        </h1>

        <p className="mt-4 text-lg text-muted-foreground">
          The bureaucracy of moving to Germany is not hard, but it is strict.
          Skip a step and the next one blocks. These guides run in the actual
          order you&apos;ll need them.
        </p>
      </div>

      <div className="mt-8 flex flex-wrap gap-2">
        <button
          type="button"
          onClick={() => setCategory("all")}
          className={
            "rounded-full border px-4 py-1.5 text-sm font-medium transition " +
            (category === "all"
              ? "border-[#4725C6] bg-[#4725C6] text-white"
              : "border-border bg-card hover:border-[#4725C6] hover:bg-[#C4E64C]/30")
          }
        >
          All
        </button>

        {guideCategories.map((guideCategory) => (
          <button
            type="button"
            key={guideCategory}
            onClick={() => setCategory(guideCategory)}
            className={
              "rounded-full border px-4 py-1.5 text-sm font-medium transition " +
              (category === guideCategory
                ? "border-[#4725C6] bg-[#4725C6] text-white"
                : "border-border bg-card hover:border-[#4725C6] hover:bg-[#C4E64C]/30")
            }
          >
            {guideCategory}
          </button>
        ))}
      </div>

      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        {filtered.map((guide) => (
          <article
            key={guide.slug}
            className="rounded-2xl border border-border bg-card p-7 shadow-[var(--shadow-card)]"
          >
            <div className="flex items-center gap-2">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-[#C4E64C] text-[#4725C6]">
                <BookOpen className="h-4 w-4" />
              </span>

              <div className="text-xs uppercase tracking-wider text-[#e74515]">
                {guide.category}
              </div>
            </div>

            <h2 className="mt-4 font-serif text-2xl leading-snug">
              {guide.title}
            </h2>

            <p className="mt-2 text-muted-foreground">{guide.summary}</p>

            <ol className="mt-6 space-y-4">
              {guide.steps.map((step, index) => (
                <li key={step.title} className="flex gap-4">
                  <span className="mt-0.5 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#C4E64C] font-serif text-sm font-semibold text-[#4725C6]">
                    {index + 1}
                  </span>

                  <div>
                    <div className="font-medium">{step.title}</div>

                    <p className="mt-1 text-sm text-muted-foreground">
                      {step.body}
                    </p>

                    {step.link && (
                      <a
                        href={step.link.url}
                        target="_blank"
                        rel="noreferrer"
                        className="mt-2 inline-flex items-center gap-1 text-sm font-medium text-[#e74515] hover:underline"
                      >
                        {step.link.label}
                        <ExternalLink className="h-3 w-3" />
                      </a>
                    )}
                  </div>
                </li>
              ))}
            </ol>
          </article>
        ))}
      </div>

      <div className="mt-16 rounded-2xl border border-[#C4E64C] bg-[#C4E64C] p-8 text-[#151827] md:p-10">
        <h2 className="font-serif text-2xl text-[#151827]">
          Learn the language while you wait
        </h2>

        <p className="mt-2 max-w-2xl text-[#151827]/75">
          German is not officially required for most English-taught programs,
          but B1 makes daily life dramatically easier — and it is required to
          switch to a permanent settlement permit later.
        </p>

        <Button
          asChild
          className="mt-5 bg-[#4725C6] text-white hover:bg-[#4725C6]/90"
        >
          <Link to="/german-language">
            See language tests &amp; courses
            <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </div>
  );
}