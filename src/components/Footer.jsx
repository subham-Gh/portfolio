import React from "react";

function Footer() {
  return (
    <footer className="border-t border-slate-200 dark:border-slate-800">
      <div className="section-container py-6 text-xs flex flex-col sm:flex-row justify-between gap-3 text-slate-500 dark:text-slate-400">
        <p>© {new Date().getFullYear()} Subham Ghosh. All rights reserved.</p>
        <p>
          Software Engineer | SAP UI5 • SAP Fiori • SAP BTP • CAPM Certified
        </p>
      </div>
    </footer>
  );
}

export default Footer;
