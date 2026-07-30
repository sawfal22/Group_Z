export type HousingPlatform = {
  name: string;
  url: string;
  kind: "Studentenwerk" | "Private marketplace" | "Shared flat" | "Short-term" | "Government";
  description: string;
  bestFor: string;
};

export const housingPlatforms: HousingPlatform[] = [
  {
    name: "Studentenwerk (local student services)",
    url: "https://www.studentenwerke.de/en",
    kind: "Studentenwerk",
    description:
      "Non-profit university housing. Cheapest option (€250–€450/month) but long waiting lists — apply the moment you get your admission letter.",
    bestFor: "First-year and Master's students on tight budgets.",
  },
  {
    name: "WG-Gesucht",
    url: "https://www.wg-gesucht.de/en/",
    kind: "Shared flat",
    description:
      "Germany's largest platform for shared apartments (WGs). Filter by city, budget and gender preferences. Expect quick turnover — reply within hours.",
    bestFor: "Students wanting to share with locals and improve German.",
  },
  {
    name: "ImmoScout24",
    url: "https://www.immobilienscout24.de/",
    kind: "Private marketplace",
    description:
      "The biggest German real-estate portal. Best for full apartments and long-term rentals. You'll usually need a Schufa credit report + proof of income.",
    bestFor: "Students with family, couples, or a scholarship.",
  },
  {
    name: "HousingAnywhere",
    url: "https://housinganywhere.com/",
    kind: "Private marketplace",
    description:
      "International platform designed for students. You can book from abroad, contracts in English, deposit held in escrow.",
    bestFor: "Booking before you arrive in Germany.",
  },
  {
    name: "Studenten-WG",
    url: "https://www.studenten-wg.de/",
    kind: "Shared flat",
    description: "A student-focused WG marketplace with a smaller but active listing base.",
    bestFor: "Backup search alongside WG-Gesucht.",
  },
  {
    name: "Uniplaces",
    url: "https://www.uniplaces.com/",
    kind: "Private marketplace",
    description: "Book verified rooms in advance from abroad in major German cities.",
    bestFor: "Short-notice arrivals who want certainty.",
  },
  {
    name: "Wunderflats",
    url: "https://wunderflats.com/",
    kind: "Short-term",
    description:
      "Furnished mid-term rentals (1–12 months) with English contracts. Higher price but zero-fuss.",
    bestFor: "Exchange semesters and buffer months while searching.",
  },
  {
    name: "eBay Kleinanzeigen (now Kleinanzeigen)",
    url: "https://www.kleinanzeigen.de/",
    kind: "Private marketplace",
    description:
      "Free classifieds site — mostly German. Great for direct-from-landlord rooms and second-hand furniture.",
    bestFor: "Students comfortable communicating in German.",
  },
  {
    name: "BAföG & Wohngeld info (housing benefit)",
    url: "https://www.bafög.de/en/",
    kind: "Government",
    description:
      "Federal housing subsidy (Wohngeld) is available to students who don't qualify for BAföG. Apply at your local Wohngeldstelle after moving in.",
    bestFor: "Cutting monthly rent by €100–€250.",
  },
];

export const cityCostGuide: { city: string; monthlyRent: string; note: string }[] = [
  { city: "Munich", monthlyRent: "€700 – €1,200", note: "Most expensive city; expect long searches." },
  { city: "Berlin", monthlyRent: "€500 – €900", note: "Rising fast; districts vary hugely." },
  { city: "Hamburg", monthlyRent: "€500 – €900", note: "Strong Studentenwerk supply." },
  { city: "Frankfurt", monthlyRent: "€550 – €900", note: "Finance hub premium." },
  { city: "Cologne", monthlyRent: "€450 – €800", note: "Balanced market." },
  { city: "Stuttgart", monthlyRent: "€500 – €850", note: "Automotive-industry-driven demand." },
  { city: "Heidelberg", monthlyRent: "€450 – €750", note: "Small town, competitive Studentenwerk." },
  { city: "Dresden", monthlyRent: "€300 – €550", note: "Excellent value; many public dorms." },
  { city: "Leipzig", monthlyRent: "€300 – €550", note: "One of the cheapest big cities." },
  { city: "Aachen", monthlyRent: "€350 – €600", note: "RWTH-driven student market." },
];
