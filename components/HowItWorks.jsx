import React from "react";

const STEPS = [
  {
    step: "01",
    title: "Register",
    desc: "Create your account in under a minute, no forms longer than they need to be.",
  },
  {
    step: "02",
    title: "Tell us what you need",
    desc: "Describe your project or problem in plain language. No technical spec required.",
  },
  {
    step: "03",
    title: "We scope and build",
    desc: "We review your request, confirm the plan with you, and get to work.",
  },
  {
    step: "04",
    title: "Track progress",
    desc: "Follow your request's status from your dashboard until it's delivered.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="max-w-6xl mx-auto px-4 sm:px-6 py-20">
      <div className="text-center max-w-2xl mx-auto mb-14">
        <p className="text-xs uppercase tracking-widest text-purple-300 mb-3">Process</p>
        <h2 className="text-3xl sm:text-4xl font-bold text-white">How it works</h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {STEPS.map(({ step, title, desc }, i) => (
          <div key={step} className="relative pl-2">
            <span className="text-4xl font-extrabold gradient-text">{step}</span>
            <h3 className="text-white font-semibold mt-3 mb-2">{title}</h3>
            <p className="text-sm text-muted leading-relaxed">{desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
