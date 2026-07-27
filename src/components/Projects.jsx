import React from "react";
import portfolioData from "../data/portfolioData";

/**
 * Projects - horizontal card carousel
 * - image header fixed height
 * - overlay domain badges
 * - hover zoom effect on image
 */
export default function Projects() {
  const { projects } = portfolioData;

  return (
    <section className="py-8 px-4 md:px-8 bg-slate-950 text-slate-100 rounded-lg">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-semibold">Projects</h2>
      </div>

      <div
        className="flex gap-6 overflow-x-auto pb-4 -mx-4 px-4"
        aria-label="Projects carousel"
      >
        {projects.map((p) => (
          <article
            key={p.title}
            className="w-80 flex-shrink-0 bg-slate-800 rounded-lg shadow-md border border-slate-700"
          >
            <div className="relative h-44 overflow-hidden rounded-t-lg">
              <img
                src={p.image}
                alt={p.title}
                className="w-full h-full object-cover transform transition-transform duration-300 ease-out hover:scale-105"
              />
              <span className="absolute top-3 left-3 bg-slate-900/70 text-sky-200 px-2 py-1 rounded text-sm font-semibold border border-slate-700">
                {p.domainBadge}
              </span>
              <div className="absolute top-3 right-3 flex gap-2">
                {p.tags?.slice(0, 3).map((t) => (
                  <span
                    key={t}
                    className="bg-slate-900/60 text-sky-100 text-xs px-2 py-1 rounded"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="p-4">
              <h3 className="text-lg font-semibold mb-1">{p.title}</h3>
              <p className="text-sm text-slate-300 mb-4 line-clamp-3">
                {p.description}
              </p>

              <div className="flex gap-2">
                {p.liveUrl ? (
                  <a
                    href={p.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-3 py-2 text-sm bg-sky-500 hover:bg-sky-400 text-slate-900 rounded-md font-medium"
                    aria-label={`Open live demo for ${p.title}`}
                  >
                    Live Demo
                  </a>
                ) : (
                  <button
                    disabled
                    className="inline-flex items-center justify-center px-3 py-2 text-sm bg-slate-700 text-slate-400 rounded-md"
                  >
                    Live Demo
                  </button>
                )}

                {p.repoUrl ? (
                  <a
                    href={p.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-3 py-2 text-sm bg-slate-700 hover:bg-slate-600 text-slate-100 rounded-md border border-slate-600"
                    aria-label={`Open GitHub repository for ${p.title}`}
                  >
                    GitHub
                  </a>
                ) : (
                  <button
                    disabled
                    className="inline-flex items-center justify-center px-3 py-2 text-sm bg-slate-700 text-slate-400 rounded-md"
                  >
                    GitHub
                  </button>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
