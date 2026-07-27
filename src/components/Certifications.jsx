import React from "react";
import portfolioData from "../data/portfolioData";

export default function Certifications() {
  const { certifications } = portfolioData;

  return (
    <section className="py-8 px-4 md:px-8 bg-slate-900 text-slate-100 rounded-lg">
      <h2 className="text-2xl font-semibold mb-4">Certifications & Events</h2>
      <ul className="list-disc pl-5 space-y-2 text-slate-300">
        {certifications.map((c) => (
          <li key={c}>{c}</li>
        ))}
      </ul>
    </section>
  );
}
