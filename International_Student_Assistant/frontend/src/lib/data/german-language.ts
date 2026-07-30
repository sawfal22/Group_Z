export type LanguageTest = {
  slug: string;
  name: string;
  fullName: string;
  levels: string;
  format: string;
  cost: string;
  recognisedFor: string;
  url: string;
  description: string;
};

export const languageTests: LanguageTest[] = [
  {
    slug: "testdaf",
    name: "TestDaF",
    fullName: "Test Deutsch als Fremdsprache",
    levels: "B2 – C1 (TDN 3–5)",
    format: "Reading, listening, writing, speaking — paper or digital",
    cost: "€215 abroad · €195 in Germany",
    recognisedFor: "University admission in Germany",
    url: "https://www.testdaf.de/en/",
    description:
      "The most common German proficiency test for university admission. Score of TDN 4 in all four sections is the safe bar.",
  },
  {
    slug: "dsh",
    name: "DSH",
    fullName: "Deutsche Sprachprüfung für den Hochschulzugang",
    levels: "DSH-1 / DSH-2 / DSH-3",
    format: "Taken at the German university you applied to, usually before semester start",
    cost: "€50 – €150",
    recognisedFor: "The specific university that administers it",
    url: "https://www.fadaf.de/de/dsh/",
    description:
      "University-administered German test. DSH-2 is required for most Bachelor's programs and is equivalent to TestDaF TDN 4.",
  },
  {
    slug: "telc-c1",
    name: "telc C1 Hochschule",
    fullName: "telc C1 Hochschule",
    levels: "C1",
    format: "Reading, listening, writing, speaking",
    cost: "€150 – €200",
    recognisedFor: "All German universities (equivalent to TestDaF TDN 5)",
    url: "https://www.telc.net/en/",
    description:
      "A specialised C1 exam for university admission, often available in more test centres worldwide than TestDaF.",
  },
  {
    slug: "goethe-c1",
    name: "Goethe-Zertifikat C1 / C2",
    fullName: "Goethe-Zertifikat",
    levels: "A1 – C2",
    format: "Reading, listening, writing, speaking",
    cost: "€180 – €330",
    recognisedFor: "University admission (C1/C2) and visas",
    url: "https://www.goethe.de/en/spr/kup/prf.html",
    description:
      "The Goethe-Institut runs the most globally recognised German exams. C1 or C2 satisfies university language requirements.",
  },
  {
    slug: "oesd",
    name: "ÖSD Zertifikat",
    fullName: "Österreichisches Sprachdiplom Deutsch",
    levels: "A1 – C2",
    format: "Reading, listening, writing, speaking",
    cost: "€150 – €260",
    recognisedFor: "German-speaking universities (Germany, Austria, Switzerland)",
    url: "https://www.osd.at/en/",
    description: "Austrian equivalent of the Goethe exams — accepted by most German universities at C1.",
  },
];

export type LanguageProvider = {
  name: string;
  scope: "In-person" | "Online" | "Hybrid";
  url: string;
  description: string;
};

export const languageProviders: LanguageProvider[] = [
  {
    name: "Goethe-Institut",
    scope: "Hybrid",
    url: "https://www.goethe.de/en/spr/kur.html",
    description: "The global gold standard — in-person courses in 90+ countries and online C1 courses.",
  },
  {
    name: "Deutsche Welle — Learn German",
    scope: "Online",
    url: "https://learngerman.dw.com/en/overview",
    description: "Free courses from A1 to B1 with videos, exercises and a placement test.",
  },
  {
    name: "DAAD German Courses",
    scope: "In-person",
    url: "https://www.daad.de/en/study-and-research-in-germany/scholarships/university-summer-courses/",
    description: "DAAD-funded summer language courses at German universities with scholarships available.",
  },
  {
    name: "VHS — Volkshochschule",
    scope: "In-person",
    url: "https://www.volkshochschule.de/",
    description:
      "Community adult-education network. Every German city has one — the cheapest way to reach B1 after arrival.",
  },
  {
    name: "Speakly / Babbel / Lingoda",
    scope: "Online",
    url: "https://www.lingoda.com/en/german/",
    description: "Live online classes with certified teachers — flexible schedules, monthly subscriptions.",
  },
  {
    name: "Duolingo",
    scope: "Online",
    url: "https://www.duolingo.com/course/de/en/Learn-German",
    description: "Free gamified app — good for A1 vocabulary and daily practice, not enough for exam prep.",
  },
];
