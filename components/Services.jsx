import React from "react";
import { LayoutDashboard, Smartphone, Globe, Workflow } from "lucide-react";
import TiltCard from "./TiltCard";

const SERVICES = [
  {
    icon: Globe,
    title: "Websites & Web Apps",
    desc: "Fast, SEO-friendly sites and full web applications built with modern frontend tools.",
  },
  {
    icon: LayoutDashboard,
    title: "Dashboards & Admin Tools",
    desc: "Internal tools that turn scattered data into something your team can actually use.",
  },
  {
    icon: Workflow,
    title: "Process Automation",
    desc: "We map out repetitive manual work and replace it with a system that runs itself.",
  },
  {
    icon: Smartphone,
    title: "Responsive by Default",
    desc: "Everything we build works cleanly across phones, tablets, and desktops from day one.",
  },
];

export default function Services() {
  return (
    <section id="services" className="max-w-6xl mx-auto px-4 sm:px-6 py-20">
      <div className="text-center max-w-2xl mx-auto mb-14">
        <p className="text-xs uppercase tracking-widest text-purple-300 mb-3">What we offer</p>
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
          One team, every piece of your product
        </h2>
        <p className="text-muted">
          You don&apos;t need to know the tech stack. Tell us the problem, we handle the build.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {SERVICES.map(({ icon: Icon, title, desc }, i) => (
          <div
            key={title}
            className="motion-safe:animate-float"
            style={{ animationDelay: `${i * 0.5}s` }}
          >
            <TiltCard className="group glass-panel rounded-2xl p-6 hover:border-purple-400/30 hover:shadow-glow transition-colors duration-300 cursor-default">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20 flex items-center justify-center mb-4 transition-transform duration-500 ease-out group-hover:rotate-[360deg] group-hover:scale-110">
                <Icon size={20} className="text-purple-300" />
              </div>
              <h3 className="text-white font-semibold mb-2">{title}</h3>
              <p className="text-sm text-muted leading-relaxed">{desc}</p>
            </TiltCard>
          </div>
        ))}
      </div>
    </section>
  );
}