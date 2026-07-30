import { createFileRoute } from "@tanstack/react-router";
import { Heart, ShieldCheck, Users } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      {
        title: "About International Student Assistant",
      },
      {
        name: "description",
        content:
          "International Student Assistant is a final-year student project — an independent, honest guide for international students choosing Germany.",
      },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  const cards = [
    {
      icon: ShieldCheck,
      title: "Independent",
      body: "No affiliate spam. Every link goes to an official source such as DAAD, uni-assist, BAMF, Studierendenwerk and Goethe-Institut, or a well-known platform.",
    },
    {
      icon: Users,
      title: "Community",
      body: "Registered students can post rooms and share what they wish they had known — helping the next cohort skip weeks of confusion.",
    },
    {
      icon: Heart,
      title: "Free",
      body: "Free to read, free to save your shortlist, and free to post listings. Built as a public-good project.",
    },
  ];

  return (
    <div className="container-page py-14">
      <div className="max-w-3xl">
        <div className="eyebrow mb-3">About</div>

        <h1 className="font-serif text-4xl sm:text-5xl">
          A friendlier front door to studying in Germany.
        </h1>

        <p className="mt-5 text-lg text-muted-foreground">
          International Student Assistant began as a final-year project because the information
          international students actually need is scattered across a dozen
          government portals, university sites, and Reddit threads. The goal is
          simple: gather it, structure it, keep it honest, and let students
          themselves add what only they know.
        </p>
      </div>

      <div className="mt-14 grid gap-6 md:grid-cols-3">
        {cards.map((card) => {
          const Icon = card.icon;

          return (
            <div
              key={card.title}
              className="rounded-2xl border border-border bg-card p-6 transition hover:border-[#4725C6]"
            >
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-[#C4E64C] text-[#4725C6]">
                <Icon className="h-5 w-5" />
              </span>

              <h3 className="mt-4 font-serif text-xl">{card.title}</h3>

              <p className="mt-2 text-sm text-muted-foreground">
                {card.body}
              </p>
            </div>
          );
        })}
      </div>

      <section className="mt-16 rounded-2xl border border-[#C4E64C] bg-[#C4E64C] p-8 text-[#151827]">
        <h2 className="font-serif text-2xl text-[#151827]">
          A note on data
        </h2>

        <p className="mt-3 max-w-3xl text-sm text-[#151827]/75">
          Germany has no unified real-time API for student housing, university
          admissions, or residence-permit slots. The information here is
          curated from public sources and updated periodically. Always confirm
          details with the university, embassy, or platform before making any
          decision.
        </p>
      </section>
    </div>
  );
}