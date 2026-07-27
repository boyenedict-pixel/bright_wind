import React from "react";
import portfolioData from "../data/portfolioData";

export default function Footer() {
  const { privacyPolicy } = portfolioData.contact;

  return (
    <footer className="mt-8 py-6 px-4 md:px-8 bg-slate-900 text-slate-400 border-t border-slate-800">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3">
        <p className="text-sm text-slate-300">
          © 2026 Bright Oluwagbemiga Ajiboye. All rights reserved.
        </p>

        <div className="flex items-center gap-4">
          <a
            href={privacyPolicy}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-sky-300 hover:underline"
          >
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
}
