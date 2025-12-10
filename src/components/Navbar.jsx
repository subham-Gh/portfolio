import React, { useState } from "react";

function Navbar({ darkMode, setDarkMode }) {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "Resume", href: "#resume" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header
      id="top"
      className="sticky top-0 z-30 backdrop-blur bg-slate-50/80 dark:bg-slate-950/80 border-b border-slate-200/60 dark:border-slate-800"
    >
      <div className="section-container py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-xl bg-primary/10 dark:bg-primary/20 flex items-center justify-center text-primary dark:text-primary-light font-bold">
            SG
          </div>
          <div>
            <p className="text-sm font-semibold tracking-tight">Subham Ghosh</p>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              SAP UI5 / Fiori Developer
            </p>
          </div>
        </div>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary-light transition-colors"
            >
              {link.label}
            </a>
          ))}

          {/* Dark / Light toggle */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="relative inline-flex h-8 w-14 items-center rounded-full border border-slate-300 dark:border-slate-700 bg-slate-100 dark:bg-slate-800 px-1 transition-colors"
            aria-label="Toggle dark mode"
          >
            <span
              className={`inline-flex h-6 w-6 transform items-center justify-center rounded-full bg-white dark:bg-slate-900 shadow-sm transition-transform ${
                darkMode ? "translate-x-6" : ""
              }`}
            >
              {darkMode ? "🌙" : "☀️"}
            </span>
          </button>
        </nav>

        {/* Mobile actions */}
        <div className="flex items-center gap-3 md:hidden">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-1.5 rounded-full border border-slate-300 dark:border-slate-700 bg-slate-100 dark:bg-slate-800 text-lg"
          >
            {darkMode ? "🌙" : "☀️"}
          </button>
          <button
            onClick={() => setOpen(!open)}
            className="p-1.5 rounded-md border border-slate-300 dark:border-slate-700"
          >
            <span className="sr-only">Toggle menu</span>
            {open ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav className="md:hidden border-t border-slate-200 dark:border-slate-800 bg-slate-50/95 dark:bg-slate-950/95">
          <div className="section-container py-3 flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-sm font-medium text-slate-700 dark:text-slate-200 hover:text-primary dark:hover:text-primary-light"
              >
                {link.label}
              </a>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}

export default Navbar;
