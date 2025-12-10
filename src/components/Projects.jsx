import React from "react";

const projects = [
  {
    title: "SAP BTP Deployment & Release Management Simulation",
    role: "SAP UI5 Developer | CAPM-Oriented Delivery",
    tech: [
      "SAP UI5",
      "SAP BTP Cloud Foundry",
      "Git",
      "Release Management",
      "CAPM",
    ],
    description:
      "Led the end-to-end deployment of an SAP UI5 application on SAP BTP Cloud Foundry. Managed transport readiness, testing coordination, and production preparation. Created release schedules, RAID logs, transport checklists, and stakeholder communication plans to ensure structured and compliant project execution.",
  },
  {
    title: "SAP UI5 Employee Self-Service Application",
    role: "SAP UI5 / Fiori Developer",
    tech: [
      "SAP UI5",
      "XML Views",
      "JavaScript",
      "MVC Architecture",
      "OData V2",
    ],
    description:
      "Designed and developed an Employee Self-Service SAP UI5 application using XML views, JavaScript controllers, fragments, and MVC architecture. Integrated OData V2 services and applied Agile and CAPM methodologies by preparing project charter, WBS, sprint backlog, and release plan.",
  },
];

function Projects() {
  return (
    <section id="projects" className="section-container">
      <h2 className="text-3xl font-bold mb-6">Projects</h2>

      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <div
            key={project.title}
            className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/60 backdrop-blur-md shadow-soft p-6 hover:-translate-y-1 transition-all"
          >
            <h3 className="font-semibold text-lg">{project.title}</h3>
            <p className="text-sm text-primary mb-2">{project.role}</p>
            <p className="text-sm text-slate-600 dark:text-slate-300 mb-4">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 text-xs">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-700"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
