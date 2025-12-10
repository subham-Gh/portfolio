import React, { useState } from "react";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (!form.email || !form.message) {
      alert("Please enter at least your email and a message.");
      return;
    }

    const to = "ghoshsubham778@gmail.com";

    // ✅ Professional subject
    const subject = `Portfolio Inquiry from ${form.name || "Website Visitor"} – SAP UI5/Fiori & CAPM`;

    // ✅ Body = message + footer signature
    const bodyLines = [
      form.message, // only the message here
      "",
      "",
      "",
      "",
      "",
      "",
      "Regards,",
      `${form.name || "Not provided"}`,
      `Email: ${form.email}`,
    ];

    const body = bodyLines.join("\n");

    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
      to
    )}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    window.open(gmailUrl, "_blank");
  }

  return (
    <section id="contact" className="section-container">
      <div className="max-w-xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-3 text-center">
          Let&apos;s Connect
        </h2>
        <p className="text-sm text-slate-600 dark:text-slate-300 text-center mb-8">
          Looking for a SAP UI5/Fiori or CAPM-focused developer? Share your
          requirements and I&apos;ll get back to you as soon as possible.
        </p>

        <form
          onSubmit={handleSubmit}
          className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/80 shadow-soft backdrop-blur-md p-5 sm:p-6 space-y-4"
        >
          <div>
            <label
              htmlFor="name"
              className="block text-xs font-semibold text-slate-600 dark:text-slate-300 mb-1"
            >
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              value={form.name}
              onChange={handleChange}
              placeholder="Your name"
              className="w-full rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50/80 dark:bg-slate-950/40 px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-primary/70 dark:focus:ring-primary-light/80 focus:border-transparent transition-all"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-xs font-semibold text-slate-600 dark:text-slate-300 mb-1"
            >
              Your Email (so I can reply)
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              value={form.email}
              onChange={handleChange}
              placeholder="you@example.com"
              className="w-full rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50/80 dark:bg-slate-950/40 px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-primary/70 dark:focus:ring-primary-light/80 focus:border-transparent transition-all"
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-xs font-semibold text-slate-600 dark:text-slate-300 mb-1"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows="4"
              value={form.message}
              onChange={handleChange}
              placeholder="Tell me about your project, requirements, or role..."
              className="w-full rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50/80 dark:bg-slate-950/40 px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-primary/70 dark:focus:ring-primary-light/80 focus:border-transparent transition-all resize-none"
            />
          </div>

          <button
            type="submit"
            className="w-full inline-flex items-center justify-center px-4 py-2.5 text-sm font-semibold rounded-xl bg-primary text-white hover:bg-primary-light shadow-soft disabled:opacity-60 disabled:cursor-not-allowed transition-all"
          >
            Send via Gmail
          </button>

          <p className="text-[11px] text-slate-500 dark:text-slate-400 text-center mt-1">
            When you click &quot;Send via Gmail&quot;, a new Gmail compose tab
            will open with your message and signature pre-filled. Make sure
            you&apos;re logged into your Gmail account.
          </p>
        </form>
      </div>
    </section>
  );
}

export default Contact;
