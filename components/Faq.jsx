'use client';

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const FAQS = [
  {
    q: "I'm not technical. Can I still explain what I need?",
    a: "Yes. That's the point. Describe the problem in your own words, what it should do and who will use it. We'll ask follow-up questions and translate it into a technical plan.",
  },
  {
    q: "How long does a typical build take?",
    a: "It depends entirely on scope. A landing page can ship in days, a full web app with accounts and a database takes longer. Once you submit a request, we'll give you a realistic timeline before any work starts.",
  },
  {
    q: "Do I own the code once it's built?",
    a: "Yes. You own what's built for you. No lock-in, no dependency on us to keep it running if you decide to move on.",
  },
  {
    q: "What happens after the app is delivered?",
    a: "We stay reachable for fixes and small iterations. If you need ongoing feature development, we can also discuss an extended engagement.",
  },
  {
    q: "What if I only have a rough idea, not a full spec?",
    a: "That's normal and expected. Most requests start as a rough idea. Part of the process is helping you shape it into something buildable.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <section className="max-w-3xl mx-auto px-4 sm:px-6 py-20">
      <div className="text-center mb-12">
        <p
          className="text-xs uppercase tracking-widest mb-3"
          style={{ color: "#c4b5fd" }}
        >
          FAQ
        </p>
        <h2
          className="text-3xl sm:text-4xl font-bold"
          style={{ color: "#ffffff" }}
        >
          Common questions
        </h2>
      </div>

      <div className="flex flex-col gap-3">
        {FAQS.map((item, i) => {
          const isOpen = open === i;
          return (
            <div key={item.q} className="glass-panel rounded-2xl overflow-hidden">
              <button
                onClick={() => setOpen(isOpen ? -1 : i)}
                className="w-full flex items-center justify-between gap-4 text-left px-5 sm:px-6 py-4 sm:py-5"
              >
                <span
                  className="font-medium text-sm sm:text-base"
                  style={{ color: "#ffffff" }}
                >
                  {item.q}
                </span>
                <ChevronDown
                  size={18}
                  className={`shrink-0 transition-transform duration-300 ${
                    isOpen ? "rotate-180" : ""
                  }`}
                  style={{ color: "#9ca3af" }}
                />
              </button>
              <div
                className={`grid transition-all duration-300 ease-out ${
                  isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <p
                    className="text-sm leading-relaxed px-5 sm:px-6 pb-5 sm:pb-6"
                    style={{ color: "#d1d5db" }}
                  >
                    {item.a}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}