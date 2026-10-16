import { site } from "@/content/site";

export function Footer() {
  return (
    <footer className="border-t hairline">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-10 grid md:grid-cols-12 gap-6">
        <div className="md:col-span-6">
          <p className="display text-3xl sm:text-4xl">Let's talk.</p>
          <p className="mt-3 max-w-prose2 text-[14px] leading-relaxed">
            I'm open to new-grad full-time Software / AI Engineering roles
            starting in 2027. If you're building something where trust and
            observability actually matter, I'd love to hear about it.
          </p>
        </div>
        <div className="md:col-span-6 grid grid-cols-2 gap-6 text-[13.5px]">
          <div>
            <p className="text-[11px] uppercase tracking-widest opacity-70">
              write
            </p>
            <a href={`mailto:${site.links.email}`} className="underline-hover">
              {site.links.email}
            </a>
          </div>
          <div>
            <p className="text-[11px] uppercase tracking-widest opacity-70">
              elsewhere
            </p>
            <a href={site.links.github} className="block underline-hover">
              github / Nidhi0201
            </a>
            <a href={site.links.linkedin} className="block underline-hover">
              linkedin / np124
            </a>
            <a
              href={site.links.resume}
              download
              className="block underline-hover"
            >
              resume · engineer
            </a>
            <a
              href={site.links.resumePm}
              download
              className="block underline-hover"
            >
              resume · product
            </a>
          </div>
        </div>
      </div>
      <div className="border-t hairline-soft">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-4 flex items-center justify-between text-[11px] uppercase tracking-widest opacity-70 flex-wrap gap-2">
          <span>© {new Date().getFullYear()} {site.name}</span>
          <span>
            Set in Fraunces & JetBrains Mono. Built with Next.js. No analytics.
          </span>
        </div>
      </div>
    </footer>
  );
}
