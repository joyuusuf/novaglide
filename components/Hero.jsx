'use client';

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden min-h-[calc(100dvh-72px)] flex items-center">
      <Image
        src="/images/hero-bg.jpg"
        alt=""
        fill
        priority
        className="object-cover -z-20"
      />

      {/* Background Overlays */}
      <div className="absolute inset-0 -z-10 bg-base/80" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-base via-base/70 to-base" />

      {/* Glow Effects */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-[420px] h-[420px] bg-purple-600/20 rounded-full blur-[130px]" />
        <div className="absolute top-40 right-1/4 w-[360px] h-[360px] bg-blue-600/15 rounded-full blur-[130px]" />
      </div>

      <div className="max-w-4xl mx-auto text-center px-5 sm:px-6 py-10 sm:py-16 animate-fadeUp">
        <span className="inline-flex items-center gap-2 text-[11px] sm:text-xs uppercase tracking-wide sm:tracking-widest text-purple-300 border border-purple-500/30 rounded-full px-3.5 py-1.5 mb-5 sm:mb-6 whitespace-nowrap">
          Tell us what you need. We build it.
        </span>

        <h1 className="text-[28px] leading-[1.2] sm:text-4xl sm:leading-[1.15] lg:text-6xl lg:leading-[1.1] font-extrabold text-white mb-4 sm:mb-6">
          Software built around
          <br />
          <span className="gradient-text">
            what your business actually needs
          </span>
        </h1>

        <p className="text-sm sm:text-lg text-muted max-w-2xl mx-auto mb-8 sm:mb-10 leading-relaxed px-1 sm:px-0">
          NovaGlide Tech Solutions turns a plain description of your problem
          into a working product. Register, describe what you need, and we take
          it from there, no technical jargon required on your end.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/register"
            className="
              group
              inline-flex items-center justify-center gap-2
              w-full sm:w-auto
              px-7 py-3.5
              rounded-full
              font-medium
              text-white
              bg-gradient-to-r
              from-blue-500
              via-purple-500
              to-pink-500

              shadow-lg shadow-purple-500/20

              transition-all duration-300 ease-out

              hover:-translate-y-1
              hover:scale-[1.03]
              hover:brightness-110
              hover:shadow-[0_12px_35px_rgba(168,85,247,0.45)]

              active:scale-95
            "
          >
            Get started
            <ArrowRight
              size={18}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>

          <a
            href="#services"
            className="
              inline-flex items-center justify-center
              w-full sm:w-auto
              px-7 py-3.5
              rounded-full
              font-medium
              text-white

              border border-white/20
              bg-white/5
              backdrop-blur-sm

              transition-all duration-300 ease-out

              hover:-translate-y-1
              hover:scale-[1.03]
              hover:bg-white/10
              hover:border-purple-400/60
              hover:shadow-[0_12px_35px_rgba(59,130,246,0.30)]

              active:scale-95
            "
          >
            See what we offer
          </a>
        </div>
      </div>
    </section>
  );
}