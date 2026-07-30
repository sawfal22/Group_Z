export type Guide = {
  slug: string;
  title: string;
  category: "Before you arrive" | "First weeks" | "Money & health" | "Working & staying";
  summary: string;
  steps: { title: string; body: string; link?: { label: string; url: string } }[];
};

export const guides: Guide[] = [
  {
    slug: "student-visa",
    title: "Applying for a German Student Visa",
    category: "Before you arrive",
    summary:
      "The national visa (D-visa) for studies must be applied for from your home country at the German embassy or consulate.",
    steps: [
      {
        title: "Get your admission letter",
        body: "Once you receive the Zulassungsbescheid from a German university, gather passport, photos, admission letter, CV and academic transcripts.",
      },
      {
        title: "Open a blocked account (Sperrkonto)",
        body: "Deposit €11,904 (2025 figure — €992/month × 12) into a blocked account with Expatrio, Fintiba, Coracle, or Deutsche Bank.",
        link: { label: "Fintiba blocked account", url: "https://www.fintiba.com/" },
      },
      {
        title: "Buy health insurance",
        body: "Incoming/travel insurance for the visa (Mawista, Care Concept) — you switch to public insurance (TK, AOK) once enrolled.",
      },
      {
        title: "Book your visa appointment",
        body: "Slot availability varies wildly — book 2–4 months before your program start via the German mission website in your country.",
        link: { label: "Find your German mission", url: "https://www.auswaertiges-amt.de/en/aamt/auslandsvertretungen" },
      },
    ],
  },
  {
    slug: "anmeldung",
    title: "Anmeldung — Registering Your Address",
    category: "First weeks",
    summary:
      "You must register your address at the Bürgeramt within 14 days of moving in. Everything (bank, insurance, tax ID) depends on it.",
    steps: [
      {
        title: "Book an appointment early",
        body: "In Berlin and Munich, slots vanish weeks in advance. Try 6:00 in the morning when new slots drop.",
      },
      {
        title: "Get your landlord's confirmation",
        body: "Ask for a Wohnungsgeberbestätigung — a signed form confirming you live there. Without it you cannot register.",
      },
      {
        title: "Bring your passport & completed form",
        body: "Download the Anmeldung form for your city, fill it in, and bring passport + rental contract to the appointment.",
      },
      {
        title: "Receive your Meldebescheinigung",
        body: "You leave with a registration certificate and your Steuer-ID arrives by post 2–3 weeks later.",
      },
    ],
  },
  {
    slug: "bank-account",
    title: "Opening a German Bank Account",
    category: "First weeks",
    summary:
      "You need a German current account (Girokonto) for rent, salary and insurance. Free digital banks are easiest for students.",
    steps: [
      {
        title: "Pick a bank",
        body: "N26, Comdirect, DKB and C24 offer free student accounts in English. Sparkasse is traditional but has fees.",
      },
      {
        title: "Verify your identity",
        body: "VideoIdent from your phone (N26, DKB) or PostIdent at any Deutsche Post branch (Comdirect).",
      },
      {
        title: "Set up SEPA direct debits",
        body: "Rent, insurance and mobile contracts all pull automatically via Lastschrift — set this up on day one to avoid missed payments.",
      },
    ],
  },
  {
    slug: "health-insurance",
    title: "Public Health Insurance for Students",
    category: "Money & health",
    summary:
      "Public statutory insurance (TK, AOK, Barmer) is around €125/month for students under 30 and mandatory for enrolment.",
    steps: [
      {
        title: "Choose a provider",
        body: "TK is popular with internationals for its English service and app. AOK is regional and Barmer offers strong dental cover.",
        link: { label: "TK for international students", url: "https://www.tk.de/en" },
      },
      {
        title: "Enrol before matriculation",
        body: "The university needs your insurance certificate before it will issue your student card. Ask the provider for the M10 electronic notification.",
      },
      {
        title: "Change after age 30",
        body: "The student rate ends at 30 — you either switch to voluntary insurance (€200+/month) or a private plan while writing your thesis.",
      },
    ],
  },
  {
    slug: "visa-extension",
    title: "Extending Your Residence Permit",
    category: "Working & staying",
    summary:
      "The initial visa lasts 3–12 months. You'll convert it to a residence permit for studies (Aufenthaltserlaubnis) at the Ausländerbehörde.",
    steps: [
      {
        title: "Book your Ausländerbehörde slot",
        body: "Do this the moment you have Anmeldung. Waiting times can be 2–4 months in Berlin and Munich.",
      },
      {
        title: "Prepare documents",
        body: "Passport, biometric photo, Meldebescheinigung, enrolment certificate (Immatrikulationsbescheinigung), blocked-account proof, health insurance certificate, rental contract.",
      },
      {
        title: "Pay the fee",
        body: "The fee is around €100. The permit is issued as an electronic residence card (eAT) by post within a few weeks.",
      },
      {
        title: "After graduation: 18-month jobseeker permit",
        body: "You can extend for up to 18 months to look for qualified employment — one of the most generous rules in Europe.",
        link: {
          label: "BAMF: after graduation",
          url: "https://www.bamf.de/EN/Themen/MigrationAufenthalt/ZuwandererDrittstaaten/Studieren/studieren-node.html",
        },
      },
    ],
  },
  {
    slug: "part-time-work",
    title: "Working While You Study",
    category: "Working & staying",
    summary:
      "Non-EU students can work 140 full days or 280 half-days per year without extra permission (as of March 2024).",
    steps: [
      {
        title: "Know your limits",
        body: "Working beyond the limit or in self-employment needs approval from the Ausländerbehörde and Agentur für Arbeit.",
      },
      {
        title: "Get a Steuer-ID and social security number",
        body: "Both come automatically after Anmeldung and first payroll registration — your employer handles the rest.",
      },
      {
        title: "Watch for the €556/month mini-job cap",
        body: "Mini-jobs are tax-free and insurance-light, ideal for students. Above that, income tax kicks in.",
      },
    ],
  },
];

export const guideCategories = Array.from(new Set(guides.map((g) => g.category)));
