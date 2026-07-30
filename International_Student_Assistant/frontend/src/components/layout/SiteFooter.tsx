import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-[#4725C6] bg-[#4725C6] text-white">
      <div className="container-page grid gap-10 py-14 md:grid-cols-4">
        <div className="md:col-span-2">
          <Link to="/" className="inline-flex items-center">
            <img
              src="/isa-white-logo.svg"
              alt="International Student Assistance"
              className="h-16 w-auto max-w-[240px] object-contain"
            />
          </Link>

          <p className="mt-4 max-w-md text-sm text-white/75">
            An independent guide for international students choosing, arriving
            in, and thriving in Germany. Curated from DAAD, uni-assist,
            Studierendenwerk, Goethe-Institut and BAMF — with a community of
            students on the ground.
          </p>
        </div>

        <div>
          <div className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#C4E64C]">
            Explore
          </div>

          <ul className="space-y-2 text-sm">
            <li>
              <Link
                to="/universities"
                className="text-white transition-colors hover:text-[#C4E64C]"
              >
                Universities
              </Link>
            </li>

            <li>
              <Link
                to="/accommodation"
                className="text-white transition-colors hover:text-[#C4E64C]"
              >
                Accommodation
              </Link>
            </li>

            <li>
              <Link
                to="/guides"
                className="text-white transition-colors hover:text-[#C4E64C]"
              >
                Student guides
              </Link>
            </li>

            <li>
              <Link
                to="/german-language"
                className="text-white transition-colors hover:text-[#C4E64C]"
              >
                German language
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <div className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#C4E64C]">
            Official sources
          </div>

          <ul className="space-y-2 text-sm">
            <li>
              <a
                href="https://www.daad.de/en/"
                target="_blank"
                rel="noreferrer"
                className="text-white transition-colors hover:text-[#C4E64C]"
              >
                DAAD
              </a>
            </li>

            <li>
              <a
                href="https://www.uni-assist.de/en/"
                target="_blank"
                rel="noreferrer"
                className="text-white transition-colors hover:text-[#C4E64C]"
              >
                uni-assist
              </a>
            </li>

            <li>
              <a
                href="https://www.studentenwerke.de/en"
                target="_blank"
                rel="noreferrer"
                className="text-white transition-colors hover:text-[#C4E64C]"
              >
                Studentenwerke
              </a>
            </li>

            <li>
              <a
                href="https://www.bamf.de/EN/"
                target="_blank"
                rel="noreferrer"
                className="text-white transition-colors hover:text-[#C4E64C]"
              >
                BAMF (immigration)
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/20">
        <div className="container-page flex flex-col items-center justify-between gap-3 py-6 text-xs text-white/70 sm:flex-row">
          <div>
            © {new Date().getFullYear()} International Student Assistance —
            Final year project.
          </div>

          <div>
            Data curated from public sources; verify with the official
            institution.
          </div>
        </div>
      </div>
    </footer>
  );
}