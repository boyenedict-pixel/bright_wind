import React from "react";
import portfolioData from "../data/portfolioData";

const Pill = ({ children }) => (
  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-slate-800 text-sky-300 border border-slate-700">
    {children}
  </span>
);

export default function TechStack() {
  const { hardwareEmbedded, softwareWeb } = portfolioData.techStack;

  return (
    <section
      className="py-8 px-4 md:px-8 bg-slate-900 text-slate-100 rounded-lg"
      aria-labelledby="tech-heading"
    >
      <h2 id="tech-heading" className="text-2xl font-semibold mb-4">
        Tech Stack
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h3 className="text-lg font-medium text-slate-100 mb-3">
            Hardware & Embedded Systems
          </h3>
          <div className="flex flex-wrap gap-3">
            {hardwareEmbedded.map((item) => (
              <Pill key={item}>{item}</Pill>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-lg font-medium text-slate-100 mb-3">
            Software & Full-Stack Development
          </h3>
          <div className="flex flex-wrap gap-3">
            {softwareWeb.map((item) => (
              <Pill key={item}>{item}</Pill>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
