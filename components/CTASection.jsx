import React from "react";
import Link from "next/link";

export default function CTASection() {
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 pb-24">
      <div className="glass-panel rounded-3xl px-6 sm:px-12 py-14 text-center relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -top-20 left-1/3 w-[300px] h-[300px] bg-pink-600/15 rounded-full blur-[110px]" />
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
          Have something that needs building?
        </h2>
        <p className="text-muted max-w-xl mx-auto mb-8">
          Register and tell us about it. We&apos;ll get back to you with a plan.
        </p>
        <Link
          href="/register"
          className="inline-block px-7 py-3.5 rounded-full font-medium text-white bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:opacity-90 transition-opacity"
        >
          Get started
        </Link>
      </div>
    </section>
  );
}
