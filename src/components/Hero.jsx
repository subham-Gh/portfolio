import React from "react";

function Hero() {
  return (
    <section
      id="home"
      className="section-container pt-12 sm:pt-16 lg:pt-20"
    >
      <div className="grid md:grid-cols-2 gap-10 items-center">
        {/* Left Content */}
        <div className="space-y-6 animate-slide-in-left">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-primary dark:text-primary-light">
            Software Engineer • SAP UI5 • SAP Fiori • CAPM Certified
          </p>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
            Enterprise SAP UI5 &{" "}
            <span className="text-primary dark:text-primary-light">
              Fiori Application Developer
            </span>
          </h1>

          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed max-w-xl">
            Software Engineer with hands-on experience in SAP UI5 and SAP Fiori
            application development. Skilled in building responsive,
            enterprise-grade applications using XML views, JavaScript, HTML5,
            and CSS3 while adhering to SAP Fiori design principles. Proficient
            in integrating OData V2 services, implementing MVC architecture,
            and deploying applications on SAP BTP Cloud Foundry. CAPM-certified
            professional with strong fundamentals in Agile delivery, project
            documentation, and structured execution.
          </p>

          <div className="flex flex-wrap gap-3">
            <a
              href="#projects"
              className="px-5 py-2.5 text-sm font-semibold rounded-full bg-primary text-white shadow-soft hover:bg-primary-light transition-all"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="px-5 py-2.5 text-sm font-semibold rounded-full border border-slate-300 dark:border-slate-700 hover:text-primary transition-all"
            >
              Contact Me
            </a>
          </div>

          <div className="flex flex-wrap gap-2 text-xs text-slate-500 dark:text-slate-400">
            {[
              "SAP UI5",
              "SAP Fiori",
              "OData V2",
              "SAP BTP",
              "CAPM",
              "Agile Delivery",
            ].map((skill) => (
              <span
                key={skill}
                className="px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Right Card */}
        <div className="animate-fade-in-up">
          <div className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/70 backdrop-blur-md shadow-soft p-6 space-y-4">
            <h3 className="font-semibold text-sm">
              Professional Snapshot
            </h3>
            <ul className="text-sm space-y-2">
              <li><strong>Role:</strong> Software Engineer (SAP UI5 / Fiori)</li>
              <li><strong>Experience:</strong> 2+ Years</li>
              <li><strong>Certification:</strong> CAPM</li>
              <li><strong>Deployment:</strong> SAP BTP – Cloud Foundry</li>
              <li><strong>Focus:</strong> Enterprise UI, OData Integration</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
