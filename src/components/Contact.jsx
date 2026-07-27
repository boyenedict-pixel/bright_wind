import React, { useState } from "react";
import portfolioData from "../data/portfolioData";

/**
 * Contact section:
 * - Clickable mailto: links with copy-to-clipboard buttons
 * - tel: links for phones
 */
export default function Contact() {
  const { contact } = portfolioData;
  const [copied, setCopied] = useState(null);

  async function copyToClipboard(text, id) {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(id);
      setTimeout(() => setCopied(null), 1400);
    } catch (err) {
      console.error("Copy failed", err);
      // fallback
      const input = document.createElement("input");
      input.value = text;
      document.body.appendChild(input);
      input.select();
      document.execCommand("copy");
      document.body.removeChild(input);
      setCopied(id);
      setTimeout(() => setCopied(null), 1400);
    }
  }

  return (
    <section className="py-8 px-4 md:px-8 bg-slate-900 text-slate-100 rounded-lg">
      <h2 className="text-2xl font-semibold mb-4">Contact</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h3 className="text-lg font-medium mb-2">Email</h3>
          <ul className="space-y-2">
            {contact.emails.map((email) => (
              <li
                key={email}
                className="flex items-center justify-between gap-3 bg-slate-800 p-3 rounded border border-slate-700"
              >
                <a
                  href={`mailto:${email}`}
                  className="text-slate-100 hover:underline"
                >
                  {email}
                </a>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => copyToClipboard(email, email)}
                    className="text-sm text-slate-300 hover:text-slate-100"
                    aria-label={`Copy ${email}`}
                  >
                    {copied === email ? "Copied!" : "Copy"}
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-medium mb-2">Phone</h3>
          <ul className="space-y-2">
            {contact.phones.map((phone) => (
              <li
                key={phone}
                className="flex items-center justify-between gap-3 bg-slate-800 p-3 rounded border border-slate-700"
              >
                <a
                  href={`tel:${phone}`}
                  className="text-slate-100 hover:underline"
                >
                  {phone}
                </a>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => copyToClipboard(phone, phone)}
                    className="text-sm text-slate-300 hover:text-slate-100"
                    aria-label={`Copy ${phone}`}
                  >
                    {copied === phone ? "Copied!" : "Copy"}
                  </button>
                </div>
              </li>
            ))}
          </ul>

          <p className="mt-4 text-sm text-slate-400">
            Location: <span className="text-slate-200">{contact.location}</span>
          </p>
        </div>
      </div>
    </section>
  );
}
