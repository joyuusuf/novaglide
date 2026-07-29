import { ShieldCheck, MessageCircle, Code2, Clock } from "lucide-react";

const POINTS = [
  { icon: MessageCircle, label: "You talk directly to the person building it" },
  { icon: Code2, label: "Modern stack: React, Next.js, TypeScript" },
  { icon: Clock, label: "Clear timelines, no vanishing after kickoff" },
  { icon: ShieldCheck, label: "You own the code, no lock-in" },
];

export default function TrustStrip() {
  return (
    <section className="border-y border-line bg-white/[0.02]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
        {POINTS.map(({ icon: Icon, label }) => (
          <div key={label} className="flex items-center gap-2.5">
            <Icon size={18} className="text-purple-300 shrink-0" />
            <p className="text-xs sm:text-sm text-slate-300 leading-snug">{label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
