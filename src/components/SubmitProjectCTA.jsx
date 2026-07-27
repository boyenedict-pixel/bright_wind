import React, { useState } from "react";

/**
 * Floating CTA button that opens an inline modal for submitting a project brief.
 * - Non-redirecting inline modal
 */
export default function SubmitProjectCTA() {
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    projectName: "",
    brief: "",
  });
  const [status, setStatus] = useState(null);

  function handleChange(e) {
    setForm((s) => ({ ...s, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    // No backend wired up here — logs locally. Replace with an API call as needed.
    console.log("Project brief submitted:", form);
    setStatus("success");
    setForm({ name: "", email: "", projectName: "", brief: "" });
    setTimeout(() => {
      setStatus(null);
      setOpen(false);
    }, 1400);
  }

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="fixed right-6 bottom-6 z-50 inline-flex items-center gap-2 px-4 py-3 rounded-full bg-sky-500 hover:bg-sky-400 text-slate-900 shadow-lg border border-slate-800"
        aria-haspopup="dialog"
        aria-expanded={open}
      >
        Submit Your Project Brief
      </button>

      {open && (
        <>
          <div
            className="fixed inset-0 bg-black/50 z-40"
            onClick={() => setOpen(false)}
            aria-hidden="true"
          />
          <div
            role="dialog"
            aria-modal="true"
            className="fixed right-6 bottom-20 z-50 w-[min(420px,calc(100%-40px))] bg-slate-900 text-slate-100 rounded-lg shadow-xl border border-slate-800"
          >
            <div className="p-4">
              <div className="flex items-start justify-between">
                <h3 className="text-lg font-semibold">Project Brief</h3>
                <button
                  aria-label="Close"
                  onClick={() => setOpen(false)}
                  className="text-slate-300 hover:text-slate-100"
                >
                  ✕
                </button>
              </div>

              <form onSubmit={handleSubmit} className="mt-3 space-y-3">
                <div>
                  <label className="block text-sm text-slate-300 mb-1">
                    Your name
                  </label>
                  <input
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded text-slate-100 text-sm"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm text-slate-300 mb-1">
                    Email
                  </label>
                  <input
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    type="email"
                    className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded text-slate-100 text-sm"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm text-slate-300 mb-1">
                    Project name
                  </label>
                  <input
                    name="projectName"
                    value={form.projectName}
                    onChange={handleChange}
                    className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded text-slate-100 text-sm"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm text-slate-300 mb-1">
                    Brief
                  </label>
                  <textarea
                    name="brief"
                    value={form.brief}
                    onChange={handleChange}
                    className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded text-slate-100 text-sm min-h-[96px]"
                    required
                  />
                </div>

                <div className="flex items-center justify-between gap-2">
                  <button
                    type="submit"
                    className="inline-flex items-center px-4 py-2 bg-sky-500 hover:bg-sky-400 text-slate-900 rounded font-medium"
                  >
                    Send brief
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setForm({ name: "", email: "", projectName: "", brief: "" });
                      setStatus(null);
                    }}
                    className="text-sm text-slate-300 hover:text-slate-100"
                  >
                    Reset
                  </button>
                </div>

                {status === "success" && (
                  <p className="text-sm text-sky-300">Brief submitted — thanks!</p>
                )}
              </form>
            </div>
          </div>
        </>
      )}
    </>
  );
}
