import { MessagesSquare, GitBranch, Gauge, LifeBuoy } from "lucide-react";

const REASONS = [
  {
    icon: MessagesSquare,
    title: "No jargon, no middlemen",
    desc: "You describe the problem in plain language. We handle the technical translation, you're never talking to a sales layer that doesn't understand the build.",
  },
  {
    icon: GitBranch,
    title: "Built to be maintained",
    desc: "Clean, documented code using widely-adopted tools, not a fragile custom framework only we can touch. If you ever need another developer to pick it up, they can.",
  },
  {
    icon: Gauge,
    title: "Performance from the start",
    desc: "Server-side rendering, image optimization, and responsive design aren't an afterthought bolted on later, they're part of how every build starts.",
  },
  {
    icon: LifeBuoy,
    title: "Support after launch",
    desc: "Shipping isn't the finish line. We stay reachable for fixes, small iterations, and questions after your product is live.",
  },
];

export default function WhyUs() {
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 py-20">
      <div className="text-center max-w-2xl mx-auto mb-14">
        <p className="text-xs uppercase tracking-widest text-purple-300 mb-3">Why NovaGlide</p>
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
          Built like a product, not a favor
        </h2>
        <p className="text-muted">
          A lot of freelance builds fall apart after launch. Here&apos;s what we do differently.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {REASONS.map(({ icon: Icon, title, desc }) => (
          <div key={title} className="glass-panel rounded-2xl p-6 sm:p-7">
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20 flex items-center justify-center mb-4">
              <Icon size={20} className="text-purple-300" />
            </div>
            <h3 className="text-white font-semibold mb-2">{title}</h3>
            <p className="text-sm text-muted leading-relaxed">{desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}