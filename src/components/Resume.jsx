import React from "react";

const RESUME_FILE = "/Subham_Ghosh_Resume.pdf";

function Resume() {
  return (
    <section id="resume" className="section-container">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-3">Resume</h2>

        <p className="text-sm text-slate-600 dark:text-slate-300 mb-6">
          Download my updated resume highlighting SAP UI5 and SAP Fiori
          development experience, OData integration, SAP BTP deployment,
          and CAPM-aligned Agile project execution.
        </p>

        <div className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/80 shadow-soft p-6 flex flex-col sm:flex-row justify-between gap-4">
          <div>
            <p className="font-semibold">
              Subham Ghosh – Software Engineer
            </p>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              SAP UI5 • SAP Fiori • SAP BTP • CAPM Certified
            </p>
          </div>

          <a
            href={RESUME_FILE}
            download
            className="px-5 py-2.5 text-sm font-semibold rounded-xl bg-primary text-white hover:bg-primary-light transition-all"
          >
            ⬇ Download Resume
          </a>
        </div>
      </div>
    </section>
  );
}

export default Resume;
